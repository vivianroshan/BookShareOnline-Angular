import { HttpClient, HttpHandler } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AuthenticateService } from "src/app/services/authenticate.service";
import { LoggedinviewComponent } from "./loggedinview.component";

describe('LoggedinviewComponenet', () => {
  let component: LoggedinviewComponent;
  let fixture: ComponentFixture<LoggedinviewComponent>;
  let authService: AuthenticateService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoggedinviewComponent],
      providers: [AuthenticateService, HttpClient, HttpHandler],
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check is name',()=>{
    // authService = fixture.debugElement.injector.get(AuthenticateService);
    expect(component.name).toBe(sessionStorage.getItem('username'));
  });

  it('should signout',()=>{
    let count = 0;
    console.log = ()=>{
      count++;
    }
    sessionStorage.setItem('token','auth');
    component.onClickSignOut();
    expect(sessionStorage.getItem('token')).toBe('0');
    // expect(count).toBe(1);
  });
})