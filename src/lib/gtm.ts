// utils/gtm.ts



interface GTMEvent {

  event: string;

  [key: string]: any; // Permite propiedades adicionales

}



export const sendGTMEvent = (eventData: GTMEvent) => {

  if (typeof window !== 'undefined' && (window as any).dataLayer) {

    (window as any).dataLayer.push(eventData);

    console.log('GTM Event pushed:', eventData); // Opcional: para depuración

  } else {

    console.warn('dataLayer not found or not in browser environment. GTM event not sent:', eventData);

  }

};