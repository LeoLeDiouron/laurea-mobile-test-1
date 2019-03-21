import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabExperience } from './tab-experience.page';

describe('Tab2Page', () => {
  let component: TabExperience;
  let fixture: ComponentFixture<TabExperience>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabExperience],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabExperience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
