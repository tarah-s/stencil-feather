import { Component, ComponentInterface, Element, Host, h, Prop } from '@stencil/core';
import featherPath from 'feather-icons/dist/feather-sprite.svg';

@Component({
  tag: 'f-icon',
  styleUrl: 'f-icon.css',
  shadow: true,
})

export class FIcon implements ComponentInterface {
  @Element() host: HTMLDivElement;
  @Prop() name: string;
  @Prop() size: string;

  componentDidLoad(){
  }

  private getClasses(): string {
    if (this.size) {
      return `feather size-${this.size}`;
    }
    return 'feather ';
  }

  private getIcon(): string {
    return featherPath + '#' + this.name;
  }

  render() {
    return (
      <Host>
        <svg class={this.getClasses()}>
          <use xlinkHref={this.getIcon()}></use>
        </svg>
      </Host>
    );
  }
}
 