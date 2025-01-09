#include <iostream>
using namespace std;
void lower_to_upper_to_lower(string str){
     int start = 0;
     int end = str.length() - 1;

     while (start <= end){
          if (str[start] >= 'A' && str[start] <= 'Z'){
               str[start] = str[start] + 32;
          }
          else if (str[start] >= 'a' && str[start] <= 'z'){
               str[start] = str[start] - 32;
          }
          start++;
     }
     cout << str;
}
int main(){
     string str = "ApAP";
     lower_to_upper_to_lower(str);
}