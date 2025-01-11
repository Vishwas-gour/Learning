#include <iostream>
#include <vector>
#include <tuple>
using namespace std;
int main()
{
    // ========================[pair]========================

    // pair<int, string> stu{102, "Sahil"}; //=====> one way
    // // pair<int, string> stu;
    // int numb = 33;
    // string name = "vishwas";
    // stu = make_pair(numb, name); //=====> second way
    // cout << stu.first << " " << stu.second << endl;

    // ========================[vectore of pair]========================

    // vector<pair<int, string>> record;
    // cout << "enter no. of record " << endl;
    // int c;
    // cin >> c;
    // for (int i = 0; i < c; i++)
    // {
    //     int no;
    //     cout << "enter no. " << endl;
    //     cin>>no;
    //     string name2;
    //     cout << "enter name " << endl;
    //     cin>>name2;
    //     record.push_back({no,name2});
    //     record.push_back(make_pair(no,name2));

    // }
    // for(int i = 0; i<c; i++){
    //     cout<<record[i].first<<" "<<record[i].second<<endl;
    // }
    // ========================[tuple]========================

    tuple<int, string, int> t{123, "Vishwas", 987353637}; //=====> one way
    cout << get<0>(t) << " ";
    cout << get<1>(t) << " ";
    cout << get<2>(t) << " ";
    cout << endl;

    t = make_tuple(32, "hema", 78920380); //=====> other way
    cout << get<0>(t) << " ";
    cout << get<1>(t) << " ";
    cout << get<2>(t) << " ";
}