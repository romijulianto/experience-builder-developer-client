import GoogleMapsWidgetViewModel from './GoogleMapsWidgetViewModel';

describe('app/GoogleMapsWidget/GoogleMapsWidgetViewModel', () => {
  let viewModel: GoogleMapsWidgetViewModel;

  beforeEach(() => {
    viewModel = new GoogleMapsWidgetViewModel();
  });

  test('name should be Slagathor', () => {
    expect(viewModel.name).toBe('Slagathor');
  });
});
