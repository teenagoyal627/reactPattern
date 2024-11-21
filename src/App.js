import React from "react";
import Accordion from "./Component/Accordion/Accordion";
import AccordionItem from "./Component/Accordion/AccordionItem";
import SearchableList from "./Component/Searchable/SearchableList";
import Place from "./Component/Searchable/Place";
const PLACES = [
  {
    id: 'african-savanna',
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];
const App = () => {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item className="accordion-item">
            <Accordion.Title className="accordion-item-title" id="e1">
              We got 20 year of experience
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content" id="e1">
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  We are in the business of planning highly individualized
                  vacation trips for more than 20 years.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item className="accordion-item">
            <Accordion.Title className="accordion-item-title" id="e2">
              We got 20 year of experience
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content" id="e2">
              <article>
                <p>We are not doing this along from our office</p>
                <p>
                  We are in the business of planning highly individualized
                  vacation trips for more than 20 years.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} >{(item)=><Place item={item}/>}</SearchableList>
        <SearchableList items={['item1','item2']} >{(item)=>item}</SearchableList>

      </section>
    </main>
  );
};

export default App;
