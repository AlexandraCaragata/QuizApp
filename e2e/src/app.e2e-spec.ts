import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';
import { ivyEnabled } from '@angular/core/src/ivy_switch';
import { exec } from 'child_process';
import { async } from '@angular/core/testing';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('1.0 Check login form with correct email and password',() => {
    
    element(by.id('email')).sendKeys('alexa@yahoo.com');
    element(by.id('password')).sendKeys('123456');
    
    element(by.id('submitLogin')).click();

    expect(browser.getCurrentUrl()).toContain('/home/display-all');

  });


  it('1.1 Check RegisterForm', () =>{
    element(by.id('register')).click();

    element(by.id('name')).sendKeys('Jane Dow');
    element(by.id('username')).sendKeys('jane-dow');
    element(by.id('email')).sendKeys('jane-dow@email.com');
    element(by.id('password')).sendKeys('1234567');

    element(by.id('submitRegister')).click();

    expect(browser.getCurrentUrl()).toContain('/home/display-all');
  });

  it('2.0 Create new quiz and check for list length', () =>{
    browser.get('home/display-all');

    var list = element.all(by.id('quiz'));
    var initial = list.length;

    element(by.id('create-quiz')).click();

    element(by.id('quiz-title')).sendKeys('Test test test');

    element(by.id('save-quiz')).click();

    var list2= element.all(by.id('quiz'));
    expect(list2.count()).toBe(initial+1)



  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
