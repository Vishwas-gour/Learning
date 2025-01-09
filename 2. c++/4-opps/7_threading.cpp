#include <iostream>
#include <thread>
// **********< THIS CODE IS NOT WORKING BECAUSE OF COMPILE VERSION IT RUNS IN ONLINE COMPILER
using namespace std;
void task(int id)
{
    cout << "task" << id << "is running" << endl;
}
int main()
{
    // why core's in processor are always even
    thread t1(task, 1);
    thread t2(task, 2);
    t1.join();
    t2.join();
}