"use client"
import { useState } from "react";
import { questions } from "@/data/questions";
import { QuestionItem } from "@/components/QuestionItem";



const Page = ()=>{
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const title = "Perguntas do milhão";
  const handleAnswered = (answer: number ) => {
    
  }
  return(
    <div className="w-full h-screen flex justify-center items-center bg-blue-600 ">
      <div className="w-full max-w-xl  text-black   bg-white rounded-md shadow shadow-black">
        <div className="p-5 text-centertext-xl font-bold border-b border-gray-300">{title}</div>
        <div className="p-5">
          <QuestionItem
            question={questions[currentQuestion]}
            count={currentQuestion+1}
            onAnswer={handleAnswered}
          />
        </div>
        <div className="p-5 text-center  border-t  border-gray-300">
          {currentQuestion + 1 } de {questions.length} pergunta{questions.length === 1 ?'':'s'}
        </div>
      </div>
    </div>
  );
}

export default Page;