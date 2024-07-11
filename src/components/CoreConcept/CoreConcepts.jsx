import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../../data";
export default function CoreConcepts(){
    const coreConcepts = CORE_CONCEPTS.map(item=> (<CoreConcept key={item.title} {...item } />));
    return (
      <section id='core-concepts'>
        <ul>
          {
            coreConcepts
          }
        </ul>
      </section>
    )
}