import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { EditEventPage } from './edit-event.page';
import { MockStorage } from 'src/mocks/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { MockRouter } from 'src/mocks/router';
import { MockActivatedRoute } from 'src/mocks/activatedroute';

describe('EditEventPage', () => {
  let component: EditEventPage;
  let fixture: ComponentFixture<EditEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEventPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: Storage, useClass: MockStorage },
        { provide: Router, useClass: MockRouter },
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate html data with selected event info', async()=> {
    fixture.detectChanges() 
    let htmlstart = fixture.debugElement.nativeElement.querySelector('ion-text#start');
    let htmlend = fixture.debugElement.nativeElement.querySelector('ion-text#end');
    expect(htmlstart.textContent).toEqual('May/28/2020, 03:21:16 PM');
    expect(htmlend.textContent).toEqual('May/28/2020, 03:21:16 PM');

  })

  it('delete button should delete 1 value', async() => {
    let todelete = component.eventtoedit.start
    component.eventregister.storage.remove(todelete.toString())
    expect(await component.eventregister.storage.length()).toEqual(2)
  })

  it('should update values on save', () => {
    component.age = 100
    component.saveButton()
    expect(component.eventtoedit.age).toEqual(100)
  })

});
