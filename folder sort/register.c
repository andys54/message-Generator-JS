#include <stdio.h>

int main(void) {
   double value = 10;
   printf("%lf", value++ * 2);
   printf("%d", (int)value);
}

