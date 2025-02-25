import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { tsx } from '@arcgis/core/widgets/support/widget';

import type MapView from '@arcgis/core/views/MapView';
import type SceneView from '@arcgis/core/views/SceneView';

import Widget from '@arcgis/core/widgets/Widget';

import GoogleMapsWidgetViewModel from './GoogleMapsWidgetViewModel';

export interface GoogleMapsWidgetProperties extends __esri.WidgetProperties {
  /**
   * Your name.
   */
  name?: string;
  /**
   * Map or scene view.
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html
   * 
   */
  view?: MapView | SceneView;
}

const CSS = {
  base: 'esri-widget googlemapswidget-base',
};

@subclass('app.widgets.GoogleMapsWidget')
export default class GoogleMapsWidget extends Widget {
  @property({
    aliasOf: 'viewModel.view',
  })
  view!: MapView | SceneView;

  @property({
    aliasOf: 'viewModel.name',
  })
  name = '';

  @property({
    type: GoogleMapsWidgetViewModel,
  })
  viewModel = new GoogleMapsWidgetViewModel();

  constructor(properties?: GoogleMapsWidgetProperties) {
    super(properties);
  }

  render(): tsx.JSX.Element {
    const { name } = this;
    return (
      <div class={CSS.base}>
        <p>Welcome {name}!</p>
      </div>
    );
  }
}
