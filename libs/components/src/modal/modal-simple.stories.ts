import { Meta, moduleMetadata, Story } from "@storybook/angular";

import { ButtonModule } from "../button";

import { ModalSimpleComponent } from "./modal-simple.component";

export default {
  title: "Component Library/Modals/Simple Modal",
  component: ModalSimpleComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
} as Meta;

const Template: Story<ModalSimpleComponent> = (args: ModalSimpleComponent) => ({
  props: args,
  template: `
  <bit-simple-modal [useDefaultIcon]="true">
      <span title> Alert Modal Title
      </span>
      <span message> Message Content
      </span>
      <button footer bitButton buttonType="primary"> Yes </button>
      <button footer bitButton buttonType="secondary"> No </button>
  </bit-simple-modal>
  `,
});

export const Default = Template.bind({});

const TemplateWithIcon: Story<ModalSimpleComponent> = (args: ModalSimpleComponent) => ({
  props: args,
  template: `
  <bit-simple-modal [useDefaultIcon]="false">
      <i icon class="bwi bwi-star tw-text-3xl tw-text-success" aria-hidden="true"></i>
      <span title> Premium Subscription Available
      </span>
      <span message> Message Content
      </span>
      <button footer bitButton buttonType="primary"> Yes </button>
      <button footer bitButton buttonType="secondary"> No </button>
  </bit-simple-modal>
  `,
});

export const CustomIcon = TemplateWithIcon.bind({});

const TemplateScroll: Story<ModalSimpleComponent> = (args: ModalSimpleComponent) => ({
  props: args,
  template: `
  <bit-simple-modal [useDefaultIcon]="useDefaultIcon">
      <span title> Alert Modal Title
      </span>
      <span message> Message Content
      Message text goes here.<br>
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters
      repeating lines of characters <br>
      end of sequence!
      </span>
      <button footer bitButton buttonType="primary"> Yes </button>
      <button footer bitButton buttonType="secondary"> No </button>
  </bit-simple-modal>
  `,
});

export const ScrollingContent = TemplateScroll.bind({});
ScrollingContent.args = {
  useDefaultIcon: true,
};
