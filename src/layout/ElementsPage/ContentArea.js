import React from 'react';

import Typography from '../../components/Typography';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import Checkbox from '../../components/Checkbox';
import RadioButton from '../../components/RadioButton';
import Toggle from '../../components/Toggle';
import ListItem from '../../components/ListItem';
import Avatar from '../../components/Avatar';

import flamingo from '../../images/flamingo.svg';
import loader from '../../images/loader.svg';
import checkWhite from '../../images/checkWhite.svg';
import emojiSadWhite from '../../images/emojiSadWhite.svg';

import checkboxDisableSelected from '../../images/checkbox/CheckboxDisableSelected.svg';
import checkboxDisableUndetermined from '../../images/checkbox/CheckboxDisableUndetermined.svg';

import avatar from '../../images/avatar.png';

function ContentArea() {
  return (
    <main className="ContentArea">
      <h1>Elements</h1>
      <p>
        Here’s the collection of Atomic elements for Flamingo Web. These
        elements don’t include margin as they are meant to be easily adaptable
        to several compositions and layouts.
      </p>

      <section className="buttons-section">
        <Typography type="heading" hrank="2" text="Buttons" />
        <div className="flex-layout">
          <div className="flex-item">
            <Typography type="heading" hrank="3" text="Primary" />
            <div className="flex-layout">
              <Button modifier="primary-default" content="Label" type="text" />
              <Button modifier="primary-outline" content="Label" type="text" />
              <Button modifier="primary-minimal" content="Label" type="text" />
            </div>
          </div>
          <div className="flex-item">
            <Typography type="heading" hrank="3" text="Secondary" />
            <div class="flex-layout">
              <Button
                modifier="secondary-default"
                content="Label"
                type="text"
              />
              <Button
                modifier="secondary-outline"
                content="Label"
                type="text"
              />
              <Button
                modifier="secondary-minimal"
                content="Label"
                type="text"
              />
            </div>
          </div>
          <div className="flex-item">
            <Typography type="heading" hrank="3" text="Icon" />
            <Button
              modifier="icon-default"
              content={flamingo}
              type="image"
              alt="Flamingo"
            />
          </div>
        </div>
        <Typography type="heading" hrank="3" text="States" />
        <div className="flex-layout">
          <div className="flex-item">
            <Typography type="heading" hrank="3" text="Primary" />
            <div class="flex-layout">
              <Button
                modifier="state-primary-hover"
                content="Label"
                type="text"
              />
              <Button
                modifier="state-primary-active"
                content="Label"
                type="text"
              />
              <Button
                modifier="state-primary-loading"
                content={loader}
                type="image"
                alt="Loading"
              />
            </div>
          </div>
          <div className="flex-item">
            <Typography type="heading" hrank="3" text="Secondary" />
            <div class="flex-layout">
              <Button
                modifier="state-secondary-hover"
                content="Label"
                type="text"
              />
              <Button
                modifier="state-secondary-active"
                content="Label"
                type="text"
              />
              <Button
                modifier="state-secondary-loading"
                content={loader}
                type="image"
                alt="Loading"
              />
            </div>
          </div>
          <div className="flex-item">
            <div className="flex-layout">
              <div className="flex-item">
                <Typography type="heading" hrank="3" text="Success" />
                <Button
                  modifier="state-global-success"
                  content={checkWhite}
                  type="image"
                  alt="Success"
                />
              </div>
              <div className="flex-item">
                <Typography type="heading" hrank="3" text="Error" />
                <Button
                  modifier="state-global-error"
                  content={emojiSadWhite}
                  type="image"
                  alt="Error"
                />
              </div>
              <div className="flex-item">
                <Typography type="heading" hrank="3" text="Disable" />
                <Button
                  modifier="state-global-disabled"
                  content="Label"
                  type="text"
                  isDisabled="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inputs-section">
        <Typography type="heading" hrank="2" text="Input" />
        <Typography type="heading" hrank="3" text="Types" />
        <div className="flex-layout">
          <Input type="text" modifier="normal" value="Normal" />
          <Input type="text" modifier="hover" value="Hover" />
          <Input type="text" modifier="active" value="Active" />
          <Input type="text" modifier="error" value="Error" />
          <Input type="text" modifier="success" value="Success" />
          <Input
            type="text"
            modifier="disable"
            value="Disable"
            isDisabled="true"
          />
          <Input type="password" modifier="password" value="aaaaaaaaaa" />
          <Input type="text" modifier="date" value="02/12/1991" />
          <Input type="text" modifier="search" value="Search..." />
        </div>
      </section>

      <section className="selects-section">
        <Typography type="heading" hrank="2" text="Select" />
        <Typography type="heading" hrank="3" text="States" />
        <div className="flex-layout">
          <Select modifier="normal" value="Normal" />
          <Select modifier="hover" value="Hover" />
        </div>
        <div className="flex-layout">
          <Select modifier="active" value="Active" />
          <Select modifier="disable" value="Disabled" isDisabled="true" />
        </div>
      </section>

      <section className="textarea-section">
        <Typography type="heading" hrank="2" text="Textareas" />
        <Typography type="heading" hrank="3" text="Types" />

        <div className="flex-layout">
          <Textarea modifier="normal" value="Normal" />
          <Textarea modifier="hover" value="Hover" />
          <Textarea modifier="active" value="Active" />
        </div>
        <div className="flex-layout">
          <Textarea modifier="error" value="Error" />
          <Textarea modifier="success" value="Success" />
          <Textarea modifier="disable" value="Disable" isDisabled />
        </div>
      </section>

      <section className="toggle-section flex-layout">
        <div className="checkboxes flex-item">
          <Typography type="heading" hrank="2" text="Checkboxes" />
          <div>
            <Checkbox modifier="normal" id="checkbox1" name="" value="" />
            <label htmlFor="checkbox1">&ensp;Checkbox</label>
          </div>
          <div>
            <Checkbox modifier="hover" id="checkbox1" name="" value="" />
            <label htmlFor="checkbox1">&ensp;Hover</label>
          </div>
          <div>
            <Checkbox
              modifier="disabled"
              id="checkbox1"
              name=""
              value=""
              disabled
            />
            <label htmlFor="checkbox1">&ensp;Disable</label>
          </div>
          <div>
            <Checkbox
              modifier="selected"
              id="checkbox1"
              name=""
              value=""
              defaultChecked
            />
            <label htmlFor="checkbox1">&ensp;Selected</label>
          </div>
          <div>
            <Checkbox
              modifier="undetermined"
              id="checkbox1"
              name=""
              value=""
              defaultChecked
            />
            <label htmlFor="checkbox1">&ensp;Undetermined</label>
          </div>
          <div>
            <Checkbox
              modifier="disableSelected"
              id="checkbox1"
              name=""
              value=""
              img={checkboxDisableSelected}
              labelText="Disable Selected"
              defaultChecked
              disabled
            />
            <label htmlFor="checkbox1">&ensp;Disable Selected</label>
          </div>
          <div>
            <Checkbox
              modifier="disableUndetermined"
              id="checkbox1"
              name=""
              value=""
              img={checkboxDisableUndetermined}
              labelText="Disable Undetermined"
              defaultChecked
              disabled
            />
            <label htmlFor="checkbox1">&ensp;Disable Undetermined</label>
          </div>
        </div>
        <div className="radios flex-item">
          <Typography type="heading" hrank="2" text="Radio Buttons" />
          <div>
            <RadioButton modifier="normal" id="radio1" name="" value="" />
            <label htmlFor="radio1">&ensp;Radio</label>
          </div>
          <div>
            <RadioButton modifier="hover" id="radio1" name="" value="" />
            <label htmlFor="radio1">&ensp;Hover</label>
          </div>
          <div>
            <RadioButton
              modifier="selected"
              id="radio1"
              name=""
              value=""
              defaultChecked
            />

            <label htmlFor="radio1">&ensp;Selected</label>
          </div>
          <div>
            <RadioButton modifier="disable" id="radio1" name="" value="" />
            <label htmlFor="radio1">&ensp;Disable</label>
          </div>
          <div>
            <RadioButton
              modifier="disableSelected"
              id="radio1"
              name=""
              value=""
              defaultChecked
            />
            <label htmlFor="radio1">&ensp;Disable Selected</label>
          </div>
        </div>
        <div className="toggles flex-item">
          <Typography type="heading" hrank="2" text="Toggles" />
          <div>
            <Toggle modifier="normal" id="checkbox1" name="" value="" />
            <label htmlFor="checkbox1">&ensp;Toggle</label>
          </div>
          <div>
            <Toggle modifier="hover" id="checkbox1" name="" value="" />
            <label htmlFor="checkbox1">&ensp;Hover</label>
          </div>
          <div>
            <Toggle modifier="active" id="checkbox1" name="" value="" />
            <label htmlFor="checkbox1">&ensp;Active</label>
          </div>
          <div>
            <Toggle modifier="disableOff" id="checkbox1" name="" value="" />
            <label htmlFor="checkbox1">&ensp;Disable OFF</label>
          </div>
          <div>
            <Toggle modifier="disableOn" id="checkbox1" name="" value="" />
            <label htmlFor="checkbox1">&ensp;Disable ON</label>
          </div>
        </div>
      </section>

      <section className="list-section">
        <Typography type="heading" hrank="2" text="List Items" />

        <div className="flex-layout">
          <ListItem modifier="item" title="Item" />
          <ListItem modifier="subitem" title="Sub Item" />
          <ListItem modifier="tiny" title="Tiny Item" />
          <ListItem modifier="item4" title="Item" subtitle="Subtitle" />
          <ListItem modifier="item5" title="Item" icon={flamingo} />
          <ListItem
            modifier="item6"
            title="Item"
            subtitle="Subtitle"
            icon={flamingo}
          />
        </div>
      </section>

      <section className="avatar-section">
        <Typography type="heading" hrank="2" text="Avatars" />

        <div className="flex-layout">
          <Avatar img={avatar} modifier="xs" />

          <Avatar img={avatar} modifier="s" />

          <Avatar img={avatar} modifier="m" />

          <Avatar img={avatar} modifier="l" />

          <Avatar img={avatar} modifier="xl" />

          <Avatar img={avatar} modifier="xxl" />

          <Avatar img={avatar} modifier="xxxl" />
        </div>
      </section>
    </main>
  );
}

export default ContentArea;
