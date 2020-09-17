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

import bulbImage from '../../images/freepik img.jpg';
import avatar from '../../images/avatar.jpg';
import flamingo from '../../images/flamingo.svg';

class DemoPage extends React.Component {
  render() {
    return (
      <div className="DemoPage">
        <section className="section1 custom-padding">
          <div className="container">
            <Toggle
              modifier="normal"
              id="toggle1"
              name="radio-group2"
              value=""
              defaultChecked={false}
            />
            <div className="d-flex d-flex1 align-items-center">
              <div className="flex-item">
                <Typography
                  type="heading"
                  hrank="1"
                  text={
                    <div>
                      Lorem ipsum dolor <br /> sit amet.
                    </div>
                  }
                />
                <Typography
                  type="paragraph"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <Typography type="paragraph-bold" text="Lorem Ipsum" />

                <div className="d-flex d-flex2">
                  <Input
                    type="text"
                    modifier="search"
                    placeholder="Search..."
                  />
                  <Button
                    modifier="primary-default"
                    content="Search"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex-item">
                <img
                  src={bulbImage}
                  className="img-fluid d-block mx-auto"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section2 custom-padding">
          <div className="container">
            <Typography
              type="heading"
              hrank="2"
              className="text-center main-heading"
              text="Lorem ipsum dolor sit amet, consectetur"
            />
            <div className="d-flex">
              <div className="flex-item">
                <Avatar img={avatar} modifier="xxxl" className="Shadows--2" />
                <Typography
                  type="heading"
                  hrank="3"
                  text="Lorem ipsum"
                  className="text-center"
                />
                <Typography
                  type="paragraph"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <div className="text-center">
                  <Button
                    modifier="primary-minimal"
                    content="Read More"
                    type="text"
                    className="Shadows--3"
                  />
                </div>
              </div>
              <div className="flex-item">
                <Avatar img={avatar} modifier="xxxl" className="Shadows--2" />
                <Typography
                  type="heading"
                  hrank="3"
                  text="Lorem ipsum"
                  className="text-center"
                />
                <Typography
                  type="paragraph"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <div className="text-center">
                  <Button
                    modifier="primary-minimal"
                    content="Read More"
                    type="text"
                    className="Shadows--3"
                  />
                </div>
              </div>
              <div className="flex-item">
                <Avatar img={avatar} modifier="xxxl" className="Shadows--2" />
                <Typography
                  type="heading"
                  hrank="3"
                  text="Lorem ipsum"
                  className="text-center"
                />
                <Typography
                  type="paragraph"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <div className="text-center">
                  <Button
                    modifier="primary-minimal"
                    content="Read More"
                    type="text"
                    className="Shadows--3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section3 custom-padding">
          <div className="container">
            <Typography
              type="heading"
              hrank="2"
              className="text-center main-heading"
              text="Lorem ipsum dolor sit amet, consectetur"
            />

            <div className="d-flex d-flex1">
              <div className="flex-item-outer">
                <Typography type="heading" hrank="3" text="Lorem ipsum" />
                <Typography
                  type="paragraph"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
              </div>
              <div className="flex-item-outer">
                <ListItem modifier="item" title="Item" className="Shadows--2" />
                <ListItem
                  modifier="item4"
                  title="Item"
                  subtitle="Subtitle"
                  className="Shadows--2"
                />
                <ListItem
                  modifier="item6"
                  title="Item"
                  subtitle="Subtitle"
                  className="Shadows--2"
                  icon={flamingo}
                />
              </div>
            </div>

            <div className="text-center">
              <Button
                modifier="primary-outline"
                content="Read More"
                type="text"
              />
            </div>
          </div>
        </section>

        <section className="section4 custom-padding">
          <div className="container">
            <div className="d-flex d-flex1">
              <div className="flex-item">
                <Typography type="heading" hrank="2" text="Lorem ipsum" />
                <Typography
                  type="paragraph"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
              </div>
              <div className="flex-item">
                <form>
                  <Input type="text" modifier="normal" placeholder="Name" />
                  <Select
                    modifier="normal"
                    value={[
                      'What you do',
                      'Student',
                      'Employee',
                      'Entrepreneur',
                    ]}
                  />
                  <div className="d-flex d-flex2">
                    <div>
                      <RadioButton
                        modifier="normal"
                        id="radio1"
                        name="radio-group1"
                        value=""
                        checked={false}
                      />
                      <label htmlFor="radio1">&ensp;Male</label>
                    </div>
                    <div>
                      <RadioButton
                        modifier="hover"
                        id="radio2"
                        name="radio-group1"
                        value=""
                        checked={false}
                      />
                      <label htmlFor="radio2">&ensp;Female</label>
                    </div>
                    <div>
                      <RadioButton
                        modifier="selected"
                        id="radio3"
                        name="radio-group1"
                        value=""
                        checked={false}
                      />
                      <label htmlFor="radio3">&ensp;Other</label>
                    </div>
                  </div>

                  <Textarea modifier="normal" placeholder="Message" />

                  <div className="d-flex d-flex3">
                    <Checkbox
                      modifier="normal"
                      id="checkbox1"
                      name=""
                      value=""
                      defaultChecked={false}
                    />
                    <label htmlFor="checkbox1">&ensp;I am not a robot</label>
                  </div>

                  <div className="text-center">
                    <Button
                      modifier="primary-default"
                      content="Submit"
                      type="text"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="main-footer custom-padding">
          <div className="container">
            <div className="d-flex">
              <Button
                modifier="icon-default"
                content={flamingo}
                type="image"
                alt="Flamingo"
              />
              <Button
                modifier="icon-default"
                content={flamingo}
                type="image"
                alt="Flamingo"
              />
              <Button
                modifier="icon-default"
                content={flamingo}
                type="image"
                alt="Flamingo"
              />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default DemoPage;
