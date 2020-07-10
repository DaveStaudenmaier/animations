import {  trigger,
          animate,
          transition,
          style,
          query,
          state,
          stagger,
          group } from '@angular/animations';

// For fade route animation on main modules.  Also see router-outlet and trigger in app.component.html/ts
export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true } // Query returns zero elements and optional: true allows this without error
    ),
    query(
      ':leave',
      [style({ opacity: 1 }), animate('0.6s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.6s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);

export const slowEntryAnimation = trigger('slowEntryAnimation', [
  transition('* => doAnimation', [
    query('.expander', style({width: '80px'})),
    query('.expander', animate(1000, style({width: '100%'})))
  ])
]);

export const attentionAnimation = trigger('attentionAnimation', [
  transition('* => drawAttention', [
    query('.attention', animate(1000, style({color: 'red', fontSize: '24px', fontWeight: 'bold'}))),
    query('.attention', animate(1000, style({color: 'black', fontSize: '16px', fontWeight: 'normal'})))
  ])
]);

export const thumbnailImageExpandAnimation = trigger('thumbnailImageExpandAnimation', [
  state('thumbnail', style({width: '80px'})),
  state('fullsize', style({ width: '100%'})),
  transition('thumbnail => fullsize', animate(1000, style({ width: '100%'}))),
  transition('fullsize => thumbnail', animate(1000, style({ width: '80px'})))
]);

export const listAddItemFadeAnimation = trigger('listAddItemFadeAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), animate('800ms ease-out', style({ opacity: 1 }))],
      { optional: true }
    ),
    query(':leave',
      animate('800ms', style({ opacity: 0 })),
      { optional: true }
    )
  ])
]);

export const addItemFadeAnimation = trigger('addItemFadeAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), animate('3000ms ease-out', style({ opacity: 1 }))],
      { optional: true }
    ),
    query(':leave',
      animate('3000ms', style({ opacity: 0 })),
      { optional: true }
    )
  ])
]);

export const listAddItemSlideInAnimation = trigger('listAddItemSlideInAnimation', [
  state('slideIn', style({ transform: 'translateX(0)' })),
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('0.3s ease-in')
  ]),
  transition(':leave', [
    animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
  ])
]);

export const slideDownAnimation = trigger('slideDownAnimation', [
  state('in', style({
    overflow: 'hidden',
    maxHeight: '300px'
  })),
  state('out', style({
    overflow: 'hidden',
    maxHeight: '0px'
  })),
  transition('out => in', animate('800ms ease-in-out')),
  transition('in => out', animate('400ms ease-in-out'))
]);
