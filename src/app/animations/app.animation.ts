//animations
import { trigger, state, style, animate, transition } from '@angular/animations';

//factory functions that will export the various triggers
export function visibility() {
    return trigger('visibility', [
        state('shown', style({
          transform: 'scale(1.0)',
          opacity: 1
        })),


        state('hidden', style({
          transform: 'scale(0.5)',
          opacity: 0
        })),


        transition('*=>*', animate('0.5s ease-in-out'))
      ]);
}


//animation for routing
export function flyInOut() {
    return trigger('flyInOut', [
        state('*', style({opacity: 1, transform: 'translateX(0)'})),

    transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms ease-in')

    ]),
    transition(':leave', [
        animate('500ms ease-out', style({ transform: 'traslateX(100%)', opacity: 0 }))

    ])
]);
}