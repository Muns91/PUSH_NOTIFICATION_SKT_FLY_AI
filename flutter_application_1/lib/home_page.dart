import 'package:flutter/material.dart';
// import 'package:flutter/rendering.dart';
import 'package:onesignal_flutter/onesignal_flutter.dart';


class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  
  @override
  void initState(){
    super.initState();
    initPlatform();
  }
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("NodeJS - OneSignal"),
        elevation: 0,
      ),
      backgroundColor: Colors.grey[200],
      body: const Center(child: Text("Push Notification")
      ,)
    );
  }
  Future<void> initPlatform() async{
    await OneSignal.shared.setAppId("your ID");
    await OneSignal.shared.getDeviceState().then((
      value)=> {
      print(value!.userId),
    });
  }

}
