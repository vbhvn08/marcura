import { CostItemComponent } from './cost-item.component';
import {Spectator} from "@ngneat/spectator";
import {createComponentFactory} from "@ngneat/spectator/jest";

describe('CostItemComponent', () => {
  let spectator: Spectator<CostItemComponent>;

  const createComponent = createComponentFactory({
    component: CostItemComponent,
    declarations: [],
    detectChanges: false,
    providers: [],
  });

  beforeEach(() => {
    spectator = createComponent();

  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
