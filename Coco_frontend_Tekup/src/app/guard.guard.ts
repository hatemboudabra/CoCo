import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';

@Injectable()

class PermissionsService {
  canActivate(): boolean {
    return false;
  }

}
export const guardGuard: CanActivateFn = (route, state) => {
  return true;
};
