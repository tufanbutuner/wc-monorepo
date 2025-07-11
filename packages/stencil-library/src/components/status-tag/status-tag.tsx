import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'status-tag',
  styleUrl: 'status-tag.css',
  shadow: true,
})
export class StatusTag {
  @Prop() status: 'completed' | 'in-progress' | 'not-started' | 'cancelled' = 'not-started';
  @Prop() text: string = 'Not started';

  private getStatusClass() {
    const statusMap = {
      'completed': 'govuk-tag--green',
      'in-progress': 'govuk-tag--blue',
      'not-started': 'govuk-tag--grey',
      'cancelled': 'govuk-tag--red',
    };
    return statusMap[this.status] || 'govuk-tag--grey';
  }

  render() {
    return <strong class={`govuk-tag ${this.getStatusClass()}`}>{this.text}</strong>;
  }
}
