import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSkills } from './tab-skills.page';

describe('Tab2Page', () => {
  let component: TabSkills;
  let fixture: ComponentFixture<TabSkills>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabSkills],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSkills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
