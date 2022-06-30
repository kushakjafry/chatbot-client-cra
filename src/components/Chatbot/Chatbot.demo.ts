import axios from "axios";
const chatQuestionsRandom = [
  "What would you like to share with me?",
  "Okay, what happened on the 9th of January?",
  "Ohh that great, what had happened?",
  "Was there a time you felt you were treated unfairly?",
  "Tell me about an extraordinary thing that happened ?",
  "Did you get in trouble and why?",
];

class ChatbotQuestionsProxy {
  questionNumber: number = 0;

  generateSpeechMarksData(marks: any) {
    marks = "[" + marks + "]";
    marks = marks.replace(new RegExp("}\n{", "g"), "},{");
    let marksJson = JSON.parse(marks);
    let frames = [];
    let words = [];
    let counter = 0;
    for (let i = 0; i < marksJson.length; i++) {
      let tmp: any = {};
      if (marksJson[i].type === "word") {
        words.push(marksJson[i].value.toLowerCase());
      }
      if (marksJson[i].type === "word" && !frames[counter]) {
        tmp.time = marksJson[i].time;
        tmp.start = marksJson[i].time;
        tmp.end = 0;
        frames.push(tmp);
      } else if (
        marksJson[i].type === "viseme" &&
        marksJson[i].value === "sil" &&
        frames.length
      ) {
        frames[counter].end = marksJson[i].time;
        counter++;
      }
    }
    return { frames: frames, words: words };
  }

  async getText() {
    const questionText = chatQuestionsRandom[this.questionNumber];
    const audio = (
      await axios.get(`/speech/Q-${this.questionNumber + 1}.mp3`, {
        responseType: "blob",
      })
    ).data;
    const marks = (
      await axios.get(`/speech/Q-${this.questionNumber + 1}.marks`)
    ).data;
    const speechMarks = this.generateSpeechMarksData(marks);
    this.questionNumber++;
    return { audio, speechMarks, questionText };
  }
}

export { chatQuestionsRandom, ChatbotQuestionsProxy };
