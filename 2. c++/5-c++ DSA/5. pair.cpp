#include <iostream>
#include <vector>
#include <tuple>
#include <string>
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

    // tuple<int, string, int> t; //=====> one way
    // cout << get<0>(t) << " ";
    // cout << get<1>(t) << " ";
    // cout << get<2>(t) << " ";
    // cout << endl;

    // t = make_tuple(32, "hema", 78920380); //=====> other way
    // cout << get<0>(t) << " ";
    // cout << get<1>(t) << " ";
    // cout << get<2>(t) << " ";

    // ========================[vectore of tuple]========================

    // vector<tuple<int, string, int>> vec;
    // int record = 3;
    // int a;
    // string b;
    // int c;
    // for (int i = 0; i < record; i++)
    // {
    //     cout << "numb: ";
    //     cin >> a;
    //     cout << "name: ";
    //     cin >> b;
    //     cout << "numb1 : ";
    //     cin >> c;
    //     cout << endl;
    //     // vec.push_back(make_tuple(a,b,c));
    //     vec.push_back({a, b, c});
    // }

    // for (int i = 0; i < record; i++)
    // {
    //     cout << get<0>(vec[i]) << " ";
    //     cout << get<1>(vec[i]) << " ";
    //     cout << get<2>(vec[i]) << " ";
    //     cout<<endl;
    // }

    // ========================[Question]========================
    string str = "AMAMA";
    int s = 0;
    int e = str.size();
    bool check = true;
    while ((s < e))
    {
        if (str[s] != str[e])
        {
            check = false;
            cout << " not a palindrome";
            break;
        }
    }

    if (check)
    {
        cout << "yes it is palindrome";
    }

    vector<int> v{1, 2, 7, 6, 3, 2};
    int min = 0;
    for (int i = 0; i < v.size(); i++)
    {
        
    }
}