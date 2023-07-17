import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  MSAL_GUARD_CONFIG,
  MsalGuardConfiguration,
  MsalService,
  MsalBroadcastService,
} from '@azure/msal-angular';
import { InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  title = 'project';
  isIframe = false;
  isLoggedIn = false;
  private readonly _destroying$ = new Subject<void>();
  userDetails!: Object;
  profilePicture: any;

  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private readonly authService: MsalService,
    private readonly msalBroadcastService: MsalBroadcastService,
    private readonly _http: HttpClient,
    private readonly _domsanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.isIframe = window !== window.parent && !window.opener;
    this.msalBroadcastService.inProgress$
      .pipe(
        filter(
          (status: InteractionStatus) => status === InteractionStatus.None
        ),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.setLoginDisplay();
        this.getProfile();
        this.getProfilePicture();
      });
    this.getProfilePicture();
    this.isLoggedIn = true;
  }

  getProfile() {
    this._http
      .get('https://graph.microsoft.com/v1.0/me')
      .pipe(takeUntil(this._destroying$))
      .subscribe((resp) => {
        this.userDetails = resp;
        // console.log(this.userDetails);
      });
  }

  getProfilePicture() {
    this._http
      .get('https://graph.microsoft.com/v1.0/me/photo/$value', {
        responseType: 'blob',
      })
      .pipe(takeUntil(this._destroying$))
      .subscribe((resp) => {
        var UrlCreator = window.URL || window.webkitURL;
        this.profilePicture = this._domsanitizer.bypassSecurityTrustResourceUrl(
          UrlCreator.createObjectURL(resp)
        );
        console.log(this.profilePicture);
      });
  }
  setLoginDisplay() {
    this.isLoggedIn = this.authService.instance.getAllAccounts().length > 0;
  }

  login() {
    if (this.msalGuardConfig.authRequest) {
      this.authService.loginRedirect({
        ...this.msalGuardConfig.authRequest,
      } as RedirectRequest);
    } else {
      this.authService.loginRedirect();
    }
  }

  logout() {
    this.authService.logoutRedirect({ postLogoutRedirectUri: '/' });
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}
