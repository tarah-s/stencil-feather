import { Component, ComponentInterface, Element, Host, h, Prop } from '@stencil/core';
import featherPath from 'feather-icons/dist/feather-sprite.svg';
import { getSize, getClasses, getSpriteIcon } from '../../utils/utils';

@Component({
  tag: 'feather-sprite',
  styleUrl: 'feather-sprite.css',
  shadow: true,
})

export class FeatherSprite implements ComponentInterface {
  @Element() host: HTMLDivElement;
  @Prop() name: string;
  @Prop() size: string;

  componentDidLoad(){}

  render() {
    return (
      <Host style={{width: getSize(this.size),height: getSize(this.size)}}>
        <svg  class={getClasses(this.name)}
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round">
          <use xlinkHref={getSpriteIcon(featherPath,this.name)}></use>
        </svg>
      </Host>
    );
  }
}




 