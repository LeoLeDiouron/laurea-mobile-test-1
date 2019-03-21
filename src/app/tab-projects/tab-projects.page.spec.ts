import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabProjectsPage } from './tab-projects.page';

describe('TabProjectsPage', () => {
  let component: TabProjectsPage;
  let fixture: ComponentFixture<TabProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabProjectsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
