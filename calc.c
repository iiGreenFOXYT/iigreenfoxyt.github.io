#include <stdio.h>


float addition(float n_1, float n_2) {
    return n_1 + n_2;
}

float subtraction(float n_1, float n_2) {
    return n_1 - n_2;
}

float multiplication(float n_1, float n_2) {
    return n_1 * n_2;
}

float division(float n_1, float n_2) {
    return n_1 / n_2;
}

float result(float num_1, float num_2, char op) {
    float res;
    if (op == '+') {
        res = addition(num_1, num_2);
    }
    else if (op == '-') {
        res = subtraction(num_1, num_2);//fuck
    }
    else if (op == '*') {
        res = multiplication(num_1, num_2);
    }
    else if (op == '/') {
        res = division(num_1,num_2);
    }
    return res;
}


int main(void) {
    while(true) {
        float num_1;
        float num_2;
        char op;
        printf("Enter Formula: ");
        scanf("%f%c%f", &num_1, &op, &num_2);//shit 
        printf("---->\t %f \n",result(num_1, num_2, op));//مينفعش كدا.
    }
}

//this is a bug project,I was killing myself.