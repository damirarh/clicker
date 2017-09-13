import { ClickersServiceMock } from '../../services/clickers.mock';
import { ClickersService } from '../../services/clickers';
import { ComponentFixture, async }    from '@angular/core/testing';
import { TestUtils }                  from '../../test';
import { ClickerList }                from './clickerList';
import { ClickerButton, ClickerForm } from '../../components';
import { NavController } from 'ionic-angular';
import { NavControllerMock } from 'ionic-mocks';

let instance: any = null;

describe('ClickerList', () => {

  beforeEach(() => {
    let navController: NavController = NavControllerMock.instance();
    let clickersService: ClickersService = new ClickersServiceMock() as any;
    instance = new ClickerList(navController, clickersService);
  });

  it('initialises', () => {
    expect(instance).toBeTruthy();
  });
});
