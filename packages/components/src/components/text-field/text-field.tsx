import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dc-text-field',
  styleUrl: 'text-field.css',
  shadow: true,
})
export class TextField {
  /**
   * The first name
   */
  @Prop() label: string;

  /**
   * The middle name
   */
  @Prop() value: string;

  render() {
    return (
      <label class="dc-text-field">
        <dc-icon-action-play /> {this.label}
        <input type="text" id="fname" name="fname" value={this.value} />
      </label>
    );
  }
}
