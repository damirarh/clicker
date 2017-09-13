import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { App, Config, Form, IonicModule, Keyboard, DomController, MenuController, NavController, Platform, AlertController } from 'ionic-angular';
import { AlertControllerMock, ConfigMock, PlatformMock } from 'ionic-mocks';
import { Page2 }      from './page2';

let instance: any = null;

let alertSpy: any;
let alertControllerSpy: any;

describe('Pages: Page2', () => {

  // demonstration on how to manually compile the test bed (as opposed to calling TestUtils)
  beforeEach(() => {

    let alertController: AlertController = AlertControllerMock.instance();
    instance = new Page2(alertController);

    instance.onGainChange();

    alertSpy = instance.alertController;
    alertControllerSpy = instance.alertController.create();

  });

  it('should create page2', () => {
    expect(instance).toBeTruthy();
  });

  it('should fire the simple alert', fakeAsync(() => {

    alertSpy.create.calls.reset();
    alertControllerSpy.present.calls.reset();

    expect(alertSpy.create).not.toHaveBeenCalledTimes(1);
    expect(alertControllerSpy.present).not.toHaveBeenCalledTimes(1);

    expect(alertSpy.create).not.toHaveBeenCalled();
    expect(alertControllerSpy.present).not.toHaveBeenCalled();

    instance.showSimpleAlert();
    tick();

    expect(alertSpy.create).toHaveBeenCalledTimes(1);
    expect(alertControllerSpy.present).toHaveBeenCalledTimes(1);

    expect(alertSpy.create).toHaveBeenCalled();
    expect(alertControllerSpy.present).toHaveBeenCalled();

  }));

  it('should fire the more advanced alert', fakeAsync(() => {

    alertSpy.create.calls.reset();
    alertControllerSpy.present.calls.reset();

    instance.okEd = false;

    expect(instance.okEd).toBeFalsy();

    instance.showMoreAdvancedAlert();
    tick();

    instance.OK();

    expect(instance.okEd).toBeTruthy();

  }));

});
