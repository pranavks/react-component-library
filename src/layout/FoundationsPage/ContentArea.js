import React from 'react';
import Colors from '../../components/Colors';
import Typography from '../../components/Typography';
import Shadows from '../../components/Shadows';

function ContentArea() {
  return (
    <main className="ContentArea">
      <h1>Foundation Elements</h1>
      <p>
        Here’s the very basic for Flamingo Web, either being color variables or
        text identificationn.
      </p>

      <section className="colors-section">
        <Typography type="heading" hrank="2" text="Colors" />
        <Typography type="heading" hrank="3" text="Brand" />
        <div className="flex-layout">
          <Colors
            name="Brand Primary"
            code="#FF2773"
            modifier="brand-primary"
          />
          <Colors
            name="Brand Primary Light"
            code="#FF4D95"
            modifier="brand-primary-light"
          />
          <Colors
            name="Brand Secondary"
            code="#2B1E70"
            modifier="brand-secondary"
          />
          <Colors
            name="Brand Secondary Light"
            code="#252D9B"
            modifier="brand-secondary-light"
          />
        </div>

        <Typography type="heading" hrank="3" text="UI Text" />
        <div className="flex-layout">
          <Colors
            name="UI Text Primary"
            code="#190134"
            modifier="ui-text-primary"
          />
          <Colors
            name="UI Text Secondary"
            code="#685879"
            modifier="ui-text-secondary"
          />
          <Colors
            name="UI Text Tertiary"
            code="#B3ABBC"
            modifier="ui-text-tertiary"
          />
          <Colors
            name="UI Text Success"
            code="#5CC689"
            modifier="ui-text-success"
          />
          <Colors
            name="UI Text Error"
            code="#EE7D52"
            modifier="ui-text-error"
          />
          <Colors
            name="UI Text White"
            code="#FFFFFF"
            modifier="ui-text-white"
          />
          <Colors name="UI Text Link" code="#252D9B" modifier="ui-text-link" />
        </div>

        <Typography type="heading" hrank="3" text="UI Element" />
        <div className="flex-layout">
          <Colors
            name="UI Element Primary"
            code="#FFFFFF"
            modifier="ui-element-primary"
          />
          <Colors
            name="UI Element Secondary"
            code="#685879"
            modifier="ui-element-secondary"
          />
          <Colors
            name="UI Element Tertiary"
            code="#B3ABBC"
            modifier="ui-element-tertiary"
          />
          <Colors
            name="UI Element Success"
            code="#5CC689"
            modifier="ui-element-success"
          />
          <Colors
            name="UI Element Error"
            code="#EE7D52"
            modifier="ui-element-error"
          />
          <Colors
            name="UI Element Neutral"
            code="#EAEAEA"
            modifier="ui-element-neutral"
          />
          <Colors
            name="UI Element Overlay"
            code="#2B1E70"
            opacity="80%"
            class="opacity"
            modifier="ui-element-overlay"
          />
        </div>
      </section>

      <section className="typography-section">
        <Typography type="heading" hrank="2" text="Typography" />

        <div className="flex-layout">
          <div className="flex-item">
            <Typography type="heading" hrank="1" text="Heading 1" />
            <Typography type="heading" hrank="2" text="Heading 2" />
            <Typography type="heading" hrank="3" text="Heading 3" />
            <Typography type="heading" hrank="4" text="Heading 4" />
            <Typography type="heading" hrank="5" text="Heading 5" />
            <Typography type="heading" hrank="6" text="Heading 6" />
          </div>
          <div className="flex-item">
            <Typography type="paragraph" text="Paragraph" />
            <Typography type="paragraph-bold" text="Paragraph Bold" />
            <Typography type="link" text="Link" link="#" />
          </div>
        </div>
      </section>

      <section className="shadows-section">
        <Typography type="heading" hrank="2" text="Shadows" />
        <div className="flex-layout">
          <Shadows type="1" />
          <Shadows type="2" />
          <Shadows type="3" />
          <Shadows type="4" />
          <Shadows type="5" />
          <Shadows type="6" />
        </div>
      </section>
    </main>
  );
}

export default ContentArea;
