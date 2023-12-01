
#include "msp.h"

int modS2 , stLED2;

void delay(int n)
{      
	unsigned long int i,j,count = 1000;
	for(i=0 ; i < n ; i++)
		 for(j=0 ; j<count ; j++);
}


void toggleLED2()
{
	if(stLED2) {
		stLED2=0;
		P2->OUT &= ~BIT2; //stinge LED1
	} else { 
		stLED2 = 1;
		P2->OUT |= BIT2; //aprinde LED1
	}
}

void main(void)
{
	volatile unsigned stare_pini2,modS2=0, stLED2=0;

    WDT_A->CTL = WDT_A_CTL_PW | WDT_A_CTL_HOLD;  /* Stop watchdog timer */

    P2->DIR &=~BIT4; //Seteaza bitul 4 din portul 2 ca fiint INPUT
    P2->OUT = BIT4;
    P2->REN |= BIT4; //activeaza pull-up R pentru LED2

    P2->DIR &= ~BIT2;
    P2->OUT &= ~BIT2;

    while(1)
    {
    	stare_pini2 = P2->IN & BIT4;

    	if(stare_pini2 != 0)
        {
    		P2->OUT &= ~BIT2; //stinge LED2
        } else {
        	toggleLED2();
        	delay(1);
        }
    }
}