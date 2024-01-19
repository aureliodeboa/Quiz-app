"use client"
import { useState } from "react";
import { questions } from "@/data/questions";
import { QuestionItem } from "@/components/QuestionItem";
import { Results } from "@/components/Results";



const Page = ()=>{
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers]= useState<number[]>([]);
  const [showResult, setShowResult]= useState(false);

  const title = "Perguntas do milhão";

  const loadNextQuestion= ()=>{
    if(questions[currentQuestion+1]){
      setCurrentQuestion(currentQuestion+1);
    }else  {
      setShowResult(true);
    }
  };

  const handleAnswered = (answer: number ) => {
    setAnswers([...answers, answer]);
     loadNextQuestion();
  }
  const handleRestart = ()=>{
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  }
  return(
    <div className="w-full h-screen flex justify-center items-center bg-blue-600 ">
      <div className="w-full max-w-xl  text-black   bg-white rounded-md shadow shadow-black">
        <div className="p-5 text-centertext-xl font-bold border-b border-gray-300">{title}</div>
        <div className="p-5">
          {!showResult && 
           <QuestionItem
            question={questions[currentQuestion]}
            count={currentQuestion+1}
            onAnswer={handleAnswered}
          />}
          {
            showResult &&
            <Results questions={questions} answers ={answers} />
          }
        </div>
        <div className="p-5 text-center  border-t  border-gray-300">
          {!showResult &&
            ` ${currentQuestion + 1 } de ${questions.length} pergunta${questions.length === 1 ?'':'s'}`
          }
          {
            showResult &&

            <button className="px-3 py-2 rounded-md bg-blue-700 text-white "
              onClick={handleRestart}
            >Reiniciar Quiz</button>
          }
         
        </div>
      </div>
    </div>
  );
}

export default Page;