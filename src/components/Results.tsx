import { Question } from "@/types/Question"


type Props = {
    questions: Question[];
    answers: number[];
}

export const Results = ({questions, answers}:Props) =>{


    
    return(
        <div >
            {
                questions.map((item, key )=>(
                    <div key={key} className="mb-3 text-justify" >
                        <div key={key} className=" text-justify  font-bold text-black">{key +1 }.{ item.question}</div>
                        <div>
                            <span>({item.answer === answers[key]?'Certo': 'Errado'})- {item.options[item.answer]}</span>
                        </div>
                    </div>
                    
                    
                ) )
            }
        </div>
    )
}