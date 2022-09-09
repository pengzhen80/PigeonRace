const test_demo_data = [
    [{ 'latitude': 25.4067268371582, 'longitude': 121.992256164551, 'time': '2021-11-09T23:32:00Z', 'elevation': 89.0, 'speed': 19.0, 'heading': 185, 'distance': 0.0 }, { 'latitude': 25.4047908782959, 'longitude': 121.990844726562, 'time': '2021-11-09T23:32:15Z', 'elevation': 106.0, 'speed': 11.0, 'heading': 321, 'distance': 257.220477485447 }, { 'latitude': 25.4032669067383, 'longitude': 121.989547729492, 'time': '2021-11-09T23:32:30Z', 'elevation': 122.0, 'speed': 22.0, 'heading': 202, 'distance': 213.382103185214 }, { 'latitude': 25.4008007049561, 'longitude': 121.987403869629, 'time': '2021-11-09T23:32:45Z', 'elevation': 131.0, 'speed': 23.0, 'heading': 234, 'distance': 348.097947111088 }, { 'latitude': 25.3980140686035, 'longitude': 121.985458374023, 'time': '2021-11-09T23:33:00Z', 'elevation': 155.0, 'speed': 25.0, 'heading': 227, 'distance': 365.536947295949 }, { 'latitude': 25.3966426849365, 'longitude': 121.982154846191, 'time': '2021-11-09T23:33:15Z', 'elevation': 161.0, 'speed': 26.0, 'heading': 232, 'distance': 365.481625026054 }, { 'latitude': 25.3949222564697, 'longitude': 121.978897094727, 'time': '2021-11-09T23:33:30Z', 'elevation': 177.0, 'speed': 23.0, 'heading': 251, 'distance': 379.18615367668 }, { 'latitude': 25.3931655883789, 'longitude': 121.97582244873, 'time': '2021-11-09T23:33:45Z', 'elevation': 192.0, 'speed': 25.0, 'heading': 233, 'distance': 365.501082738131 }, { 'latitude': 25.3904933929443, 'longitude': 121.972946166992, 'time': '2021-11-09T23:34:00Z', 'elevation': 188.0, 'speed': 29.0, 'heading': 201, 'distance': 414.005955663664 }, { 'latitude': 25.3877582550049, 'longitude': 121.970336914062, 'time': '2021-11-09T23:34:15Z', 'elevation': 195.0, 'speed': 26.0, 'heading': 242, 'distance': 400.934296314413 }, { 'latitude': 25.385778427124, 'longitude': 121.967086791992, 'time': '2021-11-09T23:34:30Z', 'elevation': 189.0, 'speed': 26.0, 'heading': 228, 'distance': 393.794789123087 }, { 'latitude': 25.3444709777832, 'longitude': 121.951385498047, 'time': '2021-11-09T23:37:17Z', 'elevation': 72.0, 'speed': 28.0, 'heading': 185, 'distance': 4841.17310416401 }, { 'latitude': 25.3406848907471, 'longitude': 121.950691223145, 'time': '2021-11-09T23:37:32Z', 'elevation': 67.0, 'speed': 28.0, 'heading': 190, 'distance': 425.198699203916 }, { 'latitude': 25.3003692626953, 'longitude': 121.936447143555, 'time': '2021-11-09T23:40:18Z', 'elevation': 49.0, 'speed': 26.0, 'heading': 215, 'distance': 4690.70282244055 }, { 'latitude': 25.2974224090576, 'longitude': 121.933944702148, 'time': '2021-11-09T23:40:34Z', 'elevation': 49.0, 'speed': 26.0, 'heading': 218, 'distance': 412.399922306436 }, { 'latitude': 25.2628974914551, 'longitude': 121.910049438477, 'time': '2021-11-09T23:43:21Z', 'elevation': 57.0, 'speed': 27.0, 'heading': 205, 'distance': 4518.81417953284 }, { 'latitude': 25.2593250274658, 'longitude': 121.909187316895, 'time': '2021-11-09T23:43:36Z', 'elevation': 58.0, 'speed': 28.0, 'heading': 190, 'distance': 405.163260257634 }, { 'latitude': 25.21875, 'longitude': 121.897575378418, 'time': '2021-11-09T23:46:23Z', 'elevation': 33.0, 'speed': 27.0, 'heading': 206, 'distance': 4644.52649211167 }, { 'latitude': 25.2155456542969, 'longitude': 121.895225524902, 'time': '2021-11-09T23:46:38Z', 'elevation': 30.0, 'speed': 28.0, 'heading': 216, 'distance': 426.701382007634 }, { 'latitude': 25.1774711608887, 'longitude': 121.882926940918, 'time': '2021-11-09T23:49:25Z', 'elevation': 26.0, 'speed': 25.0, 'heading': 172, 'distance': 4396.11027916573 }, { 'latitude': 25.1740016937256, 'longitude': 121.882858276367, 'time': '2021-11-09T23:49:40Z', 'elevation': 31.0, 'speed': 27.0, 'heading': 181, 'distance': 384.394317490349 }, { 'latitude': 25.1428203582764, 'longitude': 121.867134094238, 'time': '2021-11-09T23:52:27Z', 'elevation': 137.0, 'speed': 23.0, 'heading': 196, 'distance': 3800.54920742667 }, { 'latitude': 25.1399383544922, 'longitude': 121.865882873535, 'time': '2021-11-09T23:52:42Z', 'elevation': 144.0, 'speed': 23.0, 'heading': 196, 'distance': 343.279664435225 }, { 'latitude': 25.1235256195068, 'longitude': 121.832099914551, 'time': '2021-11-09T23:55:29Z', 'elevation': 76.0, 'speed': 24.0, 'heading': 230, 'distance': 3861.53892195751 }, { 'latitude': 25.121244430542, 'longitude': 121.829811096191, 'time': '2021-11-09T23:55:44Z', 'elevation': 76.0, 'speed': 22.0, 'heading': 222, 'distance': 342.253436547909 }, { 'latitude': 25.1191673278809, 'longitude': 121.802383422852, 'time': '2021-11-09T23:58:31Z', 'elevation': 141.0, 'speed': 24.0, 'heading': 271, 'distance': 2775.67923452357 }, { 'latitude': 25.1198196411133, 'longitude': 121.799034118652, 'time': '2021-11-09T23:58:46Z', 'elevation': 145.0, 'speed': 22.0, 'heading': 272, 'distance': 345.427352636215 }, { 'latitude': 25.1020832061768, 'longitude': 121.769035339355, 'time': '2021-11-10T00:01:33Z', 'elevation': 91.0, 'speed': 25.0, 'heading': 253, 'distance': 3607.60422517023 }, { 'latitude': 25.1013660430908, 'longitude': 121.765380859375, 'time': '2021-11-10T00:01:48Z', 'elevation': 81.0, 'speed': 24.0, 'heading': 253, 'distance': 377.079316656923 }, { 'latitude': 25.0942897796631, 'longitude': 121.730438232422, 'time': '2021-11-10T00:04:35Z', 'elevation': 112.0, 'speed': 17.0, 'heading': 245, 'distance': 3610.77555770361 }, { 'latitude': 25.0932273864746, 'longitude': 121.72868347168, 'time': '2021-11-10T00:04:50Z', 'elevation': 147.0, 'speed': 18.0, 'heading': 262, 'distance': 212.560575215756 }, { 'latitude': 25.0844078063965, 'longitude': 121.693756103516, 'time': '2021-11-10T00:07:37Z', 'elevation': 97.0, 'speed': 20.0, 'heading': 249, 'distance': 3656.32532411664 }, { 'latitude': 25.0835132598877, 'longitude': 121.690971374512, 'time': '2021-11-10T00:07:52Z', 'elevation': 92.0, 'speed': 19.0, 'heading': 257, 'distance': 297.891750664198 }, { 'latitude': 25.0684623718262, 'longitude': 121.660820007324, 'time': '2021-11-10T00:10:39Z', 'elevation': 61.0, 'speed': 21.0, 'heading': 250, 'distance': 3468.85013398529 }, { 'latitude': 25.06809425354, 'longitude': 121.657646179199, 'time': '2021-11-10T00:10:54Z', 'elevation': 66.0, 'speed': 21.0, 'heading': 257, 'distance': 322.806888971032 }, { 'latitude': 25.059024810791, 'longitude': 121.624786376953, 'time': '2021-11-10T00:13:41Z', 'elevation': 90.0, 'speed': 20.0, 'heading': 254, 'distance': 3464.36418117058 }, { 'latitude': 25.0578994750977, 'longitude': 121.621971130371, 'time': '2021-11-10T00:13:56Z', 'elevation': 87.0, 'speed': 21.0, 'heading': 251, 'distance': 310.213352168311 }, { 'latitude': 25.0519142150879, 'longitude': 121.585479736328, 'time': '2021-11-10T00:16:42Z', 'elevation': 22.0, 'speed': 22.0, 'heading': 261, 'distance': 3741.38512992965 }, { 'latitude': 25.0515003204346, 'longitude': 121.582191467285, 'time': '2021-11-10T00:16:57Z', 'elevation': 17.0, 'speed': 21.0, 'heading': 261, 'distance': 334.964615300804 }, { 'latitude': 25.04172706604, 'longitude': 121.549835205078, 'time': '2021-11-10T00:19:45Z', 'elevation': 31.0, 'speed': 16.0, 'heading': 207, 'distance': 3439.93657294427 }, { 'latitude': 25.0407772064209, 'longitude': 121.54753112793, 'time': '2021-11-10T00:20:00Z', 'elevation': 52.0, 'speed': 18.0, 'heading': 264, 'distance': 255.217973269901 }, { 'latitude': 25.0334930419922, 'longitude': 121.515419006348, 'time': '2021-11-10T00:22:46Z', 'elevation': 49.0, 'speed': 23.0, 'heading': 256, 'distance': 3339.68751943281 }, { 'latitude': 25.0320873260498, 'longitude': 121.512268066406, 'time': '2021-11-10T00:23:02Z', 'elevation': 40.0, 'speed': 21.0, 'heading': 246, 'distance': 354.081165936106 }, { 'latitude': 25.0203304290771, 'longitude': 121.481483459473, 'time': '2021-11-10T00:25:49Z', 'elevation': 59.0, 'speed': 21.0, 'heading': 254, 'distance': 3368.95691615394 }, { 'latitude': 25.0194854736328, 'longitude': 121.47859954834, 'time': '2021-11-10T00:26:04Z', 'elevation': 52.0, 'speed': 23.0, 'heading': 238, 'distance': 305.76240234104 }, { 'latitude': 25.0044422149658, 'longitude': 121.447326660156, 'time': '2021-11-10T00:28:50Z', 'elevation': 48.0, 'speed': 20.0, 'heading': 228, 'distance': 3569.53392030898 }, { 'latitude': 25.0026664733887, 'longitude': 121.444648742676, 'time': '2021-11-10T00:29:06Z', 'elevation': 59.0, 'speed': 23.0, 'heading': 235, 'distance': 334.319995207141 }, { 'latitude': 24.9780979156494, 'longitude': 121.421447753906, 'time': '2021-11-10T00:31:53Z', 'elevation': 73.0, 'speed': 22.0, 'heading': 223, 'distance': 3590.70869587739 }, { 'latitude': 24.9758720397949, 'longitude': 121.419036865234, 'time': '2021-11-10T00:32:08Z', 'elevation': 62.0, 'speed': 23.0, 'heading': 228, 'distance': 346.482845587841 }, { 'latitude': 24.9539089202881, 'longitude': 121.39151763916, 'time': '2021-11-10T00:34:55Z', 'elevation': 67.0, 'speed': 21.0, 'heading': 240, 'distance': 3693.38359858152 }, { 'latitude': 24.9523105621338, 'longitude': 121.388938903809, 'time': '2021-11-10T00:35:10Z', 'elevation': 79.0, 'speed': 22.0, 'heading': 239, 'distance': 314.909110599284 }, { 'latitude': 24.9432907104492, 'longitude': 121.353591918945, 'time': '2021-11-10T00:37:57Z', 'elevation': 90.0, 'speed': 21.0, 'heading': 261, 'distance': 3706.97703024657 }, { 'latitude': 24.942777633667, 'longitude': 121.350486755371, 'time': '2021-11-10T00:38:12Z', 'elevation': 99.0, 'speed': 20.0, 'heading': 259, 'distance': 318.719267393194 }, { 'latitude': 24.9301910400391, 'longitude': 121.316635131836, 'time': '2021-11-10T00:40:59Z', 'elevation': 121.0, 'speed': 23.0, 'heading': 222, 'distance': 3692.4261896859 }, { 'latitude': 24.9280109405518, 'longitude': 121.314041137695, 'time': '2021-11-10T00:41:14Z', 'elevation': 121.0, 'speed': 24.0, 'heading': 229, 'distance': 356.32920782565 }, { 'latitude': 24.9039783477783, 'longitude': 121.286521911621, 'time': '2021-11-10T00:44:01Z', 'elevation': 178.0, 'speed': 22.0, 'heading': 228, 'distance': 3849.03619345476 }, { 'latitude': 24.9021072387695, 'longitude': 121.284042358398, 'time': '2021-11-10T00:44:16Z', 'elevation': 197.0, 'speed': 21.0, 'heading': 225, 'distance': 325.135077257996 }, { 'latitude': 24.8793640136719, 'longitude': 121.258438110352, 'time': '2021-11-10T00:47:03Z', 'elevation': 262.0, 'speed': 20.0, 'heading': 224, 'distance': 3611.03680627062 }, { 'latitude': 24.8776149749756, 'longitude': 121.255836486816, 'time': '2021-11-10T00:47:18Z', 'elevation': 274.0, 'speed': 22.0, 'heading': 228, 'distance': 326.570709713693 }, { 'latitude': 24.8561859130859, 'longitude': 121.225067138672, 'time': '2021-11-10T00:50:05Z', 'elevation': 276.0, 'speed': 24.0, 'heading': 232, 'distance': 3911.97649014379 }, { 'latitude': 24.8543663024902, 'longitude': 121.222061157227, 'time': '2021-11-10T00:50:20Z', 'elevation': 276.0, 'speed': 23.0, 'heading': 237, 'distance': 364.590082397605 }, { 'latitude': 24.8347759246826, 'longitude': 121.191474914551, 'time': '2021-11-10T00:53:07Z', 'elevation': 320.0, 'speed': 23.0, 'heading': 241, 'distance': 3777.14002441502 }, { 'latitude': 24.8334350585938, 'longitude': 121.188407897949, 'time': '2021-11-10T00:53:22Z', 'elevation': 327.0, 'speed': 22.0, 'heading': 241, 'distance': 343.772125065822 }, { 'latitude': 24.8103332519531, 'longitude': 121.160652160645, 'time': '2021-11-10T00:56:09Z', 'elevation': 365.0, 'speed': 25.0, 'heading': 221, 'distance': 3797.61915882953 }, { 'latitude': 24.8076992034912, 'longitude': 121.158149719238, 'time': '2021-11-10T00:56:24Z', 'elevation': 368.0, 'speed': 25.0, 'heading': 217, 'distance': 386.194684811959 }, { 'latitude': 24.791223526001, 'longitude': 121.121658325195, 'time': '2021-11-10T00:59:11Z', 'elevation': 318.0, 'speed': 24.0, 'heading': 236, 'distance': 4116.43458608096 }, { 'latitude': 24.7895545959473, 'longitude': 121.11840057373, 'time': '2021-11-10T00:59:26Z', 'elevation': 304.0, 'speed': 25.0, 'heading': 247, 'distance': 377.752999457871 }, { 'latitude': 24.7685260772705, 'longitude': 121.084854125977, 'time': '2021-11-10T01:02:13Z', 'elevation': 244.0, 'speed': 22.0, 'heading': 239, 'distance': 4115.23005643135 }, { 'latitude': 24.766845703125, 'longitude': 121.082069396973, 'time': '2021-11-10T01:02:28Z', 'elevation': 234.0, 'speed': 21.0, 'heading': 239, 'distance': 337.594081818122 }, { 'latitude': 24.748477935791, 'longitude': 121.053565979004, 'time': '2021-11-10T01:05:15Z', 'elevation': 252.0, 'speed': 20.0, 'heading': 209, 'distance': 3528.66241046387 }, { 'latitude': 24.7465953826904, 'longitude': 121.050712585449, 'time': '2021-11-10T01:05:30Z', 'elevation': 248.0, 'speed': 24.0, 'heading': 240, 'distance': 356.082961588003 }, { 'latitude': 24.7273941040039, 'longitude': 121.017242431641, 'time': '2021-11-10T01:08:17Z', 'elevation': 235.0, 'speed': 23.0, 'heading': 240, 'distance': 3998.56675288593 }, { 'latitude': 24.7258281707764, 'longitude': 121.014228820801, 'time': '2021-11-10T01:08:32Z', 'elevation': 237.0, 'speed': 22.0, 'heading': 233, 'distance': 350.781325139233 }, { 'latitude': 24.7117748260498, 'longitude': 120.978202819824, 'time': '2021-11-10T01:11:19Z', 'elevation': 211.0, 'speed': 24.0, 'heading': 240, 'distance': 3963.54617893043 }, { 'latitude': 24.7101612091064, 'longitude': 120.974990844727, 'time': '2021-11-10T01:11:34Z', 'elevation': 200.0, 'speed': 24.0, 'heading': 226, 'distance': 370.910550203793 }, { 'latitude': 24.6842651367188, 'longitude': 120.947814941406, 'time': '2021-11-10T01:14:21Z', 'elevation': 215.0, 'speed': 25.0, 'heading': 223, 'distance': 3973.80440699261 }, { 'latitude': 24.6814250946045, 'longitude': 120.945739746094, 'time': '2021-11-10T01:14:36Z', 'elevation': 212.0, 'speed': 25.0, 'heading': 213, 'distance': 378.253017339623 }, { 'latitude': 24.6571025848389, 'longitude': 120.915184020996, 'time': '2021-11-10T01:17:23Z', 'elevation': 205.0, 'speed': 25.0, 'heading': 222, 'distance': 4101.69978698871 }, { 'latitude': 24.6549263000488, 'longitude': 120.912246704102, 'time': '2021-11-10T01:17:38Z', 'elevation': 209.0, 'speed': 24.0, 'heading': 226, 'distance': 382.784074754466 }, { 'latitude': 24.6267986297607, 'longitude': 120.884536743164, 'time': '2021-11-10T01:20:25Z', 'elevation': 200.0, 'speed': 25.0, 'heading': 230, 'distance': 4192.54555017351 }, { 'latitude': 24.6244068145752, 'longitude': 120.881828308105, 'time': '2021-11-10T01:20:40Z', 'elevation': 208.0, 'speed': 25.0, 'heading': 225, 'distance': 381.310689272197 }, { 'latitude': 24.5955791473389, 'longitude': 120.850746154785, 'time': '2021-11-10T01:23:27Z', 'elevation': 234.0, 'speed': 27.0, 'heading': 223, 'distance': 4483.6930416409 }, { 'latitude': 24.5931129455566, 'longitude': 120.847526550293, 'time': '2021-11-10T01:23:42Z', 'elevation': 226.0, 'speed': 27.0, 'heading': 228, 'distance': 425.383169641948 }, { 'latitude': 24.5623378753662, 'longitude': 120.81999206543, 'time': '2021-11-10T01:26:29Z', 'elevation': 248.0, 'speed': 27.0, 'heading': 231, 'distance': 4404.42651129674 }, { 'latitude': 24.5598449707031, 'longitude': 120.817291259766, 'time': '2021-11-10T01:26:44Z', 'elevation': 257.0, 'speed': 26.0, 'heading': 224, 'distance': 388.726992237874 }, { 'latitude': 24.5303363800049, 'longitude': 120.786949157715, 'time': '2021-11-10T01:29:31Z', 'elevation': 300.0, 'speed': 29.0, 'heading': 233, 'distance': 4487.12210789203 }, { 'latitude': 24.5273838043213, 'longitude': 120.784141540527, 'time': '2021-11-10T01:29:46Z', 'elevation': 310.0, 'speed': 31.0, 'heading': 220, 'distance': 433.472919167771 }, { 'latitude': 24.4913158416748, 'longitude': 120.761016845703, 'time': '2021-11-10T01:32:33Z', 'elevation': 377.0, 'speed': 27.0, 'heading': 217, 'distance': 4631.77374015402 }, { 'latitude': 24.4882659912109, 'longitude': 120.758453369141, 'time': '2021-11-10T01:32:48Z', 'elevation': 372.0, 'speed': 29.0, 'heading': 225, 'distance': 426.19065820617 }, { 'latitude': 24.4559726715088, 'longitude': 120.721435546875, 'time': '2021-11-10T01:35:35Z', 'elevation': 379.0, 'speed': 30.0, 'heading': 233, 'distance': 5184.39398433552 }, { 'latitude': 24.4530067443848, 'longitude': 120.718109130859, 'time': '2021-11-10T01:35:50Z', 'elevation': 378.0, 'speed': 29.0, 'heading': 222, 'distance': 470.825156718273 }, { 'latitude': 24.4203948974609, 'longitude': 120.689094543457, 'time': '2021-11-10T01:38:37Z', 'elevation': 308.0, 'speed': 29.0, 'heading': 218, 'distance': 4658.86471347686 }, { 'latitude': 24.4171810150146, 'longitude': 120.686790466309, 'time': '2021-11-10T01:38:52Z', 'elevation': 292.0, 'speed': 28.0, 'heading': 212, 'distance': 425.828728945749 }, { 'latitude': 24.3812103271484, 'longitude': 120.662956237793, 'time': '2021-11-10T01:41:39Z', 'elevation': 286.0, 'speed': 28.0, 'heading': 210, 'distance': 4660.39403982292 }, { 'latitude': 24.3776264190674, 'longitude': 120.661468505859, 'time': '2021-11-10T01:41:54Z', 'elevation': 283.0, 'speed': 28.0, 'heading': 204, 'distance': 424.692079034797 }, { 'latitude': 24.3390235900879, 'longitude': 120.650619506836, 'time': '2021-11-10T01:44:41Z', 'elevation': 277.0, 'speed': 23.0, 'heading': 181, 'distance': 4415.21537507655 }, { 'latitude': 24.3356304168701, 'longitude': 120.650032043457, 'time': '2021-11-10T01:44:56Z', 'elevation': 287.0, 'speed': 25.0, 'heading': 189, 'distance': 380.537659405389 }, { 'latitude': 24.3008518218994, 'longitude': 120.646270751953, 'time': '2021-11-10T01:47:43Z', 'elevation': 277.0, 'speed': 19.0, 'heading': 185, 'distance': 3871.04742145227 }, { 'latitude': 24.2982635498047, 'longitude': 120.645515441895, 'time': '2021-11-10T01:47:58Z', 'elevation': 273.0, 'speed': 20.0, 'heading': 196, 'distance': 296.760180165051 }, { 'latitude': 24.2652359008789, 'longitude': 120.640800476074, 'time': '2021-11-10T01:50:45Z', 'elevation': 276.0, 'speed': 23.0, 'heading': 181, 'distance': 3689.40676785941 }, { 'latitude': 24.2620677947998, 'longitude': 120.64079284668, 'time': '2021-11-10T01:51:00Z', 'elevation': 289.0, 'speed': 24.0, 'heading': 178, 'distance': 350.906755122864 }, { 'latitude': 24.2247886657715, 'longitude': 120.634140014648, 'time': '2021-11-10T01:53:47Z', 'elevation': 271.0, 'speed': 25.0, 'heading': 197, 'distance': 4184.01636139699 }, { 'latitude': 24.2215270996094, 'longitude': 120.63370513916, 'time': '2021-11-10T01:54:02Z', 'elevation': 269.0, 'speed': 26.0, 'heading': 194, 'distance': 363.946407068937 }, { 'latitude': 24.1849842071533, 'longitude': 120.627403259277, 'time': '2021-11-10T01:56:49Z', 'elevation': 181.0, 'speed': 24.0, 'heading': 189, 'distance': 4097.85342603944 }, { 'latitude': 24.1818065643311, 'longitude': 120.627235412598, 'time': '2021-11-10T01:57:04Z', 'elevation': 182.0, 'speed': 23.0, 'heading': 178, 'distance': 352.371449855124 }, { 'latitude': 24.1447334289551, 'longitude': 120.621360778809, 'time': '2021-11-10T01:59:51Z', 'elevation': 113.0, 'speed': 24.0, 'heading': 200, 'distance': 4149.41327141926 }, { 'latitude': 24.1414165496826, 'longitude': 120.620811462402, 'time': '2021-11-10T02:00:06Z', 'elevation': 116.0, 'speed': 24.0, 'heading': 188, 'distance': 371.596792471882 }, { 'latitude': 24.1071109771729, 'longitude': 120.617500305176, 'time': '2021-11-10T02:02:53Z', 'elevation': 124.0, 'speed': 22.0, 'heading': 182, 'distance': 3814.56501153408 }, { 'latitude': 24.1039905548096, 'longitude': 120.61710357666, 'time': '2021-11-10T02:03:08Z', 'elevation': 120.0, 'speed': 23.0, 'heading': 187, 'distance': 347.962842573142 }, { 'latitude': 24.0705127716064, 'longitude': 120.614013671875, 'time': '2021-11-10T02:05:55Z', 'elevation': 115.0, 'speed': 21.0, 'heading': 171, 'distance': 3721.26935823125 }, { 'latitude': 24.0675449371338, 'longitude': 120.613945007324, 'time': '2021-11-10T02:06:10Z', 'elevation': 117.0, 'speed': 21.0, 'heading': 185, 'distance': 328.789184247002 }, { 'latitude': 24.0352649688721, 'longitude': 120.624298095703, 'time': '2021-11-10T02:08:57Z', 'elevation': 118.0, 'speed': 24.0, 'heading': 172, 'distance': 3727.14422848562 }, { 'latitude': 24.0319805145264, 'longitude': 120.625122070312, 'time': '2021-11-10T02:09:12Z', 'elevation': 112.0, 'speed': 25.0, 'heading': 168, 'distance': 373.313428584094 }, { 'latitude': 24.0208759307861, 'longitude': 120.627975463867, 'time': '2021-11-10T02:11:58Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 127, 'distance': 1263.71867917353 }, { 'latitude': 24.0209369659424, 'longitude': 120.627937316895, 'time': '2021-11-10T02:12:13Z', 'elevation': 84.0, 'speed': 0.0, 'heading': 174, 'distance': 7.79492920520287 }, { 'latitude': 24.02099609375, 'longitude': 120.627731323242, 'time': '2021-11-10T02:15:00Z', 'elevation': 42.0, 'speed': 0.0, 'heading': 10, 'distance': 21.9562427154525 }, { 'latitude': 24.0209693908691, 'longitude': 120.627723693848, 'time': '2021-11-10T02:15:15Z', 'elevation': 42.0, 'speed': 0.0, 'heading': 10, 'distance': 3.05772358905822 }, { 'latitude': 24.0209159851074, 'longitude': 120.62767791748, 'time': '2021-11-10T02:18:01Z', 'elevation': 42.0, 'speed': 0.0, 'heading': 156, 'distance': 7.52840645990316 }, { 'latitude': 24.0208892822266, 'longitude': 120.627769470215, 'time': '2021-11-10T02:18:17Z', 'elevation': 42.0, 'speed': 0.0, 'heading': 156, 'distance': 9.77243970615593 }, { 'latitude': 24.0208702087402, 'longitude': 120.627784729004, 'time': '2021-11-10T02:21:04Z', 'elevation': 42.0, 'speed': 0.0, 'heading': 285, 'distance': 2.62157408655292 }, { 'latitude': 24.0208969116211, 'longitude': 120.627822875977, 'time': '2021-11-10T02:21:19Z', 'elevation': 42.0, 'speed': 0.0, 'heading': 305, 'distance': 4.87937945183537 }, { 'latitude': 24.020923614502, 'longitude': 120.627830505371, 'time': '2021-11-10T02:24:06Z', 'elevation': 41.0, 'speed': 0.0, 'heading': 1, 'distance': 3.05772367265296 }, { 'latitude': 24.0208759307861, 'longitude': 120.627861022949, 'time': '2021-11-10T02:24:21Z', 'elevation': 41.0, 'speed': 0.0, 'heading': 93, 'distance': 6.12634169344794 }, { 'latitude': 24.0209465026855, 'longitude': 120.627777099609, 'time': '2021-11-10T02:27:08Z', 'elevation': 41.0, 'speed': 0.0, 'heading': 116, 'distance': 11.5755614511892 }, { 'latitude': 24.0209350585938, 'longitude': 120.627716064453, 'time': '2021-11-10T02:27:23Z', 'elevation': 41.0, 'speed': 0.0, 'heading': 116, 'distance': 6.33743261741065 }, { 'latitude': 24.0208892822266, 'longitude': 120.627777099609, 'time': '2021-11-10T02:30:09Z', 'elevation': 41.0, 'speed': 0.0, 'heading': 277, 'distance': 8.0163944355668 }, { 'latitude': 24.0209636688232, 'longitude': 120.627792358398, 'time': '2021-11-10T02:30:25Z', 'elevation': 39.0, 'speed': 0.0, 'heading': 74, 'distance': 8.38391703640256 }, { 'latitude': 24.0104694366455, 'longitude': 120.642074584961, 'time': '2021-11-10T03:00:44Z', 'elevation': 42.0, 'speed': 1.0, 'heading': 356, 'distance': 1860.75196809767 }],
    [{ 'latitude': 25.405143737793, 'longitude': 121.991714477539, 'time': '2021-11-09T23:32:00Z', 'elevation': 73.0, 'speed': 21.0, 'heading': 214, 'distance': 0.0 }, { 'latitude': 25.4026699066162, 'longitude': 121.990905761719, 'time': '2021-11-09T23:32:14Z', 'elevation': 92.0, 'speed': 21.0, 'heading': 205, 'distance': 285.8736784736 }, { 'latitude': 25.400203704834, 'longitude': 121.989776611328, 'time': '2021-11-09T23:32:29Z', 'elevation': 109.0, 'speed': 21.0, 'heading': 186, 'distance': 295.885515747275 }, { 'latitude': 25.3973598480225, 'longitude': 121.988319396973, 'time': '2021-11-09T23:32:44Z', 'elevation': 116.0, 'speed': 25.0, 'heading': 212, 'distance': 347.490065249352 }, { 'latitude': 25.3942222595215, 'longitude': 121.986877441406, 'time': '2021-11-09T23:32:59Z', 'elevation': 122.0, 'speed': 24.0, 'heading': 194, 'distance': 376.647684190378 }, { 'latitude': 25.3912467956543, 'longitude': 121.985511779785, 'time': '2021-11-09T23:33:14Z', 'elevation': 148.0, 'speed': 24.0, 'heading': 211, 'distance': 357.117673569798 }, { 'latitude': 25.3881969451904, 'longitude': 121.984558105469, 'time': '2021-11-09T23:33:29Z', 'elevation': 158.0, 'speed': 24.0, 'heading': 197, 'distance': 351.223821483474 }, { 'latitude': 25.385046005249, 'longitude': 121.983444213867, 'time': '2021-11-09T23:33:44Z', 'elevation': 171.0, 'speed': 23.0, 'heading': 194, 'distance': 366.613697958697 }, { 'latitude': 25.3819541931152, 'longitude': 121.982971191406, 'time': '2021-11-09T23:33:59Z', 'elevation': 175.0, 'speed': 23.0, 'heading': 201, 'distance': 345.798829775882 }, { 'latitude': 25.3788280487061, 'longitude': 121.981887817383, 'time': '2021-11-09T23:34:14Z', 'elevation': 177.0, 'speed': 24.0, 'heading': 196, 'distance': 363.066827454092 }, { 'latitude': 25.3757152557373, 'longitude': 121.980918884277, 'time': '2021-11-09T23:34:29Z', 'elevation': 186.0, 'speed': 24.0, 'heading': 202, 'distance': 358.353143122301 }, { 'latitude': 25.3406963348389, 'longitude': 121.964317321777, 'time': '2021-11-09T23:37:17Z', 'elevation': 328.0, 'speed': 28.0, 'heading': 205, 'distance': 4223.93231788581 }, { 'latitude': 25.3374099731445, 'longitude': 121.962593078613, 'time': '2021-11-09T23:37:32Z', 'elevation': 332.0, 'speed': 26.0, 'heading': 189, 'distance': 403.320880635442 }, { 'latitude': 25.2985134124756, 'longitude': 121.940849304199, 'time': '2021-11-09T23:40:19Z', 'elevation': 335.0, 'speed': 30.0, 'heading': 215, 'distance': 4833.17929064712 }, { 'latitude': 25.2953224182129, 'longitude': 121.93830871582, 'time': '2021-11-09T23:40:34Z', 'elevation': 329.0, 'speed': 29.0, 'heading': 220, 'distance': 436.366497417768 }, { 'latitude': 25.2563152313232, 'longitude': 121.91805267334, 'time': '2021-11-09T23:43:21Z', 'elevation': 128.0, 'speed': 28.0, 'heading': 202, 'distance': 4778.5525429242 }, { 'latitude': 25.2528038024902, 'longitude': 121.916198730469, 'time': '2021-11-09T23:43:36Z', 'elevation': 118.0, 'speed': 30.0, 'heading': 197, 'distance': 431.498890456501 }, { 'latitude': 25.2156963348389, 'longitude': 121.898628234863, 'time': '2021-11-09T23:46:23Z', 'elevation': 143.0, 'speed': 24.0, 'heading': 206, 'distance': 4475.6543380879 }, { 'latitude': 25.2126274108887, 'longitude': 121.896766662598, 'time': '2021-11-09T23:46:38Z', 'elevation': 156.0, 'speed': 25.0, 'heading': 212, 'distance': 388.289093225276 }, { 'latitude': 25.1773834228516, 'longitude': 121.877395629883, 'time': '2021-11-09T23:49:25Z', 'elevation': 170.0, 'speed': 25.0, 'heading': 208, 'distance': 4365.14971172248 }, { 'latitude': 25.1742858886719, 'longitude': 121.875564575195, 'time': '2021-11-09T23:49:40Z', 'elevation': 170.0, 'speed': 26.0, 'heading': 205, 'distance': 389.626814764722 }, { 'latitude': 25.1450710296631, 'longitude': 121.849212646484, 'time': '2021-11-09T23:52:27Z', 'elevation': 161.0, 'speed': 26.0, 'heading': 223, 'distance': 4187.1253845891 }, { 'latitude': 25.1428718566895, 'longitude': 121.846412658691, 'time': '2021-11-09T23:52:42Z', 'elevation': 159.0, 'speed': 24.0, 'heading': 218, 'distance': 372.903527709423 }, { 'latitude': 25.1200141906738, 'longitude': 121.819435119629, 'time': '2021-11-09T23:55:29Z', 'elevation': 130.0, 'speed': 18.0, 'heading': 233, 'distance': 3716.49209890948 }, { 'latitude': 25.1179428100586, 'longitude': 121.817665100098, 'time': '2021-11-09T23:55:44Z', 'elevation': 147.0, 'speed': 21.0, 'heading': 219, 'distance': 290.717246555668 }, { 'latitude': 25.107213973999, 'longitude': 121.784324645996, 'time': '2021-11-09T23:58:31Z', 'elevation': 110.0, 'speed': 23.0, 'heading': 237, 'distance': 3566.49619307105 }, { 'latitude': 25.1052379608154, 'longitude': 121.782028198242, 'time': '2021-11-09T23:58:46Z', 'elevation': 123.0, 'speed': 16.0, 'heading': 218, 'distance': 318.692078997436 }, { 'latitude': 25.0976734161377, 'longitude': 121.746803283691, 'time': '2021-11-10T00:01:32Z', 'elevation': 100.0, 'speed': 23.0, 'heading': 257, 'distance': 3650.50884960696 }, { 'latitude': 25.0971527099609, 'longitude': 121.743446350098, 'time': '2021-11-10T00:01:48Z', 'elevation': 100.0, 'speed': 21.0, 'heading': 265, 'distance': 343.492716010365 }, { 'latitude': 25.0917415618896, 'longitude': 121.708419799805, 'time': '2021-11-10T00:04:35Z', 'elevation': 120.0, 'speed': 21.0, 'heading': 245, 'distance': 3583.71077344227 }, { 'latitude': 25.0902557373047, 'longitude': 121.705383300781, 'time': '2021-11-10T00:04:50Z', 'elevation': 115.0, 'speed': 22.0, 'heading': 244, 'distance': 347.728687791436 }, { 'latitude': 25.0758800506592, 'longitude': 121.672019958496, 'time': '2021-11-10T00:07:37Z', 'elevation': 95.0, 'speed': 22.0, 'heading': 238, 'distance': 3723.47689189874 }, { 'latitude': 25.0742835998535, 'longitude': 121.669334411621, 'time': '2021-11-10T00:07:52Z', 'elevation': 102.0, 'speed': 21.0, 'heading': 237, 'distance': 323.548114357946 }, { 'latitude': 25.0591011047363, 'longitude': 121.636703491211, 'time': '2021-11-10T00:10:39Z', 'elevation': 68.0, 'speed': 24.0, 'heading': 231, 'distance': 3697.00729387167 }, { 'latitude': 25.0572738647461, 'longitude': 121.63402557373, 'time': '2021-11-10T00:10:54Z', 'elevation': 73.0, 'speed': 22.0, 'heading': 248, 'distance': 337.613036361698 }, { 'latitude': 25.0522632598877, 'longitude': 121.598037719727, 'time': '2021-11-10T00:13:41Z', 'elevation': 50.0, 'speed': 24.0, 'heading': 255, 'distance': 3673.53844894146 }, { 'latitude': 25.0508308410645, 'longitude': 121.594924926758, 'time': '2021-11-10T00:13:56Z', 'elevation': 47.0, 'speed': 22.0, 'heading': 250, 'distance': 351.908773500069 }, { 'latitude': 25.0426387786865, 'longitude': 121.559761047363, 'time': '2021-11-10T00:16:43Z', 'elevation': 62.0, 'speed': 20.0, 'heading': 257, 'distance': 3662.65050647992 }, { 'latitude': 25.0419979095459, 'longitude': 121.556678771973, 'time': '2021-11-10T00:16:58Z', 'elevation': 57.0, 'speed': 24.0, 'heading': 253, 'distance': 319.047712861996 }, { 'latitude': 25.0300369262695, 'longitude': 121.52326965332, 'time': '2021-11-10T00:19:45Z', 'elevation': 45.0, 'speed': 21.0, 'heading': 267, 'distance': 3622.66102172854 }, { 'latitude': 25.029411315918, 'longitude': 121.520362854004, 'time': '2021-11-10T00:20:00Z', 'elevation': 59.0, 'speed': 17.0, 'heading': 255, 'distance': 301.445137249505 }, { 'latitude': 25.0181732177734, 'longitude': 121.486869812012, 'time': '2021-11-10T00:22:47Z', 'elevation': 37.0, 'speed': 21.0, 'heading': 242, 'distance': 3602.40661329883 }, { 'latitude': 25.0168781280518, 'longitude': 121.484039306641, 'time': '2021-11-10T00:23:02Z', 'elevation': 38.0, 'speed': 20.0, 'heading': 245, 'distance': 319.695403150826 }, { 'latitude': 25.0046367645264, 'longitude': 121.450408935547, 'time': '2021-11-10T00:25:49Z', 'elevation': 51.0, 'speed': 22.0, 'heading': 242, 'distance': 3655.50466495354 }, { 'latitude': 25.0032939910889, 'longitude': 121.447463989258, 'time': '2021-11-10T00:26:04Z', 'elevation': 52.0, 'speed': 23.0, 'heading': 247, 'distance': 332.417929125784 }, { 'latitude': 24.9816932678223, 'longitude': 121.420509338379, 'time': '2021-11-10T00:28:51Z', 'elevation': 87.0, 'speed': 22.0, 'heading': 217, 'distance': 3623.6036311583 }, { 'latitude': 24.9797096252441, 'longitude': 121.418319702148, 'time': '2021-11-10T00:29:06Z', 'elevation': 96.0, 'speed': 20.0, 'heading': 215, 'distance': 311.702413755107 }, { 'latitude': 24.9598445892334, 'longitude': 121.389007568359, 'time': '2021-11-10T00:31:53Z', 'elevation': 117.0, 'speed': 23.0, 'heading': 236, 'distance': 3688.16027912804 }, { 'latitude': 24.9580020904541, 'longitude': 121.386108398438, 'time': '2021-11-10T00:32:08Z', 'elevation': 114.0, 'speed': 22.0, 'heading': 245, 'distance': 356.88851013886 }, { 'latitude': 24.9486865997314, 'longitude': 121.349411010742, 'time': '2021-11-10T00:34:55Z', 'elevation': 93.0, 'speed': 24.0, 'heading': 255, 'distance': 3846.98129736936 }, { 'latitude': 24.9482975006104, 'longitude': 121.346122741699, 'time': '2021-11-10T00:35:10Z', 'elevation': 100.0, 'speed': 22.0, 'heading': 261, 'distance': 334.87465008355 }, { 'latitude': 24.9304351806641, 'longitude': 121.316131591797, 'time': '2021-11-10T00:37:57Z', 'elevation': 124.0, 'speed': 22.0, 'heading': 225, 'distance': 3618.07149009681 }, { 'latitude': 24.9284152984619, 'longitude': 121.31372833252, 'time': '2021-11-10T00:38:12Z', 'elevation': 134.0, 'speed': 21.0, 'heading': 229, 'distance': 330.134387743698 }, { 'latitude': 24.9076271057129, 'longitude': 121.28532409668, 'time': '2021-11-10T00:40:59Z', 'elevation': 200.0, 'speed': 23.0, 'heading': 216, 'distance': 3679.07093367843 }, { 'latitude': 24.9055156707764, 'longitude': 121.282974243164, 'time': '2021-11-10T00:41:14Z', 'elevation': 204.0, 'speed': 20.0, 'heading': 230, 'distance': 333.257210997486 }, { 'latitude': 24.8861656188965, 'longitude': 121.253456115723, 'time': '2021-11-10T00:44:01Z', 'elevation': 298.0, 'speed': 24.0, 'heading': 248, 'distance': 3672.70976768174 }, { 'latitude': 24.8840160369873, 'longitude': 121.25065612793, 'time': '2021-11-10T00:44:16Z', 'elevation': 300.0, 'speed': 25.0, 'heading': 236, 'distance': 369.785982556609 }, { 'latitude': 24.8667068481445, 'longitude': 121.214645385742, 'time': '2021-11-10T00:47:03Z', 'elevation': 301.0, 'speed': 25.0, 'heading': 253, 'distance': 4113.17240858597 }, { 'latitude': 24.8650531768799, 'longitude': 121.211532592773, 'time': '2021-11-10T00:47:18Z', 'elevation': 312.0, 'speed': 23.0, 'heading': 230, 'distance': 364.023478003107 }, { 'latitude': 24.8478393554688, 'longitude': 121.176170349121, 'time': '2021-11-10T00:50:05Z', 'elevation': 355.0, 'speed': 26.0, 'heading': 231, 'distance': 4050.80458049676 }, { 'latitude': 24.8460140228271, 'longitude': 121.173072814941, 'time': '2021-11-10T00:50:20Z', 'elevation': 370.0, 'speed': 24.0, 'heading': 240, 'distance': 372.696713188784 }, { 'latitude': 24.8328895568848, 'longitude': 121.132698059082, 'time': '2021-11-10T00:53:07Z', 'elevation': 357.0, 'speed': 27.0, 'heading': 258, 'distance': 4332.32609295998 }, { 'latitude': 24.832368850708, 'longitude': 121.128768920898, 'time': '2021-11-10T00:53:22Z', 'elevation': 356.0, 'speed': 27.0, 'heading': 254, 'distance': 401.348688815424 }, { 'latitude': 24.8109016418457, 'longitude': 121.090751647949, 'time': '2021-11-10T00:56:09Z', 'elevation': 284.0, 'speed': 26.0, 'heading': 240, 'distance': 4519.51614021301 }, { 'latitude': 24.8094177246094, 'longitude': 121.086776733398, 'time': '2021-11-10T00:56:24Z', 'elevation': 267.0, 'speed': 28.0, 'heading': 243, 'distance': 434.198221385987 }, { 'latitude': 24.7867946624756, 'longitude': 121.050651550293, 'time': '2021-11-10T00:59:11Z', 'elevation': 197.0, 'speed': 24.0, 'heading': 243, 'distance': 4429.73885927782 }, { 'latitude': 24.7853260040283, 'longitude': 121.047416687012, 'time': '2021-11-10T00:59:26Z', 'elevation': 185.0, 'speed': 24.0, 'heading': 248, 'distance': 365.342476586595 }, { 'latitude': 24.7691040039062, 'longitude': 121.016960144043, 'time': '2021-11-10T01:02:13Z', 'elevation': 192.0, 'speed': 20.0, 'heading': 206, 'distance': 3565.94331095058 }, { 'latitude': 24.7674331665039, 'longitude': 121.014617919922, 'time': '2021-11-10T01:02:28Z', 'elevation': 204.0, 'speed': 20.0, 'heading': 234, 'distance': 300.616530896328 }, { 'latitude': 24.7491645812988, 'longitude': 120.980613708496, 'time': '2021-11-10T01:05:15Z', 'elevation': 214.0, 'speed': 24.0, 'heading': 248, 'distance': 3990.55292404997 }, { 'latitude': 24.7478275299072, 'longitude': 120.977600097656, 'time': '2021-11-10T01:05:30Z', 'elevation': 233.0, 'speed': 23.0, 'heading': 234, 'distance': 338.913890837332 }, { 'latitude': 24.7331943511963, 'longitude': 120.938735961914, 'time': '2021-11-10T01:08:17Z', 'elevation': 212.0, 'speed': 27.0, 'heading': 245, 'distance': 4252.56585476116 }, { 'latitude': 24.7314643859863, 'longitude': 120.935279846191, 'time': '2021-11-10T01:08:32Z', 'elevation': 202.0, 'speed': 27.0, 'heading': 236, 'distance': 398.715274213929 }, { 'latitude': 24.7061176300049, 'longitude': 120.908302307129, 'time': '2021-11-10T01:11:19Z', 'elevation': 203.0, 'speed': 21.0, 'heading': 209, 'distance': 3915.76555951923 }, { 'latitude': 24.7034511566162, 'longitude': 120.907119750977, 'time': '2021-11-10T01:11:34Z', 'elevation': 200.0, 'speed': 24.0, 'heading': 206, 'distance': 318.680837395165 }, { 'latitude': 24.6739768981934, 'longitude': 120.887367248535, 'time': '2021-11-10T01:14:21Z', 'elevation': 185.0, 'speed': 24.0, 'heading': 213, 'distance': 3828.19124222065 }, { 'latitude': 24.6715030670166, 'longitude': 120.884796142578, 'time': '2021-11-10T01:14:36Z', 'elevation': 174.0, 'speed': 26.0, 'heading': 229, 'distance': 377.903229036815 }, { 'latitude': 24.6446914672852, 'longitude': 120.855773925781, 'time': '2021-11-10T01:17:23Z', 'elevation': 236.0, 'speed': 26.0, 'heading': 230, 'distance': 4177.44548301734 }, { 'latitude': 24.6419849395752, 'longitude': 120.853210449219, 'time': '2021-11-10T01:17:38Z', 'elevation': 248.0, 'speed': 26.0, 'heading': 220, 'distance': 396.523307946607 }, { 'latitude': 24.6099014282227, 'longitude': 120.822204589844, 'time': '2021-11-10T01:20:25Z', 'elevation': 266.0, 'speed': 29.0, 'heading': 217, 'distance': 4741.90933345841 }, { 'latitude': 24.6067428588867, 'longitude': 120.819694519043, 'time': '2021-11-10T01:20:40Z', 'elevation': 272.0, 'speed': 28.0, 'heading': 210, 'distance': 432.455848004884 }, { 'latitude': 24.5737781524658, 'longitude': 120.795440673828, 'time': '2021-11-10T01:23:27Z', 'elevation': 302.0, 'speed': 27.0, 'heading': 223, 'distance': 4400.79650722264 }, { 'latitude': 24.5713958740234, 'longitude': 120.792633056641, 'time': '2021-11-10T01:23:42Z', 'elevation': 314.0, 'speed': 28.0, 'heading': 233, 'distance': 387.963085192056 }, { 'latitude': 24.5409450531006, 'longitude': 120.760231018066, 'time': '2021-11-10T01:26:29Z', 'elevation': 349.0, 'speed': 25.0, 'heading': 206, 'distance': 4706.62902712781 }, { 'latitude': 24.5379028320312, 'longitude': 120.757911682129, 'time': '2021-11-10T01:26:44Z', 'elevation': 347.0, 'speed': 29.0, 'heading': 217, 'distance': 410.826259606394 }, { 'latitude': 24.5001430511475, 'longitude': 120.733001708984, 'time': '2021-11-10T01:29:31Z', 'elevation': 279.0, 'speed': 31.0, 'heading': 208, 'distance': 4885.24840850079 }, { 'latitude': 24.4965000152588, 'longitude': 120.731369018555, 'time': '2021-11-10T01:29:46Z', 'elevation': 296.0, 'speed': 30.0, 'heading': 210, 'distance': 436.136633058654 }, { 'latitude': 24.4577255249023, 'longitude': 120.707122802734, 'time': '2021-11-10T01:32:33Z', 'elevation': 303.0, 'speed': 29.0, 'heading': 202, 'distance': 4948.45320292451 }, { 'latitude': 24.4542179107666, 'longitude': 120.705406188965, 'time': '2021-11-10T01:32:48Z', 'elevation': 314.0, 'speed': 27.0, 'heading': 207, 'distance': 425.72364217289 }, { 'latitude': 24.4160537719727, 'longitude': 120.674133300781, 'time': '2021-11-10T01:35:35Z', 'elevation': 215.0, 'speed': 32.0, 'heading': 205, 'distance': 5284.55540482825 }, { 'latitude': 24.412281036377, 'longitude': 120.672134399414, 'time': '2021-11-10T01:35:50Z', 'elevation': 229.0, 'speed': 30.0, 'heading': 204, 'distance': 464.466242666075 }, { 'latitude': 24.3729133605957, 'longitude': 120.64892578125, 'time': '2021-11-10T01:38:37Z', 'elevation': 208.0, 'speed': 27.0, 'heading': 200, 'distance': 4955.48596442759 }, { 'latitude': 24.3696765899658, 'longitude': 120.646766662598, 'time': '2021-11-10T01:38:52Z', 'elevation': 214.0, 'speed': 28.0, 'heading': 211, 'distance': 420.143976605991 }, { 'latitude': 24.3317337036133, 'longitude': 120.625030517578, 'time': '2021-11-10T01:41:39Z', 'elevation': 237.0, 'speed': 25.0, 'heading': 219, 'distance': 4746.3076884231 }, { 'latitude': 24.3288974761963, 'longitude': 120.622428894043, 'time': '2021-11-10T01:41:54Z', 'elevation': 239.0, 'speed': 25.0, 'heading': 206, 'distance': 410.37378218667 }, { 'latitude': 24.2932300567627, 'longitude': 120.609283447266, 'time': '2021-11-10T01:44:41Z', 'elevation': 263.0, 'speed': 20.0, 'heading': 176, 'distance': 4169.87559359279 }, { 'latitude': 24.2902545928955, 'longitude': 120.609748840332, 'time': '2021-11-10T01:44:56Z', 'elevation': 256.0, 'speed': 23.0, 'heading': 178, 'distance': 332.939134608807 }, { 'latitude': 24.2566051483154, 'longitude': 120.612197875977, 'time': '2021-11-10T01:47:43Z', 'elevation': 320.0, 'speed': 23.0, 'heading': 195, 'distance': 3735.37200644211 }, { 'latitude': 24.2535743713379, 'longitude': 120.611610412598, 'time': '2021-11-10T01:47:58Z', 'elevation': 340.0, 'speed': 21.0, 'heading': 184, 'distance': 340.954354986042 }, { 'latitude': 24.2172031402588, 'longitude': 120.61442565918, 'time': '2021-11-10T01:50:45Z', 'elevation': 340.0, 'speed': 24.0, 'heading': 179, 'distance': 4038.67143916486 }, { 'latitude': 24.2139739990234, 'longitude': 120.614479064941, 'time': '2021-11-10T01:51:00Z', 'elevation': 346.0, 'speed': 21.0, 'heading': 171, 'distance': 357.705160676314 }, { 'latitude': 24.1769523620605, 'longitude': 120.614501953125, 'time': '2021-11-10T01:53:47Z', 'elevation': 282.0, 'speed': 24.0, 'heading': 176, 'distance': 4100.55606388947 }, { 'latitude': 24.1737098693848, 'longitude': 120.61457824707, 'time': '2021-11-10T01:54:02Z', 'elevation': 269.0, 'speed': 24.0, 'heading': 179, 'distance': 359.224610676411 }, { 'latitude': 24.1512298583984, 'longitude': 120.612617492676, 'time': '2021-11-10T01:56:49Z', 'elevation': 132.0, 'speed': 0.0, 'heading': 146, 'distance': 2497.85917879165 }, { 'latitude': 24.1512928009033, 'longitude': 120.612564086914, 'time': '2021-11-10T01:57:04Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 146, 'distance': 8.83529631023363 }, { 'latitude': 24.1510734558105, 'longitude': 120.612518310547, 'time': '2021-11-10T01:59:50Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 189, 'distance': 24.7361914736963 }, { 'latitude': 24.1512756347656, 'longitude': 120.612586975098, 'time': '2021-11-10T02:00:06Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 189, 'distance': 23.4555935658772 }, { 'latitude': 24.1514778137207, 'longitude': 120.612617492676, 'time': '2021-11-10T02:02:53Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 109, 'distance': 22.6071903511388 }, { 'latitude': 24.1513175964355, 'longitude': 120.612579345703, 'time': '2021-11-10T02:03:08Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 206, 'distance': 18.1642962746035 }, { 'latitude': 24.1514434814453, 'longitude': 120.612586975098, 'time': '2021-11-10T02:05:55Z', 'elevation': 98.0, 'speed': 0.0, 'heading': 54, 'distance': 13.9646187282869 }, { 'latitude': 24.151330947876, 'longitude': 120.612548828125, 'time': '2021-11-10T02:06:10Z', 'elevation': 98.0, 'speed': 0.0, 'heading': 54, 'distance': 13.0532958324264 }, { 'latitude': 24.1514091491699, 'longitude': 120.612686157227, 'time': '2021-11-10T02:08:57Z', 'elevation': 97.0, 'speed': 0.0, 'heading': 22, 'distance': 16.4263113955389 }, { 'latitude': 24.151460647583, 'longitude': 120.612655639648, 'time': '2021-11-10T02:09:12Z', 'elevation': 98.0, 'speed': 0.0, 'heading': 22, 'distance': 6.49269252325181 }, { 'latitude': 24.1513576507568, 'longitude': 120.612609863281, 'time': '2021-11-10T02:11:59Z', 'elevation': 98.0, 'speed': 0.0, 'heading': 175, 'distance': 12.3201428976571 }, { 'latitude': 24.1513481140137, 'longitude': 120.61262512207, 'time': '2021-11-10T02:12:14Z', 'elevation': 98.0, 'speed': 0.0, 'heading': 195, 'distance': 1.87634241589683 }, { 'latitude': 24.1513576507568, 'longitude': 120.61262512207, 'time': '2021-11-10T02:15:01Z', 'elevation': 97.0, 'speed': 0.0, 'heading': 226, 'distance': 1.05629358363913 }, { 'latitude': 24.1513690948486, 'longitude': 120.61262512207, 'time': '2021-11-10T02:15:16Z', 'elevation': 97.0, 'speed': 0.0, 'heading': 226, 'distance': 1.26755230214807 }, { 'latitude': 24.1513233184814, 'longitude': 120.612586975098, 'time': '2021-11-10T02:18:03Z', 'elevation': 97.0, 'speed': 1.0, 'heading': 181, 'distance': 6.3826074130971 }, { 'latitude': 24.1513023376465, 'longitude': 120.612586975098, 'time': '2021-11-10T02:18:18Z', 'elevation': 95.0, 'speed': 0.0, 'heading': 253, 'distance': 2.323845871609 }, { 'latitude': 24.1512031555176, 'longitude': 120.612571716309, 'time': '2021-11-10T02:21:05Z', 'elevation': 93.0, 'speed': 0.0, 'heading': 228, 'distance': 11.0943719432614 }, { 'latitude': 24.1512107849121, 'longitude': 120.612564086914, 'time': '2021-11-10T02:21:20Z', 'elevation': 94.0, 'speed': 0.0, 'heading': 228, 'distance': 1.14687028194265 }, { 'latitude': 24.1512393951416, 'longitude': 120.61254119873, 'time': '2021-11-10T02:24:07Z', 'elevation': 93.0, 'speed': 0.0, 'heading': 19, 'distance': 3.93101148127218 }, { 'latitude': 24.1513366699219, 'longitude': 120.612586975098, 'time': '2021-11-10T02:24:22Z', 'elevation': 94.0, 'speed': 0.0, 'heading': 19, 'distance': 11.7357330678401 }, { 'latitude': 24.1513290405273, 'longitude': 120.61255645752, 'time': '2021-11-10T02:27:09Z', 'elevation': 94.0, 'speed': 0.0, 'heading': 217, 'distance': 3.21460818952465 }, { 'latitude': 24.1513061523438, 'longitude': 120.612571716309, 'time': '2021-11-10T02:27:24Z', 'elevation': 94.0, 'speed': 0.0, 'heading': 193, 'distance': 2.97181111671723 }, { 'latitude': 24.1511726379395, 'longitude': 120.612495422363, 'time': '2021-11-10T02:30:10Z', 'elevation': 94.0, 'speed': 1.0, 'heading': 224, 'distance': 16.6976602004572 }, { 'latitude': 24.1513042449951, 'longitude': 120.61254119873, 'time': '2021-11-10T02:30:26Z', 'elevation': 92.0, 'speed': 0.0, 'heading': 224, 'distance': 15.3012670383932 }, { 'latitude': 24.1512718200684, 'longitude': 120.612586975098, 'time': '2021-11-10T02:33:12Z', 'elevation': 93.0, 'speed': 0.0, 'heading': 203, 'distance': 5.87727020470007 }, { 'latitude': 24.1512928009033, 'longitude': 120.61255645752, 'time': '2021-11-10T02:33:28Z', 'elevation': 92.0, 'speed': 0.0, 'heading': 207, 'distance': 3.87555016039803 }, { 'latitude': 24.151481628418, 'longitude': 120.61270904541, 'time': '2021-11-10T02:36:15Z', 'elevation': 92.0, 'speed': 0.0, 'heading': 9, 'distance': 26.0368033138636 }, { 'latitude': 24.1513767242432, 'longitude': 120.612663269043, 'time': '2021-11-10T02:36:30Z', 'elevation': 92.0, 'speed': 0.0, 'heading': 185, 'distance': 12.5160142130925 }, { 'latitude': 24.1513519287109, 'longitude': 120.61255645752, 'time': '2021-11-10T02:39:17Z', 'elevation': 92.0, 'speed': 0.0, 'heading': 287, 'distance': 11.1975290357258 }, { 'latitude': 24.1513919830322, 'longitude': 120.612609863281, 'time': '2021-11-10T02:39:32Z', 'elevation': 92.0, 'speed': 0.0, 'heading': 228, 'distance': 7.01013640577639 }, { 'latitude': 24.1515140533447, 'longitude': 120.612205505371, 'time': '2021-11-10T02:42:18Z', 'elevation': 92.0, 'speed': 0.0, 'heading': 293, 'distance': 43.2628419339581 }, { 'latitude': 24.1512966156006, 'longitude': 120.61247253418, 'time': '2021-11-10T02:42:34Z', 'elevation': 92.0, 'speed': 0.0, 'heading': 58, 'distance': 36.2839856315973 }, { 'latitude': 24.1539440155029, 'longitude': 120.618110656738, 'time': '2021-11-10T02:45:20Z', 'elevation': 102.0, 'speed': 6.0, 'heading': 84, 'distance': 643.679296893365 }, { 'latitude': 24.1531887054443, 'longitude': 120.619491577148, 'time': '2021-11-10T02:45:35Z', 'elevation': 48.0, 'speed': 12.0, 'heading': 125, 'distance': 163.386472961805 }, { 'latitude': 24.1519184112549, 'longitude': 120.62434387207, 'time': '2021-11-10T02:48:22Z', 'elevation': 38.0, 'speed': 0.0, 'heading': 0, 'distance': 512.824380949555 }, { 'latitude': 24.1522197723389, 'longitude': 120.62467956543, 'time': '2021-11-10T02:48:37Z', 'elevation': 19.0, 'speed': 2.0, 'heading': 88, 'distance': 47.7297463462268 }, { 'latitude': 24.1578617095947, 'longitude': 120.627487182617, 'time': '2021-11-10T02:51:24Z', 'elevation': 39.0, 'speed': 2.0, 'heading': 100, 'distance': 686.965457368944 }, { 'latitude': 24.1578369140625, 'longitude': 120.627311706543, 'time': '2021-11-10T02:51:39Z', 'elevation': 39.0, 'speed': 0.0, 'heading': 142, 'distance': 18.0433910952502 }, { 'latitude': 24.1579761505127, 'longitude': 120.627388000488, 'time': '2021-11-10T02:54:25Z', 'elevation': 39.0, 'speed': 0.0, 'heading': 136, 'distance': 17.2612979412617 }, { 'latitude': 24.1578750610352, 'longitude': 120.627227783203, 'time': '2021-11-10T02:54:41Z', 'elevation': 39.0, 'speed': 0.0, 'heading': 180, 'distance': 19.7606761285313 }, { 'latitude': 24.1578063964844, 'longitude': 120.627304077148, 'time': '2021-11-10T02:57:28Z', 'elevation': 39.0, 'speed': 2.0, 'heading': 164, 'distance': 10.8608645355497 }, { 'latitude': 24.1578369140625, 'longitude': 120.627212524414, 'time': '2021-11-10T02:57:43Z', 'elevation': 39.0, 'speed': 0.0, 'heading': 212, 'distance': 9.89922027791092 }, { 'latitude': 24.157844543457, 'longitude': 120.627410888672, 'time': '2021-11-10T03:00:30Z', 'elevation': 39.0, 'speed': 0.0, 'heading': 182, 'distance': 20.176924053661 }, { 'latitude': 24.1578006744385, 'longitude': 120.627311706543, 'time': '2021-11-10T03:00:45Z', 'elevation': 39.0, 'speed': 0.0, 'heading': 211, 'distance': 11.1896386571733 }, { 'latitude': 24.1578598022461, 'longitude': 120.627235412598, 'time': '2021-11-10T03:03:31Z', 'elevation': 38.0, 'speed': 0.0, 'heading': 163, 'distance': 10.1492477823668 }, { 'latitude': 24.1578025817871, 'longitude': 120.627197265625, 'time': '2021-11-10T03:03:47Z', 'elevation': 38.0, 'speed': 0.0, 'heading': 155, 'distance': 7.42942984797778 }, { 'latitude': 24.1576881408691, 'longitude': 120.627151489258, 'time': '2021-11-10T03:06:34Z', 'elevation': 38.0, 'speed': 0.0, 'heading': 176, 'distance': 13.5022643048957 }, { 'latitude': 24.1577548980713, 'longitude': 120.627243041992, 'time': '2021-11-10T03:06:49Z', 'elevation': 38.0, 'speed': 0.0, 'heading': 181, 'distance': 11.8845057438051 }, { 'latitude': 24.1577739715576, 'longitude': 120.62735748291, 'time': '2021-11-10T03:09:36Z', 'elevation': 38.0, 'speed': 2.0, 'heading': 125, 'distance': 11.8206398938535 }, { 'latitude': 24.1578693389893, 'longitude': 120.62727355957, 'time': '2021-11-10T03:09:51Z', 'elevation': 38.0, 'speed': 0.0, 'heading': 94, 'distance': 13.5763757167823 }, { 'latitude': 24.1578903198242, 'longitude': 120.627021789551, 'time': '2021-11-10T03:12:52Z', 'elevation': 38.0, 'speed': 0.0, 'heading': 124, 'distance': 25.6920075270609 }, { 'latitude': 24.157642364502, 'longitude': 120.62767791748, 'time': '2021-11-10T03:18:42Z', 'elevation': 77.0, 'speed': 1.0, 'heading': 95, 'distance': 72.1148149976194 }, { 'latitude': 24.1575374603271, 'longitude': 120.627342224121, 'time': '2021-11-10T03:18:57Z', 'elevation': 32.0, 'speed': 0.0, 'heading': 129, 'distance': 36.0400570454684 }, { 'latitude': 24.1582813262939, 'longitude': 120.627372741699, 'time': '2021-11-10T03:22:00Z', 'elevation': 94.0, 'speed': 0.0, 'heading': 86, 'distance': 82.4493215425049 }, { 'latitude': 24.1578979492188, 'longitude': 120.62686920166, 'time': '2021-11-10T03:34:06Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 170, 'distance': 66.4967450294017 }, { 'latitude': 24.1578464508057, 'longitude': 120.627090454102, 'time': '2021-11-10T03:36:54Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 79, 'distance': 23.1974843758146 }, { 'latitude': 24.1578330993652, 'longitude': 120.627044677734, 'time': '2021-11-10T03:37:09Z', 'elevation': 73.0, 'speed': 0.0, 'heading': 79, 'distance': 4.88147956786688 }, { 'latitude': 24.1525764465332, 'longitude': 120.62467956543, 'time': '2021-11-10T03:40:11Z', 'elevation': 73.0, 'speed': 10.0, 'heading': 195, 'distance': 629.893839333311 }, { 'latitude': 24.1516265869141, 'longitude': 120.626480102539, 'time': '2021-11-10T03:42:57Z', 'elevation': 73.0, 'speed': 1.0, 'heading': 157, 'distance': 211.079383264848 }, { 'latitude': 24.1498394012451, 'longitude': 120.626190185547, 'time': '2021-11-10T03:43:13Z', 'elevation': 71.0, 'speed': 12.0, 'heading': 186, 'distance': 200.13035262818 }, { 'latitude': 24.1407871246338, 'longitude': 120.625762939453, 'time': '2021-11-10T03:46:00Z', 'elevation': 59.0, 'speed': 2.0, 'heading': 176, 'distance': 1003.57298562955 }, { 'latitude': 24.1407604217529, 'longitude': 120.62574005127, 'time': '2021-11-10T03:46:15Z', 'elevation': 71.0, 'speed': 0.0, 'heading': 176, 'distance': 3.76290184444981 }, { 'latitude': 24.1375789642334, 'longitude': 120.63240814209, 'time': '2021-11-10T03:49:01Z', 'elevation': 66.0, 'speed': 14.0, 'heading': 131, 'distance': 763.889662783777 }, { 'latitude': 24.1364402770996, 'longitude': 120.634307861328, 'time': '2021-11-10T03:49:17Z', 'elevation': 58.0, 'speed': 13.0, 'heading': 113, 'distance': 230.63409623621 }, { 'latitude': 24.1355495452881, 'longitude': 120.640007019043, 'time': '2021-11-10T03:52:04Z', 'elevation': 122.0, 'speed': 0.0, 'heading': 13, 'distance': 587.629430404848 }, { 'latitude': 24.1355953216553, 'longitude': 120.639739990234, 'time': '2021-11-10T03:52:19Z', 'elevation': 47.0, 'speed': 0.0, 'heading': 312, 'distance': 27.6116154738292 }, { 'latitude': 24.135103225708, 'longitude': 120.638114929199, 'time': '2021-11-10T03:55:05Z', 'elevation': 46.0, 'speed': 6.0, 'heading': 204, 'distance': 173.93965428132 }, { 'latitude': 24.133768081665, 'longitude': 120.637298583984, 'time': '2021-11-10T03:55:20Z', 'elevation': 46.0, 'speed': 11.0, 'heading': 207, 'distance': 169.570283583276 }, { 'latitude': 24.1233615875244, 'longitude': 120.632232666016, 'time': '2021-11-10T03:58:08Z', 'elevation': 45.0, 'speed': 12.0, 'heading': 227, 'distance': 1262.42571694334 }, { 'latitude': 24.1224308013916, 'longitude': 120.631225585938, 'time': '2021-11-10T03:58:23Z', 'elevation': 40.0, 'speed': 2.0, 'heading': 235, 'distance': 145.289063387598 }, { 'latitude': 24.110200881958, 'longitude': 120.627769470215, 'time': '2021-11-10T04:01:10Z', 'elevation': 56.0, 'speed': 1.0, 'heading': 283, 'distance': 1399.40910313178 }, { 'latitude': 24.1102085113525, 'longitude': 120.627471923828, 'time': '2021-11-10T04:01:25Z', 'elevation': 50.0, 'speed': 12.0, 'heading': 277, 'distance': 30.2618347631384 }, { 'latitude': 24.1043605804443, 'longitude': 120.624526977539, 'time': '2021-11-10T04:04:12Z', 'elevation': 48.0, 'speed': 0.0, 'heading': 79, 'distance': 713.56740905675 }, { 'latitude': 24.104024887085, 'longitude': 120.624519348145, 'time': '2021-11-10T04:04:27Z', 'elevation': 39.0, 'speed': 10.0, 'heading': 191, 'distance': 37.1893947011948 }, { 'latitude': 24.0991191864014, 'longitude': 120.632095336914, 'time': '2021-11-10T04:07:13Z', 'elevation': 50.0, 'speed': 14.0, 'heading': 121, 'distance': 942.624068812278 }, { 'latitude': 24.0980453491211, 'longitude': 120.633750915527, 'time': '2021-11-10T04:07:29Z', 'elevation': 33.0, 'speed': 11.0, 'heading': 119, 'distance': 206.109252468801 }, { 'latitude': 24.0866413116455, 'longitude': 120.644302368164, 'time': '2021-11-10T04:10:16Z', 'elevation': 47.0, 'speed': 10.0, 'heading': 171, 'distance': 1657.24738240023 }, { 'latitude': 24.0857353210449, 'longitude': 120.644119262695, 'time': '2021-11-10T04:10:31Z', 'elevation': 50.0, 'speed': 5.0, 'heading': 184, 'distance': 102.059737048456 }, { 'latitude': 24.0683002471924, 'longitude': 120.642143249512, 'time': '2021-11-10T04:13:17Z', 'elevation': 67.0, 'speed': 10.0, 'heading': 187, 'distance': 1941.52369935842 }, { 'latitude': 24.0670909881592, 'longitude': 120.642120361328, 'time': '2021-11-10T04:13:33Z', 'elevation': 52.0, 'speed': 12.0, 'heading': 172, 'distance': 133.956785133244 }, { 'latitude': 24.0502738952637, 'longitude': 120.639152526855, 'time': '2021-11-10T04:16:19Z', 'elevation': 52.0, 'speed': 17.0, 'heading': 226, 'distance': 1886.94434189044 }, { 'latitude': 24.048620223999, 'longitude': 120.637084960938, 'time': '2021-11-10T04:16:35Z', 'elevation': 47.0, 'speed': 18.0, 'heading': 231, 'distance': 278.87709487293 }, { 'latitude': 24.0279388427734, 'longitude': 120.633666992188, 'time': '2021-11-10T04:19:22Z', 'elevation': 53.0, 'speed': 14.0, 'heading': 158, 'distance': 2316.88025335903 }, { 'latitude': 24.0262393951416, 'longitude': 120.634292602539, 'time': '2021-11-10T04:19:37Z', 'elevation': 51.0, 'speed': 14.0, 'heading': 159, 'distance': 198.69691534726 }, { 'latitude': 24.0125980377197, 'longitude': 120.643730163574, 'time': '2021-11-10T04:22:23Z', 'elevation': 67.0, 'speed': 6.0, 'heading': 150, 'distance': 1790.16336220126 }, { 'latitude': 24.011510848999, 'longitude': 120.643699645996, 'time': '2021-11-10T04:22:39Z', 'elevation': 74.0, 'speed': 11.0, 'heading': 180, 'distance': 120.455299092762 }],
    [{ 'latitude': 25.396312713623, 'longitude': 121.987144470215, 'time': '2021-11-09T23:32:43Z', 'elevation': 110.0, 'speed': 24.0, 'heading': 225, 'distance': 0.0 }, { 'latitude': 25.3936195373535, 'longitude': 121.98518371582, 'time': '2021-11-09T23:32:58Z', 'elevation': 133.0, 'speed': 23.0, 'heading': 229, 'distance': 357.684877243078 }, { 'latitude': 25.3905639648438, 'longitude': 121.983703613281, 'time': '2021-11-09T23:33:13Z', 'elevation': 146.0, 'speed': 26.0, 'heading': 208, 'distance': 369.810711852708 }, { 'latitude': 25.3875999450684, 'longitude': 121.982009887695, 'time': '2021-11-09T23:33:28Z', 'elevation': 149.0, 'speed': 24.0, 'heading': 213, 'distance': 369.950664973822 }, { 'latitude': 25.3846817016602, 'longitude': 121.981079101562, 'time': '2021-11-09T23:33:43Z', 'elevation': 171.0, 'speed': 22.0, 'heading': 181, 'distance': 336.575285671031 }, { 'latitude': 25.3813381195068, 'longitude': 121.979911804199, 'time': '2021-11-09T23:33:58Z', 'elevation': 173.0, 'speed': 23.0, 'heading': 198, 'distance': 388.579012118006 }, { 'latitude': 25.3781604766846, 'longitude': 121.978530883789, 'time': '2021-11-09T23:34:13Z', 'elevation': 179.0, 'speed': 24.0, 'heading': 198, 'distance': 378.454398276603 }, { 'latitude': 25.3748359680176, 'longitude': 121.977317810059, 'time': '2021-11-09T23:34:28Z', 'elevation': 186.0, 'speed': 27.0, 'heading': 202, 'distance': 387.99194313957 }, { 'latitude': 25.339729309082, 'longitude': 121.959548950195, 'time': '2021-11-09T23:37:16Z', 'elevation': 216.0, 'speed': 26.0, 'heading': 210, 'distance': 4280.61154386666 }, { 'latitude': 25.3363819122314, 'longitude': 121.95792388916, 'time': '2021-11-09T23:37:31Z', 'elevation': 210.0, 'speed': 28.0, 'heading': 195, 'distance': 405.302622470548 }, { 'latitude': 25.2999362945557, 'longitude': 121.933815002441, 'time': '2021-11-09T23:40:18Z', 'elevation': 136.0, 'speed': 29.0, 'heading': 215, 'distance': 4710.94242262942 }, { 'latitude': 25.2969837188721, 'longitude': 121.931243896484, 'time': '2021-11-09T23:40:33Z', 'elevation': 135.0, 'speed': 26.0, 'heading': 214, 'distance': 417.158723514932 }, { 'latitude': 25.2610893249512, 'longitude': 121.909599304199, 'time': '2021-11-09T23:43:20Z', 'elevation': 131.0, 'speed': 27.0, 'heading': 203, 'distance': 4534.6928774577 }, { 'latitude': 25.2574615478516, 'longitude': 121.908653259277, 'time': '2021-11-09T23:43:35Z', 'elevation': 114.0, 'speed': 27.0, 'heading': 192, 'distance': 413.018989103648 }, { 'latitude': 25.2180824279785, 'longitude': 121.904609680176, 'time': '2021-11-09T23:46:22Z', 'elevation': 120.0, 'speed': 24.0, 'heading': 202, 'distance': 4381.26220785291 }, { 'latitude': 25.2149333953857, 'longitude': 121.903495788574, 'time': '2021-11-09T23:46:37Z', 'elevation': 136.0, 'speed': 25.0, 'heading': 205, 'distance': 366.452798959589 }, { 'latitude': 25.1798305511475, 'longitude': 121.88907623291, 'time': '2021-11-09T23:49:24Z', 'elevation': 188.0, 'speed': 24.0, 'heading': 191, 'distance': 4151.25753587438 }, { 'latitude': 25.1765289306641, 'longitude': 121.888458251953, 'time': '2021-11-09T23:49:39Z', 'elevation': 192.0, 'speed': 25.0, 'heading': 194, 'distance': 371.006119900026 }, { 'latitude': 25.1423988342285, 'longitude': 121.877967834473, 'time': '2021-11-09T23:52:26Z', 'elevation': 213.0, 'speed': 24.0, 'heading': 192, 'distance': 3925.91683807808 }, { 'latitude': 25.1396007537842, 'longitude': 121.87629699707, 'time': '2021-11-09T23:52:41Z', 'elevation': 227.0, 'speed': 23.0, 'heading': 214, 'distance': 352.786686354535 }, { 'latitude': 25.1226997375488, 'longitude': 121.846641540527, 'time': '2021-11-09T23:55:28Z', 'elevation': 296.0, 'speed': 26.0, 'heading': 234, 'distance': 3528.23781875417 }, { 'latitude': 25.1201152801514, 'longitude': 121.844215393066, 'time': '2021-11-09T23:55:43Z', 'elevation': 300.0, 'speed': 26.0, 'heading': 222, 'distance': 376.60456104477 }, { 'latitude': 25.1002979278564, 'longitude': 121.814842224121, 'time': '2021-11-09T23:58:30Z', 'elevation': 241.0, 'speed': 23.0, 'heading': 264, 'distance': 3687.27535140345 }, { 'latitude': 25.1003189086914, 'longitude': 121.811454772949, 'time': '2021-11-09T23:58:45Z', 'elevation': 229.0, 'speed': 22.0, 'heading': 266, 'distance': 341.693243881017 }, { 'latitude': 25.0986003875732, 'longitude': 121.774436950684, 'time': '2021-11-10T00:01:31Z', 'elevation': 178.0, 'speed': 23.0, 'heading': 271, 'distance': 3738.78823594522 }, { 'latitude': 25.0983009338379, 'longitude': 121.770797729492, 'time': '2021-11-10T00:01:47Z', 'elevation': 171.0, 'speed': 24.0, 'heading': 269, 'distance': 368.582154900472 }, { 'latitude': 25.0940589904785, 'longitude': 121.73363494873, 'time': '2021-11-10T00:04:33Z', 'elevation': 92.0, 'speed': 20.0, 'heading': 278, 'distance': 3777.99665189863 }, { 'latitude': 25.0953598022461, 'longitude': 121.730918884277, 'time': '2021-11-10T00:04:49Z', 'elevation': 103.0, 'speed': 19.0, 'heading': 314, 'distance': 309.559150562634 }, { 'latitude': 25.0866146087646, 'longitude': 121.698043823242, 'time': '2021-11-10T00:07:36Z', 'elevation': 76.0, 'speed': 21.0, 'heading': 238, 'distance': 3454.88858489932 }, { 'latitude': 25.0856246948242, 'longitude': 121.695198059082, 'time': '2021-11-10T00:07:51Z', 'elevation': 77.0, 'speed': 22.0, 'heading': 242, 'distance': 307.30980603104 }, { 'latitude': 25.0701103210449, 'longitude': 121.664352416992, 'time': '2021-11-10T00:10:38Z', 'elevation': 83.0, 'speed': 22.0, 'heading': 245, 'distance': 3554.92671970654 }, { 'latitude': 25.0693244934082, 'longitude': 121.661041259766, 'time': '2021-11-10T00:10:53Z', 'elevation': 74.0, 'speed': 22.0, 'heading': 251, 'distance': 345.227704305717 }, { 'latitude': 25.0594844818115, 'longitude': 121.627616882324, 'time': '2021-11-10T00:13:40Z', 'elevation': 73.0, 'speed': 21.0, 'heading': 259, 'distance': 3544.21194485629 }, { 'latitude': 25.0583782196045, 'longitude': 121.624649047852, 'time': '2021-11-10T00:13:55Z', 'elevation': 76.0, 'speed': 23.0, 'heading': 250, 'distance': 323.563873443944 }, { 'latitude': 25.0520267486572, 'longitude': 121.588645935059, 'time': '2021-11-10T00:16:42Z', 'elevation': 55.0, 'speed': 20.0, 'heading': 257, 'distance': 3700.39493834648 }, { 'latitude': 25.0514869689941, 'longitude': 121.585525512695, 'time': '2021-11-10T00:16:57Z', 'elevation': 53.0, 'speed': 20.0, 'heading': 260, 'distance': 320.501797546725 }, { 'latitude': 25.0425338745117, 'longitude': 121.551803588867, 'time': '2021-11-10T00:19:43Z', 'elevation': 40.0, 'speed': 21.0, 'heading': 240, 'distance': 3544.5120812055 }, { 'latitude': 25.0416164398193, 'longitude': 121.549179077148, 'time': '2021-11-10T00:19:58Z', 'elevation': 55.0, 'speed': 18.0, 'heading': 259, 'distance': 283.682904392291 }, { 'latitude': 25.0341758728027, 'longitude': 121.516151428223, 'time': '2021-11-10T00:22:45Z', 'elevation': 51.0, 'speed': 21.0, 'heading': 240, 'distance': 3433.51539866691 }, { 'latitude': 25.032621383667, 'longitude': 121.513488769531, 'time': '2021-11-10T00:23:00Z', 'elevation': 56.0, 'speed': 22.0, 'heading': 240, 'distance': 319.160584992388 }, { 'latitude': 25.0217933654785, 'longitude': 121.482284545898, 'time': '2021-11-10T00:25:48Z', 'elevation': 46.0, 'speed': 20.0, 'heading': 256, 'distance': 3370.05290850659 }, { 'latitude': 25.0209350585938, 'longitude': 121.479354858398, 'time': '2021-11-10T00:26:03Z', 'elevation': 59.0, 'speed': 19.0, 'heading': 249, 'distance': 310.610405153388 }, { 'latitude': 25.0093936920166, 'longitude': 121.445808410645, 'time': '2021-11-10T00:28:49Z', 'elevation': 42.0, 'speed': 22.0, 'heading': 243, 'distance': 3619.41630386684 }, { 'latitude': 25.0078887939453, 'longitude': 121.442802429199, 'time': '2021-11-10T00:29:05Z', 'elevation': 26.0, 'speed': 23.0, 'heading': 238, 'distance': 346.209607502851 }, { 'latitude': 24.9848918914795, 'longitude': 121.418983459473, 'time': '2021-11-10T00:31:51Z', 'elevation': 64.0, 'speed': 25.0, 'heading': 215, 'distance': 3503.06981505399 }, { 'latitude': 24.9821147918701, 'longitude': 121.417213439941, 'time': '2021-11-10T00:32:06Z', 'elevation': 53.0, 'speed': 23.0, 'heading': 213, 'distance': 355.767512215218 }, { 'latitude': 24.9612731933594, 'longitude': 121.390495300293, 'time': '2021-11-10T00:34:54Z', 'elevation': 67.0, 'speed': 21.0, 'heading': 244, 'distance': 3550.80177402022 }, { 'latitude': 24.9600067138672, 'longitude': 121.387603759766, 'time': '2021-11-10T00:35:09Z', 'elevation': 70.0, 'speed': 23.0, 'heading': 242, 'distance': 323.947728877635 }, { 'latitude': 24.9469413757324, 'longitude': 121.35083770752, 'time': '2021-11-10T00:38:11Z', 'elevation': 71.0, 'speed': 21.0, 'heading': 258, 'distance': 3985.03169290579 }, { 'latitude': 24.9325218200684, 'longitude': 121.319564819336, 'time': '2021-11-10T00:40:58Z', 'elevation': 102.0, 'speed': 22.0, 'heading': 234, 'distance': 3539.44654655586 }, { 'latitude': 24.9306526184082, 'longitude': 121.316970825195, 'time': '2021-11-10T00:41:13Z', 'elevation': 104.0, 'speed': 21.0, 'heading': 229, 'distance': 333.946615049436 }, { 'latitude': 24.9090995788574, 'longitude': 121.291679382324, 'time': '2021-11-10T00:43:59Z', 'elevation': 148.0, 'speed': 19.0, 'heading': 236, 'distance': 3496.73223855169 }, { 'latitude': 24.9077014923096, 'longitude': 121.289237976074, 'time': '2021-11-10T00:44:15Z', 'elevation': 190.0, 'speed': 19.0, 'heading': 245, 'distance': 291.233097064348 }, { 'latitude': 24.9065380096436, 'longitude': 121.286590576172, 'time': '2021-11-10T00:47:02Z', 'elevation': 190.0, 'speed': 0.0, 'heading': 294, 'distance': 296.88862143826 }, { 'latitude': 24.9065361022949, 'longitude': 121.286598205566, 'time': '2021-11-10T00:47:17Z', 'elevation': 190.0, 'speed': 0.0, 'heading': 294, 'distance': 0.799197102795724 }, { 'latitude': 24.9065208435059, 'longitude': 121.286598205566, 'time': '2021-11-10T00:50:04Z', 'elevation': 190.0, 'speed': 0.0, 'heading': 287, 'distance': 1.69023889569581 }, { 'latitude': 24.9065418243408, 'longitude': 121.286567687988, 'time': '2021-11-10T00:50:19Z', 'elevation': 190.0, 'speed': 0.0, 'heading': 259, 'distance': 3.86090286085035 }, { 'latitude': 24.9065093994141, 'longitude': 121.286613464355, 'time': '2021-11-10T00:53:06Z', 'elevation': 190.0, 'speed': 0.0, 'heading': 0, 'distance': 5.85555229823255 }, { 'latitude': 24.9065208435059, 'longitude': 121.286605834961, 'time': '2021-11-10T00:53:21Z', 'elevation': 189.0, 'speed': 0.0, 'heading': 0, 'distance': 1.48360625198779 }, { 'latitude': 24.9060859680176, 'longitude': 121.285980224609, 'time': '2021-11-10T00:56:07Z', 'elevation': 189.0, 'speed': 14.0, 'heading': 231, 'distance': 79.4680523153857 }, { 'latitude': 24.9044761657715, 'longitude': 121.28409576416, 'time': '2021-11-10T00:56:22Z', 'elevation': 184.0, 'speed': 9.0, 'heading': 219, 'distance': 260.851302646183 }, { 'latitude': 24.9018363952637, 'longitude': 121.277885437012, 'time': '2021-11-10T00:59:10Z', 'elevation': 213.0, 'speed': 0.0, 'heading': 210, 'distance': 692.217212624234 }, { 'latitude': 24.9018421173096, 'longitude': 121.277885437012, 'time': '2021-11-10T00:59:25Z', 'elevation': 216.0, 'speed': 0.0, 'heading': 210, 'distance': 0.633839187044213 }, { 'latitude': 24.9017963409424, 'longitude': 121.277816772461, 'time': '2021-11-10T01:02:12Z', 'elevation': 216.0, 'speed': 0.0, 'heading': 311, 'distance': 8.59278866884899 }, { 'latitude': 24.9018058776855, 'longitude': 121.277839660645, 'time': '2021-11-10T01:02:27Z', 'elevation': 216.0, 'speed': 0.0, 'heading': 311, 'distance': 2.54225837224571 }, { 'latitude': 24.8947658538818, 'longitude': 121.263626098633, 'time': '2021-11-10T01:05:29Z', 'elevation': 260.0, 'speed': 24.0, 'heading': 247, 'distance': 1634.1201435262 }, { 'latitude': 24.8823776245117, 'longitude': 121.231575012207, 'time': '2021-11-10T01:08:16Z', 'elevation': 325.0, 'speed': 22.0, 'heading': 240, 'distance': 3517.21436649391 }, { 'latitude': 24.881196975708, 'longitude': 121.228469848633, 'time': '2021-11-10T01:08:31Z', 'elevation': 330.0, 'speed': 23.0, 'heading': 249, 'distance': 339.930657211942 }, { 'latitude': 24.8666915893555, 'longitude': 121.195472717285, 'time': '2021-11-10T01:11:17Z', 'elevation': 416.0, 'speed': 22.0, 'heading': 238, 'distance': 3701.39338631501 }, { 'latitude': 24.8648586273193, 'longitude': 121.193077087402, 'time': '2021-11-10T01:11:33Z', 'elevation': 440.0, 'speed': 20.0, 'heading': 213, 'distance': 315.97107580131 }, { 'latitude': 24.8412284851074, 'longitude': 121.161735534668, 'time': '2021-11-10T01:14:19Z', 'elevation': 475.0, 'speed': 25.0, 'heading': 235, 'distance': 4109.21902935331 }, { 'latitude': 24.8394317626953, 'longitude': 121.158332824707, 'time': '2021-11-10T01:14:35Z', 'elevation': 470.0, 'speed': 26.0, 'heading': 251, 'distance': 397.378493557375 }, { 'latitude': 24.8199939727783, 'longitude': 121.120956420898, 'time': '2021-11-10T01:17:22Z', 'elevation': 486.0, 'speed': 26.0, 'heading': 236, 'distance': 4348.76864802764 }, { 'latitude': 24.8178749084473, 'longitude': 121.11784362793, 'time': '2021-11-10T01:17:37Z', 'elevation': 486.0, 'speed': 26.0, 'heading': 237, 'distance': 392.595405661239 }, { 'latitude': 24.794116973877, 'longitude': 121.087539672852, 'time': '2021-11-10T01:20:24Z', 'elevation': 501.0, 'speed': 27.0, 'heading': 232, 'distance': 4039.00975729468 }, { 'latitude': 24.7920608520508, 'longitude': 121.084411621094, 'time': '2021-11-10T01:20:39Z', 'elevation': 493.0, 'speed': 26.0, 'heading': 242, 'distance': 389.770501088029 }, { 'latitude': 24.7654933929443, 'longitude': 121.054039001465, 'time': '2021-11-10T01:23:25Z', 'elevation': 448.0, 'speed': 25.0, 'heading': 211, 'distance': 4253.8341459671 }, { 'latitude': 24.7627429962158, 'longitude': 121.051635742188, 'time': '2021-11-10T01:23:41Z', 'elevation': 434.0, 'speed': 24.0, 'heading': 218, 'distance': 389.744494721567 }, { 'latitude': 24.7330989837646, 'longitude': 121.03148651123, 'time': '2021-11-10T01:26:27Z', 'elevation': 429.0, 'speed': 25.0, 'heading': 226, 'distance': 3864.78350872024 }, { 'latitude': 24.730978012085, 'longitude': 121.028327941895, 'time': '2021-11-10T01:26:43Z', 'elevation': 403.0, 'speed': 25.0, 'heading': 227, 'distance': 396.617357391354 }, { 'latitude': 24.7101383209229, 'longitude': 120.994552612305, 'time': '2021-11-10T01:29:30Z', 'elevation': 410.0, 'speed': 26.0, 'heading': 246, 'distance': 4123.89914170917 }, { 'latitude': 24.7081356048584, 'longitude': 120.99144744873, 'time': '2021-11-10T01:29:45Z', 'elevation': 408.0, 'speed': 26.0, 'heading': 230, 'distance': 384.621929853207 }, { 'latitude': 24.6879367828369, 'longitude': 120.95401763916, 'time': '2021-11-10T01:32:32Z', 'elevation': 375.0, 'speed': 27.0, 'heading': 235, 'distance': 4399.17964990397 }, { 'latitude': 24.6858310699463, 'longitude': 120.95076751709, 'time': '2021-11-10T01:32:47Z', 'elevation': 362.0, 'speed': 25.0, 'heading': 236, 'distance': 403.23261305984 }, { 'latitude': 24.6596717834473, 'longitude': 120.918617248535, 'time': '2021-11-10T01:35:34Z', 'elevation': 364.0, 'speed': 25.0, 'heading': 233, 'distance': 4357.22749839431 }, { 'latitude': 24.6572418212891, 'longitude': 120.915962219238, 'time': '2021-11-10T01:35:49Z', 'elevation': 365.0, 'speed': 25.0, 'heading': 213, 'distance': 380.369272826823 }, { 'latitude': 24.6245174407959, 'longitude': 120.888557434082, 'time': '2021-11-10T01:38:36Z', 'elevation': 357.0, 'speed': 27.0, 'heading': 201, 'distance': 4564.76057981041 }, { 'latitude': 24.6210269927979, 'longitude': 120.887252807617, 'time': '2021-11-10T01:38:51Z', 'elevation': 358.0, 'speed': 28.0, 'heading': 201, 'distance': 408.572650751117 }, { 'latitude': 24.5863952636719, 'longitude': 120.860244750977, 'time': '2021-11-10T01:41:38Z', 'elevation': 328.0, 'speed': 30.0, 'heading': 232, 'distance': 4711.29786268117 }, { 'latitude': 24.5835342407227, 'longitude': 120.857002258301, 'time': '2021-11-10T01:41:53Z', 'elevation': 315.0, 'speed': 30.0, 'heading': 216, 'distance': 456.387810212491 }, { 'latitude': 24.5515232086182, 'longitude': 120.823844909668, 'time': '2021-11-10T01:44:40Z', 'elevation': 288.0, 'speed': 28.0, 'heading': 220, 'distance': 4884.08336226157 }, { 'latitude': 24.5488872528076, 'longitude': 120.82088470459, 'time': '2021-11-10T01:44:55Z', 'elevation': 300.0, 'speed': 27.0, 'heading': 222, 'distance': 418.564636664422 }, { 'latitude': 24.5170364379883, 'longitude': 120.793167114258, 'time': '2021-11-10T01:47:42Z', 'elevation': 328.0, 'speed': 27.0, 'heading': 226, 'distance': 4509.41208561309 }, { 'latitude': 24.5143985748291, 'longitude': 120.790306091309, 'time': '2021-11-10T01:47:57Z', 'elevation': 338.0, 'speed': 27.0, 'heading': 225, 'distance': 411.629092214583 }, { 'latitude': 24.4797306060791, 'longitude': 120.765106201172, 'time': '2021-11-10T01:50:44Z', 'elevation': 472.0, 'speed': 30.0, 'heading': 217, 'distance': 4611.89563768252 }, { 'latitude': 24.4764575958252, 'longitude': 120.762367248535, 'time': '2021-11-10T01:50:59Z', 'elevation': 462.0, 'speed': 28.0, 'heading': 223, 'distance': 456.64404859596 }, { 'latitude': 24.4411220550537, 'longitude': 120.726959228516, 'time': '2021-11-10T01:53:46Z', 'elevation': 437.0, 'speed': 30.0, 'heading': 220, 'distance': 5310.98692380899 }, { 'latitude': 24.4376411437988, 'longitude': 120.724395751953, 'time': '2021-11-10T01:54:01Z', 'elevation': 436.0, 'speed': 31.0, 'heading': 219, 'distance': 465.004627476698 }, { 'latitude': 24.3996639251709, 'longitude': 120.69401550293, 'time': '2021-11-10T01:56:48Z', 'elevation': 358.0, 'speed': 29.0, 'heading': 202, 'distance': 5214.24677994226 }, { 'latitude': 24.3963527679443, 'longitude': 120.69189453125, 'time': '2021-11-10T01:57:03Z', 'elevation': 361.0, 'speed': 28.0, 'heading': 207, 'distance': 425.202930202081 }, { 'latitude': 24.3610858917236, 'longitude': 120.675804138184, 'time': '2021-11-10T01:59:50Z', 'elevation': 377.0, 'speed': 23.0, 'heading': 185, 'distance': 4233.65464499717 }, { 'latitude': 24.3579292297363, 'longitude': 120.675903320312, 'time': '2021-11-10T02:00:05Z', 'elevation': 384.0, 'speed': 22.0, 'heading': 173, 'distance': 349.787543016449 }, { 'latitude': 24.3254489898682, 'longitude': 120.682739257812, 'time': '2021-11-10T02:02:52Z', 'elevation': 390.0, 'speed': 21.0, 'heading': 171, 'distance': 3663.88844399059 }, { 'latitude': 24.32248878479, 'longitude': 120.683433532715, 'time': '2021-11-10T02:03:07Z', 'elevation': 386.0, 'speed': 22.0, 'heading': 177, 'distance': 335.367476911782 }, { 'latitude': 24.2859687805176, 'longitude': 120.674659729004, 'time': '2021-11-10T02:05:54Z', 'elevation': 373.0, 'speed': 25.0, 'heading': 189, 'distance': 4141.94181053749 }, { 'latitude': 24.2826404571533, 'longitude': 120.673843383789, 'time': '2021-11-10T02:06:09Z', 'elevation': 361.0, 'speed': 25.0, 'heading': 194, 'distance': 377.85477184061 }, { 'latitude': 24.2481327056885, 'longitude': 120.671531677246, 'time': '2021-11-10T02:08:55Z', 'elevation': 254.0, 'speed': 22.0, 'heading': 181, 'distance': 3829.351195042 }, { 'latitude': 24.2451171875, 'longitude': 120.671073913574, 'time': '2021-11-10T02:09:11Z', 'elevation': 245.0, 'speed': 22.0, 'heading': 196, 'distance': 337.224025290913 }, { 'latitude': 24.2115421295166, 'longitude': 120.670799255371, 'time': '2021-11-10T02:11:58Z', 'elevation': 194.0, 'speed': 21.0, 'heading': 185, 'distance': 3718.92937543429 }, { 'latitude': 24.2090282440186, 'longitude': 120.669868469238, 'time': '2021-11-10T02:12:13Z', 'elevation': 207.0, 'speed': 19.0, 'heading': 209, 'distance': 294.057889620876 }, { 'latitude': 24.178050994873, 'longitude': 120.66576385498, 'time': '2021-11-10T02:15:00Z', 'elevation': 134.0, 'speed': 22.0, 'heading': 181, 'distance': 3456.32222499543 }, { 'latitude': 24.1749057769775, 'longitude': 120.665412902832, 'time': '2021-11-10T02:15:15Z', 'elevation': 150.0, 'speed': 22.0, 'heading': 183, 'distance': 350.187269628362 }, { 'latitude': 24.1632995605469, 'longitude': 120.673110961914, 'time': '2021-11-10T02:18:01Z', 'elevation': 119.0, 'speed': 0.0, 'heading': 0, 'distance': 1504.81864323535 }, { 'latitude': 24.1632957458496, 'longitude': 120.673217773438, 'time': '2021-11-10T02:18:17Z', 'elevation': 124.0, 'speed': 0.0, 'heading': 168, 'distance': 10.8627240913441 }, { 'latitude': 24.1632595062256, 'longitude': 120.673179626465, 'time': '2021-11-10T02:21:04Z', 'elevation': 123.0, 'speed': 0.0, 'heading': 269, 'distance': 5.5802717916177 }, { 'latitude': 24.163257598877, 'longitude': 120.673179626465, 'time': '2021-11-10T02:21:19Z', 'elevation': 123.0, 'speed': 0.0, 'heading': 269, 'distance': 0.211259045980365 }, { 'latitude': 24.1632404327393, 'longitude': 120.673217773438, 'time': '2021-11-10T02:24:06Z', 'elevation': 123.0, 'speed': 0.0, 'heading': 266, 'distance': 4.31774619173902 }, { 'latitude': 24.1632423400879, 'longitude': 120.673202514648, 'time': '2021-11-10T02:24:21Z', 'elevation': 123.0, 'speed': 0.0, 'heading': 266, 'distance': 1.56495688015653 }, { 'latitude': 24.1632499694824, 'longitude': 120.673309326172, 'time': '2021-11-10T02:27:08Z', 'elevation': 123.0, 'speed': 0.0, 'heading': 0, 'distance': 10.887352007304 }, { 'latitude': 24.163257598877, 'longitude': 120.673271179199, 'time': '2021-11-10T02:27:23Z', 'elevation': 121.0, 'speed': 0.0, 'heading': 0, 'distance': 3.96761339448018 }, { 'latitude': 24.1632404327393, 'longitude': 120.673156738281, 'time': '2021-11-10T02:30:10Z', 'elevation': 121.0, 'speed': 0.0, 'heading': 137, 'distance': 11.7842269662402 }, { 'latitude': 24.1632537841797, 'longitude': 120.67317199707, 'time': '2021-11-10T02:30:25Z', 'elevation': 121.0, 'speed': 0.0, 'heading': 137, 'distance': 2.142743167135 }, { 'latitude': 24.1631374359131, 'longitude': 120.673217773438, 'time': '2021-11-10T02:33:12Z', 'elevation': 121.0, 'speed': 0.0, 'heading': 0, 'distance': 13.7007230011205 }, { 'latitude': 24.1632270812988, 'longitude': 120.673210144043, 'time': '2021-11-10T02:33:27Z', 'elevation': 121.0, 'speed': 0.0, 'heading': 0, 'distance': 9.95939923625742 }, { 'latitude': 24.1632862091064, 'longitude': 120.673133850098, 'time': '2021-11-10T02:36:14Z', 'elevation': 121.0, 'speed': 0.0, 'heading': 101, 'distance': 10.1490005435481 }, { 'latitude': 24.1632843017578, 'longitude': 120.673118591309, 'time': '2021-11-10T02:36:29Z', 'elevation': 122.0, 'speed': 0.0, 'heading': 101, 'distance': 1.56495635542563 }, { 'latitude': 24.1632175445557, 'longitude': 120.673233032227, 'time': '2021-11-10T02:39:16Z', 'elevation': 123.0, 'speed': 0.0, 'heading': 186, 'distance': 13.7813337923001 }, { 'latitude': 24.1632766723633, 'longitude': 120.673210144043, 'time': '2021-11-10T02:39:31Z', 'elevation': 123.0, 'speed': 0.0, 'heading': 186, 'distance': 6.94980814361211 }, { 'latitude': 24.1633720397949, 'longitude': 120.673347473145, 'time': '2021-11-10T02:42:18Z', 'elevation': 123.0, 'speed': 0.0, 'heading': 251, 'distance': 17.5025705089197 }, { 'latitude': 24.1633052825928, 'longitude': 120.673271179199, 'time': '2021-11-10T02:42:33Z', 'elevation': 122.0, 'speed': 0.0, 'heading': 251, 'distance': 10.7137555489702 }, { 'latitude': 24.1631965637207, 'longitude': 120.673233032227, 'time': '2021-11-10T02:45:19Z', 'elevation': 122.0, 'speed': 0.0, 'heading': 213, 'distance': 12.6503750916956 }, { 'latitude': 24.1633338928223, 'longitude': 120.67325592041, 'time': '2021-11-10T02:45:35Z', 'elevation': 123.0, 'speed': 0.0, 'heading': 213, 'distance': 15.3874606923277 }, { 'latitude': 24.1633644104004, 'longitude': 120.673233032227, 'time': '2021-11-10T02:48:22Z', 'elevation': 122.0, 'speed': 0.0, 'heading': 12, 'distance': 4.10309686333001 }, { 'latitude': 24.1632995605469, 'longitude': 120.673202514648, 'time': '2021-11-10T02:48:37Z', 'elevation': 122.0, 'speed': 0.0, 'heading': 200, 'distance': 7.82371718874691 }, { 'latitude': 24.1633586883545, 'longitude': 120.673217773438, 'time': '2021-11-10T02:51:24Z', 'elevation': 122.0, 'speed': 0.0, 'heading': 286, 'distance': 6.73010080084852 }, { 'latitude': 24.1632957458496, 'longitude': 120.673217773438, 'time': '2021-11-10T02:51:39Z', 'elevation': 121.0, 'speed': 0.0, 'heading': 144, 'distance': 6.97154858981353 }, { 'latitude': 24.1633358001709, 'longitude': 120.673149108887, 'time': '2021-11-10T02:54:25Z', 'elevation': 120.0, 'speed': 0.0, 'heading': 229, 'distance': 8.26875150262021 }, { 'latitude': 24.1633338928223, 'longitude': 120.673248291016, 'time': '2021-11-10T02:54:41Z', 'elevation': 121.0, 'speed': 0.0, 'heading': 229, 'distance': 10.0813929423378 }, { 'latitude': 24.1633968353271, 'longitude': 120.673187255859, 'time': '2021-11-10T02:57:28Z', 'elevation': 119.0, 'speed': 0.0, 'heading': 253, 'distance': 9.33133272050953 }, { 'latitude': 24.1633739471436, 'longitude': 120.67317199707, 'time': '2021-11-10T02:57:43Z', 'elevation': 119.0, 'speed': 0.0, 'heading': 253, 'distance': 2.9717385232433 }, { 'latitude': 24.1631374359131, 'longitude': 120.67455291748, 'time': '2021-11-10T03:06:33Z', 'elevation': 132.0, 'speed': 1.0, 'heading': 170, 'distance': 142.757362407087 }, { 'latitude': 24.1631603240967, 'longitude': 120.674514770508, 'time': '2021-11-10T03:06:49Z', 'elevation': 128.0, 'speed': 0.0, 'heading': 66, 'distance': 4.63191857291173 }, { 'latitude': 24.1557540893555, 'longitude': 120.69441986084, 'time': '2021-11-10T03:12:37Z', 'elevation': 113.0, 'speed': 4.0, 'heading': 169, 'distance': 2182.8753628571 }, { 'latitude': 24.1541557312012, 'longitude': 120.694541931152, 'time': '2021-11-10T03:12:52Z', 'elevation': 99.0, 'speed': 13.0, 'heading': 179, 'distance': 177.469037551181 }, { 'latitude': 24.144193649292, 'longitude': 120.704605102539, 'time': '2021-11-10T03:21:44Z', 'elevation': 116.0, 'speed': 0.0, 'heading': 350, 'distance': 1504.50719747463 }, { 'latitude': 24.1442394256592, 'longitude': 120.70458984375, 'time': '2021-11-10T03:21:59Z', 'elevation': 137.0, 'speed': 0.0, 'heading': 294, 'distance': 5.3020887478461 }, { 'latitude': 24.1448802947998, 'longitude': 120.703926086426, 'time': '2021-11-10T03:24:45Z', 'elevation': 137.0, 'speed': 0.0, 'heading': 65, 'distance': 97.9275248902936 }, { 'latitude': 24.1437015533447, 'longitude': 120.704643249512, 'time': '2021-11-10T03:25:00Z', 'elevation': 137.0, 'speed': 0.0, 'heading': 96, 'distance': 149.527360087094 }, { 'latitude': 24.1443195343018, 'longitude': 120.704597473145, 'time': '2021-11-10T03:27:48Z', 'elevation': 137.0, 'speed': 0.0, 'heading': 95, 'distance': 68.6057012426756 }, { 'latitude': 24.1443309783936, 'longitude': 120.704383850098, 'time': '2021-11-10T03:28:03Z', 'elevation': 137.0, 'speed': 0.0, 'heading': 306, 'distance': 21.7491816850762 }, { 'latitude': 24.1444072723389, 'longitude': 120.704818725586, 'time': '2021-11-10T03:30:49Z', 'elevation': 137.0, 'speed': 0.0, 'heading': 125, 'distance': 45.0003871925598 }, { 'latitude': 24.1443653106689, 'longitude': 120.704734802246, 'time': '2021-11-10T03:31:05Z', 'elevation': 137.0, 'speed': 0.0, 'heading': 299, 'distance': 9.713824547854 }, { 'latitude': 24.1445999145508, 'longitude': 120.704399108887, 'time': '2021-11-10T03:33:51Z', 'elevation': 137.0, 'speed': 0.0, 'heading': 18, 'distance': 42.8873668003686 }, { 'latitude': 24.1443996429443, 'longitude': 120.704467773438, 'time': '2021-11-10T03:34:07Z', 'elevation': 137.0, 'speed': 0.0, 'heading': 113, 'distance': 23.2540767707938 }, { 'latitude': 24.1442546844482, 'longitude': 120.704452514648, 'time': '2021-11-10T03:37:09Z', 'elevation': 137.0, 'speed': 0.0, 'heading': 169, 'distance': 16.1303747796283 }, { 'latitude': 24.1443309783936, 'longitude': 120.704750061035, 'time': '2021-11-10T03:39:55Z', 'elevation': 136.0, 'speed': 0.0, 'heading': 0, 'distance': 31.4004458092734 }, { 'latitude': 24.14426612854, 'longitude': 120.704582214355, 'time': '2021-11-10T03:40:11Z', 'elevation': 137.0, 'speed': 0.0, 'heading': 154, 'distance': 18.5100626079368 }, { 'latitude': 24.1441078186035, 'longitude': 120.70418548584, 'time': '2021-11-10T03:42:58Z', 'elevation': 137.0, 'speed': 0.0, 'heading': 191, 'distance': 43.9702102908073 }, { 'latitude': 24.1441783905029, 'longitude': 120.704444885254, 'time': '2021-11-10T03:43:13Z', 'elevation': 137.0, 'speed': 0.0, 'heading': 242, 'distance': 27.4991811107906 }, { 'latitude': 24.1444396972656, 'longitude': 120.704368591309, 'time': '2021-11-10T03:46:00Z', 'elevation': 137.0, 'speed': 0.0, 'heading': 110, 'distance': 29.9632053495956 }, { 'latitude': 24.1443481445312, 'longitude': 120.704551696777, 'time': '2021-11-10T03:46:15Z', 'elevation': 136.0, 'speed': 0.0, 'heading': 129, 'distance': 21.1937980522141 }, { 'latitude': 24.1443252563477, 'longitude': 120.70450592041, 'time': '2021-11-10T03:49:01Z', 'elevation': 136.0, 'speed': 0.0, 'heading': 79, 'distance': 5.29841951409101 }, { 'latitude': 24.1442699432373, 'longitude': 120.704299926758, 'time': '2021-11-10T03:49:17Z', 'elevation': 136.0, 'speed': 0.0, 'heading': 97, 'distance': 21.8147381904188 }, { 'latitude': 24.144552230835, 'longitude': 120.704063415527, 'time': '2021-11-10T03:52:18Z', 'elevation': 105.0, 'speed': 0.0, 'heading': 128, 'distance': 39.4389261167987 }, { 'latitude': 24.1440734863281, 'longitude': 120.704650878906, 'time': '2021-11-10T03:55:20Z', 'elevation': 105.0, 'speed': 0.0, 'heading': 290, 'distance': 79.8552502381112 }, { 'latitude': 24.1441898345947, 'longitude': 120.704444885254, 'time': '2021-11-10T03:58:27Z', 'elevation': 105.0, 'speed': 0.0, 'heading': 321, 'distance': 24.5849302626636 }, { 'latitude': 24.1435413360596, 'longitude': 120.704711914062, 'time': '2021-11-10T04:01:13Z', 'elevation': 105.0, 'speed': 0.0, 'heading': 70, 'distance': 76.7844099112659 }, { 'latitude': 24.1438598632812, 'longitude': 120.706192016602, 'time': '2021-11-10T04:01:29Z', 'elevation': 105.0, 'speed': 0.0, 'heading': 133, 'distance': 154.516944198724 }, { 'latitude': 24.1441287994385, 'longitude': 120.70450592041, 'time': '2021-11-10T04:04:30Z', 'elevation': 105.0, 'speed': 0.0, 'heading': 65, 'distance': 173.941369832359 }, { 'latitude': 24.1442584991455, 'longitude': 120.704895019531, 'time': '2021-11-10T04:07:32Z', 'elevation': 91.0, 'speed': 0.0, 'heading': 83, 'distance': 42.0756193984639 }, { 'latitude': 24.1443557739258, 'longitude': 120.70442199707, 'time': '2021-11-10T04:10:34Z', 'elevation': 88.0, 'speed': 0.0, 'heading': 285, 'distance': 49.2695230079549 }, { 'latitude': 24.1443920135498, 'longitude': 120.704467773438, 'time': '2021-11-10T04:13:21Z', 'elevation': 110.0, 'speed': 0.0, 'heading': 120, 'distance': 6.14475242967577 }, { 'latitude': 24.1442737579346, 'longitude': 120.704490661621, 'time': '2021-11-10T04:13:37Z', 'elevation': 105.0, 'speed': 0.0, 'heading': 130, 'distance': 13.3030062204617 }, { 'latitude': 24.1442031860352, 'longitude': 120.704452514648, 'time': '2021-11-10T04:16:24Z', 'elevation': 108.0, 'speed': 0.0, 'heading': 66, 'distance': 8.7253086320365 }, { 'latitude': 24.1441478729248, 'longitude': 120.704498291016, 'time': '2021-11-10T04:16:39Z', 'elevation': 108.0, 'speed': 0.0, 'heading': 188, 'distance': 7.69288800754022 }, { 'latitude': 24.1441841125488, 'longitude': 120.70458984375, 'time': '2021-11-10T04:19:40Z', 'elevation': 108.0, 'speed': 0.0, 'heading': 189, 'distance': 10.1340559390519 }, { 'latitude': 24.1440296173096, 'longitude': 120.704734802246, 'time': '2021-11-10T04:25:49Z', 'elevation': 109.0, 'speed': 0.0, 'heading': 114, 'distance': 22.5807216574323 }, { 'latitude': 24.1441593170166, 'longitude': 120.70435333252, 'time': '2021-11-10T04:37:57Z', 'elevation': 117.0, 'speed': 0.0, 'heading': 87, 'distance': 41.3476541899467 }, { 'latitude': 24.144100189209, 'longitude': 120.704360961914, 'time': '2021-11-10T04:40:44Z', 'elevation': 118.0, 'speed': 0.0, 'heading': 105, 'distance': 6.59476143744358 }, { 'latitude': 24.1440753936768, 'longitude': 120.704345703125, 'time': '2021-11-10T04:40:59Z', 'elevation': 119.0, 'speed': 0.0, 'heading': 105, 'distance': 3.15399330118569 }, { 'latitude': 24.1441459655762, 'longitude': 120.70467376709, 'time': '2021-11-10T04:43:46Z', 'elevation': 119.0, 'speed': 0.0, 'heading': 111, 'distance': 34.2477517965234 }, { 'latitude': 24.1441459655762, 'longitude': 120.704666137695, 'time': '2021-11-10T04:44:01Z', 'elevation': 119.0, 'speed': 0.0, 'heading': 97, 'distance': 0.775431242317335 }, { 'latitude': 24.1440773010254, 'longitude': 120.704536437988, 'time': '2021-11-10T04:46:48Z', 'elevation': 119.0, 'speed': 0.0, 'heading': 137, 'distance': 15.2189796382512 }, { 'latitude': 24.1442470550537, 'longitude': 120.704582214355, 'time': '2021-11-10T04:47:03Z', 'elevation': 119.0, 'speed': 0.0, 'heading': 270, 'distance': 19.369100968105 }, { 'latitude': 24.1441402435303, 'longitude': 120.704551696777, 'time': '2021-11-10T04:49:49Z', 'elevation': 119.0, 'speed': 0.0, 'heading': 151, 'distance': 12.2303261469216 }, { 'latitude': 24.1441516876221, 'longitude': 120.704483032227, 'time': '2021-11-10T04:50:05Z', 'elevation': 119.0, 'speed': 0.0, 'heading': 247, 'distance': 7.09305776402311 }, { 'latitude': 24.1442756652832, 'longitude': 120.704689025879, 'time': '2021-11-10T04:52:51Z', 'elevation': 119.0, 'speed': 0.0, 'heading': 0, 'distance': 25.0382076396584 }, { 'latitude': 24.1440887451172, 'longitude': 120.704643249512, 'time': '2021-11-10T04:53:06Z', 'elevation': 119.0, 'speed': 0.0, 'heading': 123, 'distance': 21.2196755234266 }, { 'latitude': 24.1440334320068, 'longitude': 120.704566955566, 'time': '2021-11-10T04:56:09Z', 'elevation': 91.0, 'speed': 0.0, 'heading': 86, 'distance': 9.88252708902913 }, { 'latitude': 24.1439456939697, 'longitude': 120.704460144043, 'time': '2021-11-10T04:59:10Z', 'elevation': 166.0, 'speed': 0.0, 'heading': 213, 'distance': 14.5702809580319 }, { 'latitude': 24.1438636779785, 'longitude': 120.704833984375, 'time': '2021-11-10T05:02:11Z', 'elevation': 201.0, 'speed': 0.0, 'heading': 0, 'distance': 39.0673140639122 }, { 'latitude': 24.1439628601074, 'longitude': 120.704727172852, 'time': '2021-11-10T05:11:17Z', 'elevation': 135.0, 'speed': 0.0, 'heading': 101, 'distance': 15.4446028876178 }, { 'latitude': 24.1442222595215, 'longitude': 120.704582214355, 'time': '2021-11-10T05:17:21Z', 'elevation': 83.0, 'speed': 0.0, 'heading': 132, 'distance': 32.2885429089088 }, { 'latitude': 24.1447601318359, 'longitude': 120.704597473145, 'time': '2021-11-10T05:20:07Z', 'elevation': 85.0, 'speed': 0.0, 'heading': 0, 'distance': 59.5950871741272 }, { 'latitude': 24.1444244384766, 'longitude': 120.704559326172, 'time': '2021-11-10T05:20:28Z', 'elevation': 85.0, 'speed': 0.0, 'heading': 123, 'distance': 37.3831013748184 }, { 'latitude': 24.1443538665771, 'longitude': 120.704391479492, 'time': '2021-11-10T05:23:29Z', 'elevation': 85.0, 'speed': 0.0, 'heading': 172, 'distance': 18.765080165787 }, { 'latitude': 24.1443672180176, 'longitude': 120.704597473145, 'time': '2021-11-10T05:26:15Z', 'elevation': 87.0, 'speed': 0.0, 'heading': 0, 'distance': 20.9889324182546 }, { 'latitude': 24.1440963745117, 'longitude': 120.704483032227, 'time': '2021-11-10T05:26:30Z', 'elevation': 105.0, 'speed': 0.0, 'heading': 0, 'distance': 32.1747661685647 }, { 'latitude': 24.1438312530518, 'longitude': 120.704292297363, 'time': '2021-11-10T05:29:18Z', 'elevation': 95.0, 'speed': 0.0, 'heading': 174, 'distance': 35.1868544623512 }, { 'latitude': 24.143726348877, 'longitude': 120.704277038574, 'time': '2021-11-10T05:29:33Z', 'elevation': 75.0, 'speed': 0.0, 'heading': 159, 'distance': 11.7222614103461 }, { 'latitude': 24.1439399719238, 'longitude': 120.704536437988, 'time': '2021-11-10T05:32:19Z', 'elevation': 76.0, 'speed': 1.0, 'heading': 205, 'distance': 35.4252779603926 }, { 'latitude': 24.1439800262451, 'longitude': 120.704666137695, 'time': '2021-11-10T05:32:35Z', 'elevation': 77.0, 'speed': 1.0, 'heading': 71, 'distance': 13.9089526215159 }, { 'latitude': 24.1440715789795, 'longitude': 120.704566955566, 'time': '2021-11-10T05:35:22Z', 'elevation': 76.0, 'speed': 0.0, 'heading': 160, 'distance': 14.2985412166123 }, { 'latitude': 24.1442337036133, 'longitude': 120.704536437988, 'time': '2021-11-10T05:35:37Z', 'elevation': 76.0, 'speed': 1.0, 'heading': 13, 'distance': 18.2228870225217 }, { 'latitude': 24.1442699432373, 'longitude': 120.704711914062, 'time': '2021-11-10T05:38:23Z', 'elevation': 76.0, 'speed': 0.0, 'heading': 149, 'distance': 18.2811443588378 }, { 'latitude': 24.1442050933838, 'longitude': 120.705024719238, 'time': '2021-11-10T05:38:38Z', 'elevation': 76.0, 'speed': 0.0, 'heading': 108, 'distance': 32.5941916648307 }, { 'latitude': 24.1440467834473, 'longitude': 120.704322814941, 'time': '2021-11-10T05:41:25Z', 'elevation': 108.0, 'speed': 0.0, 'heading': 197, 'distance': 73.4635089924054 }, { 'latitude': 24.1441116333008, 'longitude': 120.704360961914, 'time': '2021-11-10T05:41:40Z', 'elevation': 98.0, 'speed': 0.0, 'heading': 202, 'distance': 8.16240291226067 }, { 'latitude': 24.1441688537598, 'longitude': 120.704711914062, 'time': '2021-11-10T05:44:26Z', 'elevation': 99.0, 'speed': 1.0, 'heading': 81, 'distance': 36.2287780022084 }, { 'latitude': 24.1442737579346, 'longitude': 120.704551696777, 'time': '2021-11-10T05:44:42Z', 'elevation': 98.0, 'speed': 0.0, 'heading': 68, 'distance': 20.004513032281 }, { 'latitude': 24.1440868377686, 'longitude': 120.704742431641, 'time': '2021-11-10T05:47:28Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 37, 'distance': 28.3626908190851 }, { 'latitude': 24.1441402435303, 'longitude': 120.70450592041, 'time': '2021-11-10T05:47:44Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 304, 'distance': 24.755655869365 }, { 'latitude': 24.1438770294189, 'longitude': 120.704345703125, 'time': '2021-11-10T05:50:45Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 296, 'distance': 33.3932917940615 }, { 'latitude': 24.1440296173096, 'longitude': 120.704666137695, 'time': '2021-11-10T05:53:47Z', 'elevation': 93.0, 'speed': 0.0, 'heading': 116, 'distance': 36.6924330873211 }, { 'latitude': 24.1441459655762, 'longitude': 120.704658508301, 'time': '2021-11-10T05:56:34Z', 'elevation': 93.0, 'speed': 0.0, 'heading': 306, 'distance': 12.9100782782896 }, { 'latitude': 24.1441230773926, 'longitude': 120.704666137695, 'time': '2021-11-10T05:56:49Z', 'elevation': 93.0, 'speed': 0.0, 'heading': 289, 'distance': 2.6510444925888 }, { 'latitude': 24.1382713317871, 'longitude': 120.705429077148, 'time': '2021-11-10T05:59:36Z', 'elevation': 38.0, 'speed': 17.0, 'heading': 189, 'distance': 652.763285434694 }, { 'latitude': 24.137809753418, 'longitude': 120.705451965332, 'time': '2021-11-10T05:59:51Z', 'elevation': 64.0, 'speed': 0.0, 'heading': 168, 'distance': 51.1774240503096 }, { 'latitude': 24.1320991516113, 'longitude': 120.705429077148, 'time': '2021-11-10T06:02:37Z', 'elevation': 68.0, 'speed': 3.0, 'heading': 180, 'distance': 632.511517872799 }, { 'latitude': 24.1305751800537, 'longitude': 120.705055236816, 'time': '2021-11-10T06:02:53Z', 'elevation': 55.0, 'speed': 2.0, 'heading': 161, 'distance': 173.019825530325 }, { 'latitude': 24.1290588378906, 'longitude': 120.708862304688, 'time': '2021-11-10T06:05:40Z', 'elevation': 76.0, 'speed': 0.0, 'heading': 107, 'distance': 421.859796411261 }, { 'latitude': 24.1290454864502, 'longitude': 120.708862304688, 'time': '2021-11-10T06:05:55Z', 'elevation': 78.0, 'speed': 0.0, 'heading': 113, 'distance': 1.4788066977616 }, { 'latitude': 24.1291675567627, 'longitude': 120.707443237305, 'time': '2021-11-10T06:08:42Z', 'elevation': 78.0, 'speed': 0.0, 'heading': 295, 'distance': 144.880464416773 }, { 'latitude': 24.1289920806885, 'longitude': 120.707038879395, 'time': '2021-11-10T06:08:57Z', 'elevation': 78.0, 'speed': 7.0, 'heading': 206, 'distance': 45.4665163639703 }, { 'latitude': 24.1104297637939, 'longitude': 120.699493408203, 'time': '2021-11-10T06:11:44Z', 'elevation': 71.0, 'speed': 5.0, 'heading': 205, 'distance': 2194.39000737243 }, { 'latitude': 24.110387802124, 'longitude': 120.699462890625, 'time': '2021-11-10T06:11:59Z', 'elevation': 49.0, 'speed': 0.0, 'heading': 174, 'distance': 5.58807233010127 }, { 'latitude': 24.1009731292725, 'longitude': 120.69450378418, 'time': '2021-11-10T06:14:45Z', 'elevation': 42.0, 'speed': 1.0, 'heading': 158, 'distance': 1158.25948928603 }, { 'latitude': 24.101016998291, 'longitude': 120.694557189941, 'time': '2021-11-10T06:15:01Z', 'elevation': 30.0, 'speed': 0.0, 'heading': 158, 'distance': 7.28644243889928 }, { 'latitude': 24.0966377258301, 'longitude': 120.689514160156, 'time': '2021-11-10T06:18:02Z', 'elevation': 50.0, 'speed': 14.0, 'heading': 211, 'distance': 705.816760887968 }, { 'latitude': 24.0703258514404, 'longitude': 120.689964294434, 'time': '2021-11-10T06:20:49Z', 'elevation': 55.0, 'speed': 20.0, 'heading': 160, 'distance': 2914.6475445774 }, { 'latitude': 24.0674877166748, 'longitude': 120.690330505371, 'time': '2021-11-10T06:21:04Z', 'elevation': 53.0, 'speed': 22.0, 'heading': 182, 'distance': 316.548069254332 }, { 'latitude': 24.0323715209961, 'longitude': 120.672424316406, 'time': '2021-11-10T06:24:06Z', 'elevation': 85.0, 'speed': 28.0, 'heading': 213, 'distance': 4294.73598538706 }, { 'latitude': 24.007905960083, 'longitude': 120.649925231934, 'time': '2021-11-10T06:27:08Z', 'elevation': 64.0, 'speed': 0.0, 'heading': 256, 'distance': 3547.14118422216 }, { 'latitude': 24.0110778808594, 'longitude': 120.644035339355, 'time': '2021-11-10T06:29:54Z', 'elevation': 64.0, 'speed': 9.0, 'heading': 176, 'distance': 694.650734727903 }, { 'latitude': 24.0103302001953, 'longitude': 120.643798828125, 'time': '2021-11-10T06:30:10Z', 'elevation': 51.0, 'speed': 4.0, 'heading': 175, 'distance': 86.237226812721 }],
    [{ 'latitude': 25.4098091125488, 'longitude': 121.99340057373, 'time': '2021-11-09T23:31:45Z', 'elevation': 16.0, 'speed': 16.0, 'heading': 185, 'distance': 0.0 }, { 'latitude': 25.4077014923096, 'longitude': 121.993598937988, 'time': '2021-11-09T23:32:01Z', 'elevation': 32.0, 'speed': 17.0, 'heading': 181, 'distance': 234.331549957714 }, { 'latitude': 25.4059600830078, 'longitude': 121.993507385254, 'time': '2021-11-09T23:32:16Z', 'elevation': 30.0, 'speed': 10.0, 'heading': 104, 'distance': 193.131349055015 }, { 'latitude': 25.4053077697754, 'longitude': 121.992248535156, 'time': '2021-11-09T23:32:31Z', 'elevation': 34.0, 'speed': 7.0, 'heading': 341, 'distance': 145.824539422704 }, { 'latitude': 25.4055881500244, 'longitude': 121.99333190918, 'time': '2021-11-09T23:32:46Z', 'elevation': 45.0, 'speed': 7.0, 'heading': 15, 'distance': 113.343919691453 }, { 'latitude': 25.406156539917, 'longitude': 121.991653442383, 'time': '2021-11-09T23:33:01Z', 'elevation': 61.0, 'speed': 20.0, 'heading': 218, 'distance': 180.236785371595 }, { 'latitude': 25.4040489196777, 'longitude': 121.99015045166, 'time': '2021-11-09T23:33:16Z', 'elevation': 89.0, 'speed': 20.0, 'heading': 200, 'distance': 278.176437616175 }, { 'latitude': 25.4015197753906, 'longitude': 121.98876953125, 'time': '2021-11-09T23:33:31Z', 'elevation': 122.0, 'speed': 23.0, 'heading': 212, 'distance': 312.737185674844 }, { 'latitude': 25.3995819091797, 'longitude': 121.986404418945, 'time': '2021-11-09T23:33:46Z', 'elevation': 151.0, 'speed': 21.0, 'heading': 242, 'distance': 320.497959417522 }, { 'latitude': 25.3974018096924, 'longitude': 121.983932495117, 'time': '2021-11-09T23:34:01Z', 'elevation': 181.0, 'speed': 24.0, 'heading': 206, 'distance': 346.688916023655 }, { 'latitude': 25.394495010376, 'longitude': 121.982131958008, 'time': '2021-11-09T23:34:16Z', 'elevation': 209.0, 'speed': 25.0, 'heading': 211, 'distance': 369.481926880108 }, { 'latitude': 25.3912506103516, 'longitude': 121.980484008789, 'time': '2021-11-09T23:34:31Z', 'elevation': 218.0, 'speed': 26.0, 'heading': 197, 'distance': 395.821731414692 }, { 'latitude': 25.3536891937256, 'longitude': 121.967765808105, 'time': '2021-11-09T23:37:18Z', 'elevation': 234.0, 'speed': 29.0, 'heading': 204, 'distance': 4353.42421890475 }, { 'latitude': 25.3501567840576, 'longitude': 121.966239929199, 'time': '2021-11-09T23:37:34Z', 'elevation': 214.0, 'speed': 28.0, 'heading': 197, 'distance': 420.37866508025 }, { 'latitude': 25.3162975311279, 'longitude': 121.944114685059, 'time': '2021-11-09T23:40:20Z', 'elevation': 118.0, 'speed': 26.0, 'heading': 237, 'distance': 4362.40802536633 }, { 'latitude': 25.3137359619141, 'longitude': 121.941032409668, 'time': '2021-11-09T23:40:36Z', 'elevation': 131.0, 'speed': 26.0, 'heading': 219, 'distance': 420.528631843344 }, { 'latitude': 25.2799167633057, 'longitude': 121.918144226074, 'time': '2021-11-09T23:43:23Z', 'elevation': 142.0, 'speed': 26.0, 'heading': 201, 'distance': 4398.68825381195 }, { 'latitude': 25.2764854431152, 'longitude': 121.91667175293, 'time': '2021-11-09T23:43:38Z', 'elevation': 139.0, 'speed': 26.0, 'heading': 209, 'distance': 408.020306091072 }, { 'latitude': 25.2411231994629, 'longitude': 121.898147583008, 'time': '2021-11-09T23:46:24Z', 'elevation': 61.0, 'speed': 25.0, 'heading': 212, 'distance': 4339.07932994866 }, { 'latitude': 25.2377166748047, 'longitude': 121.896614074707, 'time': '2021-11-09T23:46:40Z', 'elevation': 66.0, 'speed': 26.0, 'heading': 194, 'distance': 407.768187903681 }, { 'latitude': 25.2042713165283, 'longitude': 121.873916625977, 'time': '2021-11-09T23:49:26Z', 'elevation': 37.0, 'speed': 24.0, 'heading': 204, 'distance': 4354.06768368712 }, { 'latitude': 25.2012634277344, 'longitude': 121.872085571289, 'time': '2021-11-09T23:49:42Z', 'elevation': 21.0, 'speed': 25.0, 'heading': 209, 'distance': 380.891804142731 }, { 'latitude': 25.1745491027832, 'longitude': 121.846099853516, 'time': '2021-11-09T23:52:29Z', 'elevation': 20.0, 'speed': 24.0, 'heading': 224, 'distance': 3951.95514226954 }, { 'latitude': 25.1722660064697, 'longitude': 121.843612670898, 'time': '2021-11-09T23:52:44Z', 'elevation': 18.0, 'speed': 23.0, 'heading': 234, 'distance': 356.12978261052 }, { 'latitude': 25.1501846313477, 'longitude': 121.820762634277, 'time': '2021-11-09T23:55:30Z', 'elevation': 33.0, 'speed': 20.0, 'heading': 206, 'distance': 3360.09944393184 }, { 'latitude': 25.1480445861816, 'longitude': 121.818977355957, 'time': '2021-11-09T23:55:46Z', 'elevation': 31.0, 'speed': 19.0, 'heading': 219, 'distance': 297.65976381886 }, { 'latitude': 25.1317005157471, 'longitude': 121.799156188965, 'time': '2021-11-09T23:58:33Z', 'elevation': 109.0, 'speed': 18.0, 'heading': 222, 'distance': 2696.78917145029 }, { 'latitude': 25.1297225952148, 'longitude': 121.797378540039, 'time': '2021-11-09T23:58:48Z', 'elevation': 120.0, 'speed': 18.0, 'heading': 208, 'distance': 283.093423144824 }, { 'latitude': 25.1161975860596, 'longitude': 121.775146484375, 'time': '2021-11-10T00:01:35Z', 'elevation': 214.0, 'speed': 17.0, 'heading': 249, 'distance': 2696.60055370848 }, { 'latitude': 25.1153087615967, 'longitude': 121.772842407227, 'time': '2021-11-10T00:01:50Z', 'elevation': 213.0, 'speed': 16.0, 'heading': 252, 'distance': 252.376569458793 }, { 'latitude': 25.1033782958984, 'longitude': 121.75218963623, 'time': '2021-11-10T00:04:37Z', 'elevation': 214.0, 'speed': 14.0, 'heading': 246, 'distance': 2466.92157448078 }, { 'latitude': 25.1024684906006, 'longitude': 121.750389099121, 'time': '2021-11-10T00:04:52Z', 'elevation': 210.0, 'speed': 14.0, 'heading': 226, 'distance': 207.702687238412 }, { 'latitude': 25.0951347351074, 'longitude': 121.726425170898, 'time': '2021-11-10T00:07:39Z', 'elevation': 180.0, 'speed': 15.0, 'heading': 283, 'distance': 2550.08736462774 }, { 'latitude': 25.0950946807861, 'longitude': 121.724311828613, 'time': '2021-11-10T00:07:54Z', 'elevation': 177.0, 'speed': 14.0, 'heading': 265, 'distance': 213.223727427402 }, { 'latitude': 25.0878028869629, 'longitude': 121.700164794922, 'time': '2021-11-10T00:10:41Z', 'elevation': 132.0, 'speed': 14.0, 'heading': 243, 'distance': 2566.27250483726 }, { 'latitude': 25.0869655609131, 'longitude': 121.698188781738, 'time': '2021-11-10T00:10:56Z', 'elevation': 147.0, 'speed': 15.0, 'heading': 235, 'distance': 219.860683220937 }, { 'latitude': 25.0778255462646, 'longitude': 121.677169799805, 'time': '2021-11-10T00:13:43Z', 'elevation': 145.0, 'speed': 13.0, 'heading': 250, 'distance': 2349.77050723249 }, { 'latitude': 25.0772571563721, 'longitude': 121.67512512207, 'time': '2021-11-10T00:13:58Z', 'elevation': 146.0, 'speed': 15.0, 'heading': 243, 'distance': 215.675758224926 }, { 'latitude': 25.068323135376, 'longitude': 121.651954650879, 'time': '2021-11-10T00:16:45Z', 'elevation': 148.0, 'speed': 16.0, 'heading': 228, 'distance': 2538.537801996 }, { 'latitude': 25.0672817230225, 'longitude': 121.64981842041, 'time': '2021-11-10T00:17:00Z', 'elevation': 146.0, 'speed': 15.0, 'heading': 236, 'distance': 244.465138101482 }, { 'latitude': 25.0556583404541, 'longitude': 121.625198364258, 'time': '2021-11-10T00:19:47Z', 'elevation': 163.0, 'speed': 17.0, 'heading': 243, 'distance': 2798.01217500341 }, { 'latitude': 25.0549716949463, 'longitude': 121.622764587402, 'time': '2021-11-10T00:20:02Z', 'elevation': 164.0, 'speed': 18.0, 'heading': 267, 'distance': 257.089371021652 }, { 'latitude': 25.04660987854, 'longitude': 121.595001220703, 'time': '2021-11-10T00:22:49Z', 'elevation': 183.0, 'speed': 18.0, 'heading': 253, 'distance': 2950.71492942351 }, { 'latitude': 25.0458660125732, 'longitude': 121.592575073242, 'time': '2021-11-10T00:23:04Z', 'elevation': 197.0, 'speed': 17.0, 'heading': 251, 'distance': 258.322770694292 }, { 'latitude': 25.0353927612305, 'longitude': 121.565864562988, 'time': '2021-11-10T00:25:50Z', 'elevation': 169.0, 'speed': 17.0, 'heading': 227, 'distance': 2934.60544715278 }, { 'latitude': 25.0341053009033, 'longitude': 121.563339233398, 'time': '2021-11-10T00:26:06Z', 'elevation': 161.0, 'speed': 18.0, 'heading': 243, 'distance': 292.05016737118 }, { 'latitude': 25.0237426757812, 'longitude': 121.53638458252, 'time': '2021-11-10T00:28:53Z', 'elevation': 143.0, 'speed': 17.0, 'heading': 241, 'distance': 2952.70339577138 }, { 'latitude': 25.0226421356201, 'longitude': 121.5341796875, 'time': '2021-11-10T00:29:08Z', 'elevation': 150.0, 'speed': 17.0, 'heading': 242, 'distance': 253.746582305361 }, { 'latitude': 25.0150775909424, 'longitude': 121.506591796875, 'time': '2021-11-10T00:31:55Z', 'elevation': 145.0, 'speed': 16.0, 'heading': 262, 'distance': 2907.92270094144 }, { 'latitude': 25.0146808624268, 'longitude': 121.50439453125, 'time': '2021-11-10T00:32:10Z', 'elevation': 165.0, 'speed': 16.0, 'heading': 249, 'distance': 226.099521005095 }, { 'latitude': 25.0103626251221, 'longitude': 121.475845336914, 'time': '2021-11-10T00:34:57Z', 'elevation': 168.0, 'speed': 17.0, 'heading': 251, 'distance': 2921.18221717596 }, { 'latitude': 25.0097560882568, 'longitude': 121.473434448242, 'time': '2021-11-10T00:35:12Z', 'elevation': 178.0, 'speed': 15.0, 'heading': 256, 'distance': 252.46408679803 }, { 'latitude': 25.0075588226318, 'longitude': 121.44482421875, 'time': '2021-11-10T00:37:59Z', 'elevation': 207.0, 'speed': 18.0, 'heading': 261, 'distance': 2898.24132976907 }, { 'latitude': 25.007007598877, 'longitude': 121.442321777344, 'time': '2021-11-10T00:38:14Z', 'elevation': 200.0, 'speed': 17.0, 'heading': 255, 'distance': 259.881893478194 }, { 'latitude': 24.99733543396, 'longitude': 121.416931152344, 'time': '2021-11-10T00:41:02Z', 'elevation': 237.0, 'speed': 16.0, 'heading': 228, 'distance': 2778.06019320862 }, { 'latitude': 24.9961128234863, 'longitude': 121.414901733398, 'time': '2021-11-10T00:41:17Z', 'elevation': 228.0, 'speed': 17.0, 'heading': 232, 'distance': 245.592724511085 }, { 'latitude': 24.9828433990479, 'longitude': 121.390907287598, 'time': '2021-11-10T00:44:04Z', 'elevation': 292.0, 'speed': 18.0, 'heading': 237, 'distance': 2833.51906550785 }, { 'latitude': 24.981071472168, 'longitude': 121.388984680176, 'time': '2021-11-10T00:44:19Z', 'elevation': 298.0, 'speed': 18.0, 'heading': 222, 'distance': 276.05640035994 }, { 'latitude': 24.9670925140381, 'longitude': 121.36026763916, 'time': '2021-11-10T00:47:06Z', 'elevation': 292.0, 'speed': 20.0, 'heading': 262, 'distance': 3287.16570913571 }, { 'latitude': 24.9662055969238, 'longitude': 121.357376098633, 'time': '2021-11-10T00:47:21Z', 'elevation': 277.0, 'speed': 21.0, 'heading': 258, 'distance': 308.065889716945 }, { 'latitude': 24.9624557495117, 'longitude': 121.32430267334, 'time': '2021-11-10T00:50:07Z', 'elevation': 267.0, 'speed': 19.0, 'heading': 264, 'distance': 3365.46083566074 }, { 'latitude': 24.9615612030029, 'longitude': 121.321647644043, 'time': '2021-11-10T00:50:23Z', 'elevation': 257.0, 'speed': 18.0, 'heading': 259, 'distance': 285.833547688105 }, { 'latitude': 24.9491310119629, 'longitude': 121.293724060059, 'time': '2021-11-10T00:53:11Z', 'elevation': 275.0, 'speed': 17.0, 'heading': 247, 'distance': 3138.11721366702 }, { 'latitude': 24.9479370117188, 'longitude': 121.291473388672, 'time': '2021-11-10T00:53:26Z', 'elevation': 285.0, 'speed': 20.0, 'heading': 249, 'distance': 262.980080525634 }, { 'latitude': 24.931661605835, 'longitude': 121.266151428223, 'time': '2021-11-10T00:56:14Z', 'elevation': 549.0, 'speed': 19.0, 'heading': 213, 'distance': 3129.07307008566 }, { 'latitude': 24.9296684265137, 'longitude': 121.262771606445, 'time': '2021-11-10T00:56:29Z', 'elevation': 326.0, 'speed': 19.0, 'heading': 208, 'distance': 406.559728454635 }, { 'latitude': 24.9060039520264, 'longitude': 121.241020202637, 'time': '2021-11-10T00:59:31Z', 'elevation': 338.0, 'speed': 20.0, 'heading': 222, 'distance': 3420.44766584949 }, { 'latitude': 24.8818035125732, 'longitude': 121.22696685791, 'time': '2021-11-10T01:02:18Z', 'elevation': 325.0, 'speed': 15.0, 'heading': 168, 'distance': 3033.53781914439 }, { 'latitude': 24.879524230957, 'longitude': 121.226654052734, 'time': '2021-11-10T01:02:33Z', 'elevation': 329.0, 'speed': 19.0, 'heading': 200, 'distance': 254.449401483467 }, { 'latitude': 24.8538856506348, 'longitude': 121.211410522461, 'time': '2021-11-10T01:05:35Z', 'elevation': 377.0, 'speed': 19.0, 'heading': 227, 'distance': 3230.90769217406 }, { 'latitude': 24.836540222168, 'longitude': 121.185478210449, 'time': '2021-11-10T01:08:22Z', 'elevation': 427.0, 'speed': 20.0, 'heading': 222, 'distance': 3249.92434924461 }, { 'latitude': 24.8344554901123, 'longitude': 121.183654785156, 'time': '2021-11-10T01:08:37Z', 'elevation': 427.0, 'speed': 19.0, 'heading': 219, 'distance': 295.466972156652 }, { 'latitude': 24.8160057067871, 'longitude': 121.15795135498, 'time': '2021-11-10T01:11:23Z', 'elevation': 491.0, 'speed': 24.0, 'heading': 230, 'distance': 3305.82158638296 }, { 'latitude': 24.814037322998, 'longitude': 121.155250549316, 'time': '2021-11-10T01:11:39Z', 'elevation': 495.0, 'speed': 22.0, 'heading': 234, 'distance': 349.426338759188 }, { 'latitude': 24.7979011535645, 'longitude': 121.123664855957, 'time': '2021-11-10T01:14:25Z', 'elevation': 538.0, 'speed': 22.0, 'heading': 261, 'distance': 3659.73863267479 }, { 'latitude': 24.7974319458008, 'longitude': 121.120178222656, 'time': '2021-11-10T01:14:41Z', 'elevation': 539.0, 'speed': 24.0, 'heading': 257, 'distance': 356.360661239453 }, { 'latitude': 24.7824440002441, 'longitude': 121.082084655762, 'time': '2021-11-10T01:17:28Z', 'elevation': 515.0, 'speed': 25.0, 'heading': 252, 'distance': 4194.60108611554 }, { 'latitude': 24.7812023162842, 'longitude': 121.078636169434, 'time': '2021-11-10T01:17:43Z', 'elevation': 518.0, 'speed': 25.0, 'heading': 250, 'distance': 374.880180860525 }, { 'latitude': 24.766637802124, 'longitude': 121.039260864258, 'time': '2021-11-10T01:20:30Z', 'elevation': 484.0, 'speed': 26.0, 'heading': 245, 'distance': 4296.57237632585 }, { 'latitude': 24.7652168273926, 'longitude': 121.03564453125, 'time': '2021-11-10T01:20:45Z', 'elevation': 480.0, 'speed': 27.0, 'heading': 247, 'distance': 398.187953579598 }, { 'latitude': 24.7468147277832, 'longitude': 120.997039794922, 'time': '2021-11-10T01:23:31Z', 'elevation': 445.0, 'speed': 26.0, 'heading': 240, 'distance': 4404.83602112773 }, { 'latitude': 24.7453212738037, 'longitude': 120.99340057373, 'time': '2021-11-10T01:23:47Z', 'elevation': 442.0, 'speed': 26.0, 'heading': 243, 'distance': 403.592825397231 }, { 'latitude': 24.7224502563477, 'longitude': 120.95711517334, 'time': '2021-11-10T01:26:34Z', 'elevation': 400.0, 'speed': 30.0, 'heading': 209, 'distance': 4460.19665082577 }, { 'latitude': 24.7191200256348, 'longitude': 120.954811096191, 'time': '2021-11-10T01:26:49Z', 'elevation': 384.0, 'speed': 30.0, 'heading': 214, 'distance': 436.372870736315 }, { 'latitude': 24.6900634765625, 'longitude': 120.924797058105, 'time': '2021-11-10T01:29:36Z', 'elevation': 402.0, 'speed': 26.0, 'heading': 218, 'distance': 4425.28982815891 }, { 'latitude': 24.6873168945312, 'longitude': 120.922370910645, 'time': '2021-11-10T01:29:51Z', 'elevation': 398.0, 'speed': 25.0, 'heading': 216, 'distance': 390.953988336988 }, { 'latitude': 24.6556205749512, 'longitude': 120.897644042969, 'time': '2021-11-10T01:32:38Z', 'elevation': 431.0, 'speed': 26.0, 'heading': 212, 'distance': 4311.67908655745 }, { 'latitude': 24.652645111084, 'longitude': 120.895530700684, 'time': '2021-11-10T01:32:53Z', 'elevation': 441.0, 'speed': 25.0, 'heading': 211, 'distance': 392.931234211324 }, { 'latitude': 24.6193428039551, 'longitude': 120.873168945312, 'time': '2021-11-10T01:35:40Z', 'elevation': 510.0, 'speed': 26.0, 'heading': 206, 'distance': 4328.18184023493 }, { 'latitude': 24.6163997650146, 'longitude': 120.871086120605, 'time': '2021-11-10T01:35:55Z', 'elevation': 506.0, 'speed': 25.0, 'heading': 209, 'distance': 388.268864691836 }, { 'latitude': 24.5821418762207, 'longitude': 120.849479675293, 'time': '2021-11-10T01:38:42Z', 'elevation': 503.0, 'speed': 27.0, 'heading': 216, 'distance': 4380.35382030444 }, { 'latitude': 24.5791358947754, 'longitude': 120.84725189209, 'time': '2021-11-10T01:38:57Z', 'elevation': 492.0, 'speed': 26.0, 'heading': 208, 'distance': 402.22259506386 }, { 'latitude': 24.5444068908691, 'longitude': 120.822280883789, 'time': '2021-11-10T01:41:44Z', 'elevation': 617.0, 'speed': 29.0, 'heading': 211, 'distance': 4604.04924300502 }, { 'latitude': 24.541145324707, 'longitude': 120.820129394531, 'time': '2021-11-10T01:41:59Z', 'elevation': 611.0, 'speed': 27.0, 'heading': 215, 'distance': 421.94354485406 }, { 'latitude': 24.5081119537354, 'longitude': 120.79655456543, 'time': '2021-11-10T01:44:46Z', 'elevation': 603.0, 'speed': 26.0, 'heading': 224, 'distance': 4369.80198573712 }, { 'latitude': 24.5053882598877, 'longitude': 120.794097900391, 'time': '2021-11-10T01:45:01Z', 'elevation': 603.0, 'speed': 25.0, 'heading': 218, 'distance': 391.164374352528 }, { 'latitude': 24.4750385284424, 'longitude': 120.763549804688, 'time': '2021-11-10T01:47:48Z', 'elevation': 609.0, 'speed': 28.0, 'heading': 214, 'distance': 4570.44081261377 }, { 'latitude': 24.4721431732178, 'longitude': 120.76097869873, 'time': '2021-11-10T01:48:03Z', 'elevation': 606.0, 'speed': 28.0, 'heading': 220, 'distance': 413.266020692681 }, { 'latitude': 24.4422912597656, 'longitude': 120.72876739502, 'time': '2021-11-10T01:50:50Z', 'elevation': 629.0, 'speed': 27.0, 'heading': 209, 'distance': 4647.48949793116 }, { 'latitude': 24.4388980865479, 'longitude': 120.726516723633, 'time': '2021-11-10T01:51:06Z', 'elevation': 621.0, 'speed': 28.0, 'heading': 220, 'distance': 439.709325738074 }, { 'latitude': 24.4013328552246, 'longitude': 120.703193664551, 'time': '2021-11-10T01:53:53Z', 'elevation': 492.0, 'speed': 28.0, 'heading': 201, 'distance': 4786.23839969087 }, { 'latitude': 24.3979187011719, 'longitude': 120.701141357422, 'time': '2021-11-10T01:54:08Z', 'elevation': 484.0, 'speed': 27.0, 'heading': 205, 'distance': 431.678517228508 }, { 'latitude': 24.3618125915527, 'longitude': 120.685806274414, 'time': '2021-11-10T01:56:55Z', 'elevation': 520.0, 'speed': 23.0, 'heading': 195, 'distance': 4291.19600243945 }, { 'latitude': 24.3588237762451, 'longitude': 120.685043334961, 'time': '2021-11-10T01:57:10Z', 'elevation': 513.0, 'speed': 22.0, 'heading': 192, 'distance': 339.982107013145 }, { 'latitude': 24.3315544128418, 'longitude': 120.694160461426, 'time': '2021-11-10T01:59:57Z', 'elevation': 522.0, 'speed': 20.0, 'heading': 170, 'distance': 3158.96437528826 }, { 'latitude': 24.3289546966553, 'longitude': 120.695182800293, 'time': '2021-11-10T02:00:12Z', 'elevation': 525.0, 'speed': 21.0, 'heading': 158, 'distance': 306.075519816244 }, { 'latitude': 24.2947444915771, 'longitude': 120.700874328613, 'time': '2021-11-10T02:02:59Z', 'elevation': 425.0, 'speed': 24.0, 'heading': 195, 'distance': 3833.00388181598 }, { 'latitude': 24.2916316986084, 'longitude': 120.700355529785, 'time': '2021-11-10T02:03:14Z', 'elevation': 419.0, 'speed': 22.0, 'heading': 190, 'distance': 348.780240478844 }, { 'latitude': 24.2623996734619, 'longitude': 120.696647644043, 'time': '2021-11-10T02:06:01Z', 'elevation': 490.0, 'speed': 19.0, 'heading': 169, 'distance': 3259.61793783929 }, { 'latitude': 24.2597274780273, 'longitude': 120.697128295898, 'time': '2021-11-10T02:06:16Z', 'elevation': 484.0, 'speed': 19.0, 'heading': 168, 'distance': 299.975056863109 }, { 'latitude': 24.2275981903076, 'longitude': 120.696563720703, 'time': '2021-11-10T02:09:02Z', 'elevation': 491.0, 'speed': 23.0, 'heading': 185, 'distance': 3559.158066107 }, { 'latitude': 24.2244319915771, 'longitude': 120.696594238281, 'time': '2021-11-10T02:09:18Z', 'elevation': 480.0, 'speed': 22.0, 'heading': 180, 'distance': 350.706602863898 }, { 'latitude': 24.1916732788086, 'longitude': 120.699394226074, 'time': '2021-11-10T02:12:05Z', 'elevation': 422.0, 'speed': 19.0, 'heading': 167, 'distance': 3639.52767804256 }, { 'latitude': 24.1889572143555, 'longitude': 120.699142456055, 'time': '2021-11-10T02:12:20Z', 'elevation': 421.0, 'speed': 20.0, 'heading': 183, 'distance': 301.919547424809 }, { 'latitude': 24.1604843139648, 'longitude': 120.696716308594, 'time': '2021-11-10T02:15:07Z', 'elevation': 332.0, 'speed': 20.0, 'heading': 200, 'distance': 3163.30102632851 }, { 'latitude': 24.1579208374023, 'longitude': 120.696220397949, 'time': '2021-11-10T02:15:22Z', 'elevation': 311.0, 'speed': 18.0, 'heading': 164, 'distance': 288.370065224274 }, { 'latitude': 24.1477012634277, 'longitude': 120.694976806641, 'time': '2021-11-10T02:18:09Z', 'elevation': 96.0, 'speed': 0.0, 'heading': 117, 'distance': 1138.95862869653 }, { 'latitude': 24.1477127075195, 'longitude': 120.694931030273, 'time': '2021-11-10T02:18:24Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 117, 'distance': 4.8220387755338 }, { 'latitude': 24.1476631164551, 'longitude': 120.694953918457, 'time': '2021-11-10T02:21:11Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 320, 'distance': 5.96501141478372 }, { 'latitude': 24.1476707458496, 'longitude': 120.694915771484, 'time': '2021-11-10T02:21:26Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 289, 'distance': 3.96807258137778 }, { 'latitude': 24.1476612091064, 'longitude': 120.695167541504, 'time': '2021-11-10T02:24:28Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 179, 'distance': 25.6105218607954 }, { 'latitude': 24.1476955413818, 'longitude': 120.694938659668, 'time': '2021-11-10T02:27:14Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 248, 'distance': 23.5712349763473 }, { 'latitude': 24.1476631164551, 'longitude': 120.694938659668, 'time': '2021-11-10T02:27:30Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 264, 'distance': 3.59139645543364 }, { 'latitude': 24.1476707458496, 'longitude': 120.694900512695, 'time': '2021-11-10T02:30:16Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 271, 'distance': 3.96807257885107 }, { 'latitude': 24.1477241516113, 'longitude': 120.694892883301, 'time': '2021-11-10T02:30:32Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 295, 'distance': 5.96584774033771 }, { 'latitude': 24.1476306915283, 'longitude': 120.695068359375, 'time': '2021-11-10T02:33:19Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 261, 'distance': 20.621079292541 }, { 'latitude': 24.1476707458496, 'longitude': 120.694969177246, 'time': '2021-11-10T02:33:34Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 248, 'distance': 11.0134726679393 }, { 'latitude': 24.147632598877, 'longitude': 120.694747924805, 'time': '2021-11-10T02:36:21Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 231, 'distance': 22.8805659489246 }, { 'latitude': 24.1476936340332, 'longitude': 120.69482421875, 'time': '2021-11-10T02:36:36Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 261, 'distance': 10.2872899192083 }, { 'latitude': 24.1477222442627, 'longitude': 120.695007324219, 'time': '2021-11-10T02:39:23Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 185, 'distance': 18.8778471554282 }, { 'latitude': 24.1477470397949, 'longitude': 120.695014953613, 'time': '2021-11-10T02:39:38Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 185, 'distance': 2.85372815031942 }, { 'latitude': 24.1476745605469, 'longitude': 120.694953918457, 'time': '2021-11-10T02:42:24Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 84, 'distance': 10.1452781860479 }, { 'latitude': 24.1476497650146, 'longitude': 120.694900512695, 'time': '2021-11-10T02:42:40Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 84, 'distance': 6.08311426982119 }, { 'latitude': 24.1475276947021, 'longitude': 120.694877624512, 'time': '2021-11-10T02:45:27Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 24, 'distance': 13.7192076093579 }, { 'latitude': 24.1475620269775, 'longitude': 120.694900512695, 'time': '2021-11-10T02:45:42Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 24, 'distance': 4.45775071061927 }, { 'latitude': 24.1476440429688, 'longitude': 120.694709777832, 'time': '2021-11-10T02:48:29Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 30, 'distance': 21.4083018122105 }, { 'latitude': 24.1476879119873, 'longitude': 120.694801330566, 'time': '2021-11-10T02:48:44Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 45, 'distance': 10.4972502538206 }, { 'latitude': 24.1477279663086, 'longitude': 120.694847106934, 'time': '2021-11-10T02:51:31Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 95, 'distance': 6.42863047243558 }, { 'latitude': 24.1477165222168, 'longitude': 120.694808959961, 'time': '2021-11-10T02:51:46Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 95, 'distance': 4.07899388571126 }, { 'latitude': 24.1476802825928, 'longitude': 120.694747924805, 'time': '2021-11-10T02:54:33Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 315, 'distance': 7.38865124707743 }, { 'latitude': 24.1476783752441, 'longitude': 120.694816589355, 'time': '2021-11-10T02:54:48Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 318, 'distance': 6.98188621596695 }, { 'latitude': 24.1476860046387, 'longitude': 120.694847106934, 'time': '2021-11-10T02:57:35Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 222, 'distance': 3.21469309288614 }, { 'latitude': 24.1476860046387, 'longitude': 120.694877624512, 'time': '2021-11-10T02:57:50Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 222, 'distance': 3.10163954811134 }, { 'latitude': 24.1476230621338, 'longitude': 120.694869995117, 'time': '2021-11-10T03:00:36Z', 'elevation': 99.0, 'speed': 1.0, 'heading': 253, 'distance': 7.01452428337839 }, { 'latitude': 24.1476764678955, 'longitude': 120.694984436035, 'time': '2021-11-10T03:00:52Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 322, 'distance': 13.0489797244121 }, { 'latitude': 24.1480312347412, 'longitude': 120.695510864258, 'time': '2021-11-10T03:06:40Z', 'elevation': 78.0, 'speed': 5.0, 'heading': 100, 'distance': 66.3827149972766 }, { 'latitude': 24.1479606628418, 'longitude': 120.697448730469, 'time': '2021-11-10T03:06:56Z', 'elevation': 84.0, 'speed': 10.0, 'heading': 83, 'distance': 197.110216717018 }, { 'latitude': 24.1449184417725, 'longitude': 120.701019287109, 'time': '2021-11-10T03:09:42Z', 'elevation': 98.0, 'speed': 2.0, 'heading': 188, 'distance': 495.212476310997 }, { 'latitude': 24.1448211669922, 'longitude': 120.701080322266, 'time': '2021-11-10T03:09:58Z', 'elevation': 97.0, 'speed': 1.0, 'heading': 175, 'distance': 12.4324345529559 }, { 'latitude': 24.1441307067871, 'longitude': 120.704643249512, 'time': '2021-11-10T03:12:44Z', 'elevation': 96.0, 'speed': 1.0, 'heading': 144, 'distance': 370.115396577603 }, { 'latitude': 24.1440563201904, 'longitude': 120.704513549805, 'time': '2021-11-10T03:13:00Z', 'elevation': 95.0, 'speed': 0.0, 'heading': 110, 'distance': 15.5453908300468 }, { 'latitude': 24.1441135406494, 'longitude': 120.704429626465, 'time': '2021-11-10T03:15:47Z', 'elevation': 95.0, 'speed': 0.0, 'heading': 101, 'distance': 10.626611573719 }, { 'latitude': 24.144172668457, 'longitude': 120.704467773438, 'time': '2021-11-10T03:16:02Z', 'elevation': 96.0, 'speed': 0.0, 'heading': 69, 'distance': 7.61064555630809 }, { 'latitude': 24.1438465118408, 'longitude': 120.70491027832, 'time': '2021-11-10T03:18:48Z', 'elevation': 95.0, 'speed': 2.0, 'heading': 78, 'distance': 57.6872429420026 }, { 'latitude': 24.1439323425293, 'longitude': 120.704498291016, 'time': '2021-11-10T03:19:04Z', 'elevation': 95.0, 'speed': 0.0, 'heading': 77, 'distance': 42.939289083885 }, { 'latitude': 24.144021987915, 'longitude': 120.704490661621, 'time': '2021-11-10T03:22:06Z', 'elevation': 95.0, 'speed': 0.0, 'heading': 154, 'distance': 9.95938335190958 }, { 'latitude': 24.1442241668701, 'longitude': 120.704574584961, 'time': '2021-11-10T03:24:52Z', 'elevation': 95.0, 'speed': 0.0, 'heading': 76, 'distance': 23.9629333210837 }, { 'latitude': 24.1440143585205, 'longitude': 120.704452514648, 'time': '2021-11-10T03:25:08Z', 'elevation': 95.0, 'speed': 0.0, 'heading': 132, 'distance': 26.3430934319063 }, { 'latitude': 24.1442470550537, 'longitude': 120.704627990723, 'time': '2021-11-10T03:27:54Z', 'elevation': 95.0, 'speed': 1.0, 'heading': 91, 'distance': 31.3426971589931 }, { 'latitude': 24.1438388824463, 'longitude': 120.704368591309, 'time': '2021-11-10T03:28:10Z', 'elevation': 95.0, 'speed': 0.0, 'heading': 89, 'distance': 52.3353624003513 }, { 'latitude': 24.1438369750977, 'longitude': 120.704772949219, 'time': '2021-11-10T03:30:56Z', 'elevation': 95.0, 'speed': 2.0, 'heading': 89, 'distance': 41.0988173215351 }, { 'latitude': 24.144063949585, 'longitude': 120.704452514648, 'time': '2021-11-10T03:31:12Z', 'elevation': 95.0, 'speed': 0.0, 'heading': 63, 'distance': 41.1425492086709 }, { 'latitude': 24.1422519683838, 'longitude': 120.705795288086, 'time': '2021-11-10T03:34:13Z', 'elevation': 52.0, 'speed': 0.0, 'heading': 327, 'distance': 242.703434866497 }, { 'latitude': 24.1441421508789, 'longitude': 120.704696655273, 'time': '2021-11-10T03:37:17Z', 'elevation': 103.0, 'speed': 0.0, 'heading': 51, 'distance': 237.274577154654 }, { 'latitude': 24.1442489624023, 'longitude': 120.704429626465, 'time': '2021-11-10T03:40:19Z', 'elevation': 102.0, 'speed': 0.0, 'heading': 201, 'distance': 29.6066844534439 }, { 'latitude': 24.1440963745117, 'longitude': 120.70450592041, 'time': '2021-11-10T03:43:05Z', 'elevation': 102.0, 'speed': 0.0, 'heading': 13, 'distance': 18.5947117691213 }, { 'latitude': 24.1442184448242, 'longitude': 120.704360961914, 'time': '2021-11-10T03:43:21Z', 'elevation': 102.0, 'speed': 0.0, 'heading': 337, 'distance': 19.9968866623494 }, { 'latitude': 24.1441192626953, 'longitude': 120.704917907715, 'time': '2021-11-10T03:46:22Z', 'elevation': 102.0, 'speed': 0.0, 'heading': 115, 'distance': 57.6630069830443 }, { 'latitude': 24.1438121795654, 'longitude': 120.7041015625, 'time': '2021-11-10T03:49:10Z', 'elevation': 52.0, 'speed': 0.0, 'heading': 13, 'distance': 89.672712856609 }, { 'latitude': 24.1440258026123, 'longitude': 120.704330444336, 'time': '2021-11-10T03:49:25Z', 'elevation': 7.0, 'speed': 0.0, 'heading': 69, 'distance': 33.1815505584353 }, { 'latitude': 24.1441078186035, 'longitude': 120.704551696777, 'time': '2021-11-10T03:52:12Z', 'elevation': 19.0, 'speed': 0.0, 'heading': 45, 'distance': 24.2531975583295 }, { 'latitude': 24.1439952850342, 'longitude': 120.70467376709, 'time': '2021-11-10T03:52:27Z', 'elevation': 20.0, 'speed': 0.0, 'heading': 74, 'distance': 17.5866817503524 }, { 'latitude': 24.1440105438232, 'longitude': 120.704597473145, 'time': '2021-11-10T03:55:14Z', 'elevation': 21.0, 'speed': 0.0, 'heading': 102, 'distance': 7.93641995075687 }, { 'latitude': 24.1440315246582, 'longitude': 120.704559326172, 'time': '2021-11-10T03:55:29Z', 'elevation': 21.0, 'speed': 0.0, 'heading': 100, 'distance': 4.52024544327998 }, { 'latitude': 24.1441307067871, 'longitude': 120.704299926758, 'time': '2021-11-10T03:58:16Z', 'elevation': 113.0, 'speed': 0.0, 'heading': 61, 'distance': 28.5619833921415 }, { 'latitude': 24.1441326141357, 'longitude': 120.704330444336, 'time': '2021-11-10T03:58:31Z', 'elevation': 78.0, 'speed': 0.0, 'heading': 61, 'distance': 3.10891140422194 }, { 'latitude': 24.1441268920898, 'longitude': 120.704627990723, 'time': '2021-11-10T04:01:18Z', 'elevation': 76.0, 'speed': 0.0, 'heading': 103, 'distance': 30.2486979655391 }, { 'latitude': 24.1441745758057, 'longitude': 120.704429626465, 'time': '2021-11-10T04:01:33Z', 'elevation': 76.0, 'speed': 0.0, 'heading': 103, 'distance': 20.8416561801781 }, { 'latitude': 24.1441841125488, 'longitude': 120.70426940918, 'time': '2021-11-10T04:04:20Z', 'elevation': 76.0, 'speed': 0.0, 'heading': 106, 'distance': 16.3184015383754 }, { 'latitude': 24.1441650390625, 'longitude': 120.704261779785, 'time': '2021-11-10T04:04:35Z', 'elevation': 76.0, 'speed': 0.0, 'heading': 107, 'distance': 2.25040207320326 }, { 'latitude': 24.1442928314209, 'longitude': 120.704315185547, 'time': '2021-11-10T04:07:22Z', 'elevation': 76.0, 'speed': 0.0, 'heading': 45, 'distance': 15.1594243498371 }, { 'latitude': 24.1442794799805, 'longitude': 120.704322814941, 'time': '2021-11-10T04:07:37Z', 'elevation': 77.0, 'speed': 0.0, 'heading': 78, 'distance': 1.66978150514808 }, { 'latitude': 24.1442642211914, 'longitude': 120.704292297363, 'time': '2021-11-10T04:10:23Z', 'elevation': 76.0, 'speed': 0.0, 'heading': 263, 'distance': 3.53228104211549 }, { 'latitude': 24.1441516876221, 'longitude': 120.704238891602, 'time': '2021-11-10T04:10:39Z', 'elevation': 77.0, 'speed': 0.0, 'heading': 254, 'distance': 13.594886979054 }, { 'latitude': 24.144250869751, 'longitude': 120.704223632812, 'time': '2021-11-10T04:13:25Z', 'elevation': 77.0, 'speed': 0.0, 'heading': 68, 'distance': 11.0943737897325 }, { 'latitude': 24.1442623138428, 'longitude': 120.704193115234, 'time': '2021-11-10T04:13:41Z', 'elevation': 77.0, 'speed': 0.0, 'heading': 320, 'distance': 3.35072635230375 }, { 'latitude': 24.1441745758057, 'longitude': 120.70442199707, 'time': '2021-11-10T04:16:28Z', 'elevation': 77.0, 'speed': 0.0, 'heading': 58, 'distance': 25.211296887803 }, { 'latitude': 24.1442604064941, 'longitude': 120.704315185547, 'time': '2021-11-10T04:16:43Z', 'elevation': 77.0, 'speed': 0.0, 'heading': 58, 'distance': 14.4302228005531 }, { 'latitude': 24.1443309783936, 'longitude': 120.704307556152, 'time': '2021-11-10T04:19:30Z', 'elevation': 77.0, 'speed': 0.0, 'heading': 77, 'distance': 7.85493381128634 }, { 'latitude': 24.1443977355957, 'longitude': 120.704360961914, 'time': '2021-11-10T04:19:45Z', 'elevation': 77.0, 'speed': 0.0, 'heading': 77, 'distance': 9.17252622790374 }, { 'latitude': 24.1443042755127, 'longitude': 120.704643249512, 'time': '2021-11-10T04:22:31Z', 'elevation': 79.0, 'speed': 0.0, 'heading': 210, 'distance': 30.5014453850102 }, { 'latitude': 24.1442203521729, 'longitude': 120.704513549805, 'time': '2021-11-10T04:22:47Z', 'elevation': 78.0, 'speed': 0.0, 'heading': 232, 'distance': 16.1301035359792 }, { 'latitude': 24.1444110870361, 'longitude': 120.704460144043, 'time': '2021-11-10T04:25:34Z', 'elevation': 78.0, 'speed': 0.0, 'heading': 116, 'distance': 21.8120365905404 }, { 'latitude': 24.1443042755127, 'longitude': 120.70435333252, 'time': '2021-11-10T04:25:49Z', 'elevation': 78.0, 'speed': 0.0, 'heading': 109, 'distance': 16.0566244308031 }, { 'latitude': 24.1440620422363, 'longitude': 120.704536437988, 'time': '2021-11-10T04:28:50Z', 'elevation': 78.0, 'speed': 0.0, 'heading': 288, 'distance': 32.652567884588 }, { 'latitude': 24.1443481445312, 'longitude': 120.70418548584, 'time': '2021-11-10T04:31:38Z', 'elevation': 86.0, 'speed': 0.0, 'heading': 15, 'distance': 47.7130439966236 }, { 'latitude': 24.1441822052002, 'longitude': 120.704299926758, 'time': '2021-11-10T04:31:53Z', 'elevation': 94.0, 'speed': 0.0, 'heading': 105, 'distance': 21.7508302991636 }, { 'latitude': 24.1441917419434, 'longitude': 120.704467773438, 'time': '2021-11-10T04:34:40Z', 'elevation': 96.0, 'speed': 1.0, 'heading': 147, 'distance': 17.0922850647685 }, { 'latitude': 24.1443386077881, 'longitude': 120.704513549805, 'time': '2021-11-10T04:34:55Z', 'elevation': 96.0, 'speed': 0.0, 'heading': 173, 'distance': 16.9191832968006 }, { 'latitude': 24.1444416046143, 'longitude': 120.704811096191, 'time': '2021-11-10T04:40:58Z', 'elevation': 158.0, 'speed': 0.0, 'heading': 171, 'distance': 32.3221272588496 }, { 'latitude': 24.1441688537598, 'longitude': 120.704383850098, 'time': '2021-11-10T04:44:01Z', 'elevation': 227.0, 'speed': 0.0, 'heading': 70, 'distance': 52.8991839520395 }, { 'latitude': 24.1442909240723, 'longitude': 120.703811645508, 'time': '2021-11-10T04:47:02Z', 'elevation': 237.0, 'speed': 0.0, 'heading': 197, 'distance': 59.7087093096212 }, { 'latitude': 24.1442394256592, 'longitude': 120.704650878906, 'time': '2021-11-10T04:50:09Z', 'elevation': 246.0, 'speed': 0.0, 'heading': 146, 'distance': 85.4885249777859 }, { 'latitude': 24.1440658569336, 'longitude': 120.704452514648, 'time': '2021-11-10T04:53:10Z', 'elevation': 234.0, 'speed': 0.0, 'heading': 151, 'distance': 27.8579097272154 }, { 'latitude': 24.1442775726318, 'longitude': 120.704399108887, 'time': '2021-11-10T04:55:58Z', 'elevation': 88.0, 'speed': 1.0, 'heading': 91, 'distance': 24.069723597421 }, { 'latitude': 24.1443729400635, 'longitude': 120.704429626465, 'time': '2021-11-10T04:56:13Z', 'elevation': 93.0, 'speed': 0.0, 'heading': 147, 'distance': 11.0089090753018 }, { 'latitude': 24.144172668457, 'longitude': 120.704795837402, 'time': '2021-11-10T04:59:14Z', 'elevation': 94.0, 'speed': 0.0, 'heading': 163, 'distance': 43.3295149431436 }, { 'latitude': 24.1444435119629, 'longitude': 120.704566955566, 'time': '2021-11-10T05:05:07Z', 'elevation': 130.0, 'speed': 0.0, 'heading': 187, 'distance': 37.9617428496552 }, { 'latitude': 24.1443538665771, 'longitude': 120.704566955566, 'time': '2021-11-10T05:05:23Z', 'elevation': 130.0, 'speed': 0.0, 'heading': 232, 'distance': 9.92915064039388 }, { 'latitude': 24.1442203521729, 'longitude': 120.704536437988, 'time': '2021-11-10T05:08:24Z', 'elevation': 130.0, 'speed': 0.0, 'heading': 186, 'distance': 15.109880020741 }, { 'latitude': 24.1440677642822, 'longitude': 120.704551696777, 'time': '2021-11-10T05:17:15Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 141, 'distance': 16.9716883528697 }, { 'latitude': 24.1439533233643, 'longitude': 120.704513549805, 'time': '2021-11-10T05:17:30Z', 'elevation': 98.0, 'speed': 0.0, 'heading': 182, 'distance': 13.2552233599561 }, { 'latitude': 24.1441287994385, 'longitude': 120.704383850098, 'time': '2021-11-10T05:20:16Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 202, 'distance': 23.4846016999712 }, { 'latitude': 24.1442890167236, 'longitude': 120.704399108887, 'time': '2021-11-10T05:20:32Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 189, 'distance': 17.8133543755646 }, { 'latitude': 24.1441879272461, 'longitude': 120.704307556152, 'time': '2021-11-10T05:23:19Z', 'elevation': 102.0, 'speed': 1.0, 'heading': 203, 'distance': 14.5586273217942 }, { 'latitude': 24.1442050933838, 'longitude': 120.704406738281, 'time': '2021-11-10T05:23:34Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 68, 'distance': 10.2584192797468 }, { 'latitude': 24.1442108154297, 'longitude': 120.704452514648, 'time': '2021-11-10T05:26:21Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 253, 'distance': 4.69555328404451 }, { 'latitude': 24.1441421508789, 'longitude': 120.704437255859, 'time': '2021-11-10T05:26:36Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 253, 'distance': 7.76182082996495 }, { 'latitude': 24.143892288208, 'longitude': 120.704376220703, 'time': '2021-11-10T05:29:23Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 149, 'distance': 28.361612038087 }, { 'latitude': 24.1439247131348, 'longitude': 120.704414367676, 'time': '2021-11-10T05:29:38Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 184, 'distance': 5.28493251029153 }, { 'latitude': 24.1441402435303, 'longitude': 120.704536437988, 'time': '2021-11-10T05:32:25Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 150, 'distance': 26.9038351175544 }, { 'latitude': 24.1441135406494, 'longitude': 120.704521179199, 'time': '2021-11-10T05:32:40Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 150, 'distance': 3.33956384833339 }, { 'latitude': 24.1440773010254, 'longitude': 120.704498291016, 'time': '2021-11-10T05:35:27Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 203, 'distance': 4.6393032583571 }, { 'latitude': 24.1440753936768, 'longitude': 120.704490661621, 'time': '2021-11-10T05:35:42Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 203, 'distance': 0.803694237141283 }, { 'latitude': 24.1442203521729, 'longitude': 120.704551696777, 'time': '2021-11-10T05:38:29Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 29, 'distance': 17.2123967194558 }, { 'latitude': 24.1441631317139, 'longitude': 120.704483032227, 'time': '2021-11-10T05:38:44Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 29, 'distance': 9.42718905317061 }, { 'latitude': 24.1440715789795, 'longitude': 120.704582214355, 'time': '2021-11-10T05:41:31Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 172, 'distance': 14.2985362404972 }, { 'latitude': 24.1440658569336, 'longitude': 120.704528808594, 'time': '2021-11-10T05:41:46Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 172, 'distance': 5.46489651103747 }, { 'latitude': 24.1439037322998, 'longitude': 120.704368591309, 'time': '2021-11-10T05:44:33Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 315, 'distance': 24.241043251049 }, { 'latitude': 24.1441841125488, 'longitude': 120.704475402832, 'time': '2021-11-10T05:44:48Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 315, 'distance': 32.8978524566524 }, { 'latitude': 24.144115447998, 'longitude': 120.704551696777, 'time': '2021-11-10T05:47:35Z', 'elevation': 99.0, 'speed': 0.0, 'heading': 73, 'distance': 10.8614447885325 }, { 'latitude': 24.1441555023193, 'longitude': 120.704582214355, 'time': '2021-11-10T05:47:50Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 78, 'distance': 5.41318763499283 }, { 'latitude': 24.1442413330078, 'longitude': 120.704711914062, 'time': '2021-11-10T05:50:37Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 217, 'distance': 16.2527688651408 }, { 'latitude': 24.1442127227783, 'longitude': 120.704795837402, 'time': '2021-11-10T05:50:52Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 103, 'distance': 9.09941507835757 }, { 'latitude': 24.1440753936768, 'longitude': 120.704627990723, 'time': '2021-11-10T05:53:39Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 284, 'distance': 22.8559271117319 }, { 'latitude': 24.1440525054932, 'longitude': 120.704490661621, 'time': '2021-11-10T05:53:54Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 258, 'distance': 14.1862312094819 }, { 'latitude': 24.1439933776855, 'longitude': 120.704727172852, 'time': '2021-11-10T05:56:41Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 285, 'distance': 24.9147115080915 }, { 'latitude': 24.1439971923828, 'longitude': 120.704574584961, 'time': '2021-11-10T05:56:56Z', 'elevation': 100.0, 'speed': 0.0, 'heading': 285, 'distance': 15.5145181979661 }, { 'latitude': 24.1377506256104, 'longitude': 120.705375671387, 'time': '2021-11-10T05:59:43Z', 'elevation': 74.0, 'speed': 1.0, 'heading': 202, 'distance': 696.646010798889 }, { 'latitude': 24.1379108428955, 'longitude': 120.705520629883, 'time': '2021-11-10T05:59:58Z', 'elevation': 88.0, 'speed': 0.0, 'heading': 274, 'distance': 23.0651598259857 }, { 'latitude': 24.1302452087402, 'longitude': 120.705368041992, 'time': '2021-11-10T06:02:44Z', 'elevation': 98.0, 'speed': 12.0, 'heading': 200, 'distance': 849.188513712882 }, { 'latitude': 24.1302814483643, 'longitude': 120.705131530762, 'time': '2021-11-10T06:02:59Z', 'elevation': 71.0, 'speed': 6.0, 'heading': 142, 'distance': 24.3739283248146 }, { 'latitude': 24.1291007995605, 'longitude': 120.708549499512, 'time': '2021-11-10T06:05:46Z', 'elevation': 105.0, 'speed': 0.0, 'heading': 101, 'distance': 371.229742478136 }, { 'latitude': 24.1291198730469, 'longitude': 120.708450317383, 'time': '2021-11-10T06:06:01Z', 'elevation': 109.0, 'speed': 0.0, 'heading': 108, 'distance': 10.3008237300243 }, { 'latitude': 24.1290454864502, 'longitude': 120.707389831543, 'time': '2021-11-10T06:08:48Z', 'elevation': 107.0, 'speed': 1.0, 'heading': 295, 'distance': 108.112808195823 }, { 'latitude': 24.1284675598145, 'longitude': 120.706771850586, 'time': '2021-11-10T06:09:03Z', 'elevation': 108.0, 'speed': 11.0, 'heading': 209, 'distance': 89.6857135561589 }, { 'latitude': 24.1105175018311, 'longitude': 120.69945526123, 'time': '2021-11-10T06:11:49Z', 'elevation': 73.0, 'speed': 1.0, 'heading': 230, 'distance': 2122.72216741157 }, { 'latitude': 24.1105613708496, 'longitude': 120.69945526123, 'time': '2021-11-10T06:12:05Z', 'elevation': 70.0, 'speed': 0.0, 'heading': 230, 'distance': 4.85892452045261 }, { 'latitude': 24.101001739502, 'longitude': 120.694541931152, 'time': '2021-11-10T06:14:52Z', 'elevation': 58.0, 'speed': 0.0, 'heading': 195, 'distance': 1170.7414650161 }, { 'latitude': 24.1010303497314, 'longitude': 120.694557189941, 'time': '2021-11-10T06:15:07Z', 'elevation': 50.0, 'speed': 0.0, 'heading': 200, 'distance': 3.52823755578619 }, { 'latitude': 24.0956325531006, 'longitude': 120.688949584961, 'time': '2021-11-10T06:18:09Z', 'elevation': 68.0, 'speed': 17.0, 'heading': 214, 'distance': 826.138308791591 }, { 'latitude': 24.0691204071045, 'longitude': 120.690292358398, 'time': '2021-11-10T06:20:55Z', 'elevation': 53.0, 'speed': 21.0, 'heading': 170, 'distance': 2939.64247565591 }, { 'latitude': 24.0660762786865, 'longitude': 120.690170288086, 'time': '2021-11-10T06:21:11Z', 'elevation': 54.0, 'speed': 23.0, 'heading': 186, 'distance': 337.393687469067 }, { 'latitude': 24.0340576171875, 'longitude': 120.673622131348, 'time': '2021-11-10T06:23:58Z', 'elevation': 75.0, 'speed': 27.0, 'heading': 214, 'distance': 3925.50907821834 }, { 'latitude': 24.0310249328613, 'longitude': 120.671356201172, 'time': '2021-11-10T06:24:13Z', 'elevation': 78.0, 'speed': 24.0, 'heading': 215, 'distance': 407.380038203999 }, { 'latitude': 24.0079975128174, 'longitude': 120.649932861328, 'time': '2021-11-10T06:26:59Z', 'elevation': 58.0, 'speed': 0.0, 'heading': 328, 'distance': 3354.89635796849 }, { 'latitude': 24.0080013275146, 'longitude': 120.649887084961, 'time': '2021-11-10T06:27:15Z', 'elevation': 61.0, 'speed': 0.0, 'heading': 312, 'distance': 4.67662703217958 }, { 'latitude': 24.0106315612793, 'longitude': 120.643737792969, 'time': '2021-11-10T06:30:01Z', 'elevation': 54.0, 'speed': 6.0, 'heading': 181, 'distance': 690.154597873595 }, { 'latitude': 24.010196685791, 'longitude': 120.643692016602, 'time': '2021-11-10T06:30:17Z', 'elevation': 67.0, 'speed': 3.0, 'heading': 247, 'distance': 48.390750228005 }],
    [{ 'latitude': 25.4069385528564, 'longitude': 121.992324829102, 'time': '2021-11-09T23:31:43Z', 'elevation': 73.0, 'speed': 19.0, 'heading': 201, 'distance': 0.0 }, { 'latitude': 25.4042835235596, 'longitude': 121.991477966309, 'time': '2021-11-09T23:31:58Z', 'elevation': 99.0, 'speed': 20.0, 'heading': 209, 'distance': 306.215295808556 }, { 'latitude': 25.401424407959, 'longitude': 121.990051269531, 'time': '2021-11-09T23:32:13Z', 'elevation': 113.0, 'speed': 24.0, 'heading': 213, 'distance': 347.742584666174 }, { 'latitude': 25.3985042572021, 'longitude': 121.988204956055, 'time': '2021-11-09T23:32:28Z', 'elevation': 118.0, 'speed': 25.0, 'heading': 224, 'distance': 373.041230140715 }, { 'latitude': 25.3956470489502, 'longitude': 121.986175537109, 'time': '2021-11-09T23:32:43Z', 'elevation': 128.0, 'speed': 26.0, 'heading': 202, 'distance': 376.675114975241 }, { 'latitude': 25.3924865722656, 'longitude': 121.984428405762, 'time': '2021-11-09T23:32:58Z', 'elevation': 139.0, 'speed': 27.0, 'heading': 214, 'distance': 391.77484979052 }, { 'latitude': 25.3894443511963, 'longitude': 121.982063293457, 'time': '2021-11-09T23:33:13Z', 'elevation': 142.0, 'speed': 26.0, 'heading': 212, 'distance': 412.578144614364 }, { 'latitude': 25.3861999511719, 'longitude': 121.98006439209, 'time': '2021-11-09T23:33:28Z', 'elevation': 141.0, 'speed': 30.0, 'heading': 214, 'distance': 411.870925580318 }, { 'latitude': 25.3828506469727, 'longitude': 121.978538513184, 'time': '2021-11-09T23:33:43Z', 'elevation': 153.0, 'speed': 26.0, 'heading': 201, 'distance': 401.551170418361 }, { 'latitude': 25.3794574737549, 'longitude': 121.976890563965, 'time': '2021-11-09T23:33:58Z', 'elevation': 153.0, 'speed': 29.0, 'heading': 207, 'distance': 410.850523509456 }, { 'latitude': 25.375955581665, 'longitude': 121.974891662598, 'time': '2021-11-09T23:34:13Z', 'elevation': 149.0, 'speed': 29.0, 'heading': 204, 'distance': 436.991696694933 }, { 'latitude': 25.3724613189697, 'longitude': 121.972808837891, 'time': '2021-11-09T23:34:28Z', 'elevation': 149.0, 'speed': 28.0, 'heading': 206, 'distance': 440.202863297316 }, { 'latitude': 25.33518409729, 'longitude': 121.952743530273, 'time': '2021-11-09T23:37:15Z', 'elevation': 153.0, 'speed': 26.0, 'heading': 207, 'distance': 4596.97777168944 }, { 'latitude': 25.3318557739258, 'longitude': 121.950736999512, 'time': '2021-11-09T23:37:30Z', 'elevation': 143.0, 'speed': 29.0, 'heading': 202, 'distance': 420.417423471366 }, { 'latitude': 25.2971420288086, 'longitude': 121.924209594727, 'time': '2021-11-09T23:40:17Z', 'elevation': 115.0, 'speed': 24.0, 'heading': 226, 'distance': 4682.15912725035 }, { 'latitude': 25.2941722869873, 'longitude': 121.921806335449, 'time': '2021-11-09T23:40:32Z', 'elevation': 120.0, 'speed': 28.0, 'heading': 209, 'distance': 408.416652877418 }, { 'latitude': 25.2587223052979, 'longitude': 121.897727966309, 'time': '2021-11-09T23:43:19Z', 'elevation': 73.0, 'speed': 25.0, 'heading': 200, 'distance': 4615.57032825865 }, { 'latitude': 25.2555046081543, 'longitude': 121.895935058594, 'time': '2021-11-09T23:43:34Z', 'elevation': 54.0, 'speed': 27.0, 'heading': 201, 'distance': 399.594499544495 }, { 'latitude': 25.2171039581299, 'longitude': 121.886779785156, 'time': '2021-11-09T23:46:21Z', 'elevation': 88.0, 'speed': 26.0, 'heading': 203, 'distance': 4352.75359441607 }, { 'latitude': 25.2135753631592, 'longitude': 121.885551452637, 'time': '2021-11-09T23:46:36Z', 'elevation': 76.0, 'speed': 27.0, 'heading': 207, 'distance': 410.015366615588 }, { 'latitude': 25.1793613433838, 'longitude': 121.865692138672, 'time': '2021-11-09T23:49:23Z', 'elevation': 112.0, 'speed': 24.0, 'heading': 219, 'distance': 4286.15841752144 }, { 'latitude': 25.1762752532959, 'longitude': 121.864013671875, 'time': '2021-11-09T23:49:38Z', 'elevation': 124.0, 'speed': 26.0, 'heading': 201, 'distance': 381.442047304907 }, { 'latitude': 25.1469821929932, 'longitude': 121.838439941406, 'time': '2021-11-09T23:52:25Z', 'elevation': 207.0, 'speed': 23.0, 'heading': 227, 'distance': 4144.54172454609 }, { 'latitude': 25.1444683074951, 'longitude': 121.836372375488, 'time': '2021-11-09T23:52:40Z', 'elevation': 190.0, 'speed': 25.0, 'heading': 215, 'distance': 347.865254169022 }, { 'latitude': 25.137939453125, 'longitude': 121.799942016602, 'time': '2021-11-09T23:55:27Z', 'elevation': 50.0, 'speed': 23.0, 'heading': 274, 'distance': 3743.95282591671 }, { 'latitude': 25.1371879577637, 'longitude': 121.796897888184, 'time': '2021-11-09T23:55:42Z', 'elevation': 52.0, 'speed': 22.0, 'heading': 243, 'distance': 318.049842706622 }, { 'latitude': 25.1271209716797, 'longitude': 121.764923095703, 'time': '2021-11-09T23:58:29Z', 'elevation': 106.0, 'speed': 23.0, 'heading': 262, 'distance': 3411.79391525837 }, { 'latitude': 25.1265048980713, 'longitude': 121.761375427246, 'time': '2021-11-09T23:58:44Z', 'elevation': 87.0, 'speed': 25.0, 'heading': 257, 'distance': 364.219820467477 }, { 'latitude': 25.1259880065918, 'longitude': 121.727851867676, 'time': '2021-11-10T00:01:31Z', 'elevation': 134.0, 'speed': 20.0, 'heading': 268, 'distance': 3381.22498260538 }, { 'latitude': 25.1257572174072, 'longitude': 121.724914550781, 'time': '2021-11-10T00:01:46Z', 'elevation': 153.0, 'speed': 23.0, 'heading': 251, 'distance': 297.320782359198 }, { 'latitude': 25.1120624542236, 'longitude': 121.691909790039, 'time': '2021-11-10T00:04:33Z', 'elevation': 124.0, 'speed': 23.0, 'heading': 223, 'distance': 3658.01826519499 }, { 'latitude': 25.1105766296387, 'longitude': 121.689010620117, 'time': '2021-11-10T00:04:48Z', 'elevation': 130.0, 'speed': 22.0, 'heading': 247, 'distance': 335.547841483807 }, { 'latitude': 25.0906143188477, 'longitude': 121.661643981934, 'time': '2021-11-10T00:07:35Z', 'elevation': 138.0, 'speed': 23.0, 'heading': 243, 'distance': 3536.91564913537 }, { 'latitude': 25.089111328125, 'longitude': 121.658500671387, 'time': '2021-11-10T00:07:50Z', 'elevation': 130.0, 'speed': 24.0, 'heading': 247, 'distance': 358.138959003366 }, { 'latitude': 25.0647392272949, 'longitude': 121.631904602051, 'time': '2021-11-10T00:10:37Z', 'elevation': 74.0, 'speed': 22.0, 'heading': 245, 'distance': 3806.37200754796 }, { 'latitude': 25.0636882781982, 'longitude': 121.628730773926, 'time': '2021-11-10T00:10:52Z', 'elevation': 71.0, 'speed': 23.0, 'heading': 248, 'distance': 340.736396417966 }, { 'latitude': 25.0536117553711, 'longitude': 121.595314025879, 'time': '2021-11-10T00:13:39Z', 'elevation': 55.0, 'speed': 22.0, 'heading': 252, 'distance': 3551.77539586815 }, { 'latitude': 25.0523777008057, 'longitude': 121.592445373535, 'time': '2021-11-10T00:13:54Z', 'elevation': 56.0, 'speed': 21.0, 'heading': 242, 'distance': 320.121659762166 }, { 'latitude': 25.0438537597656, 'longitude': 121.558738708496, 'time': '2021-11-10T00:16:40Z', 'elevation': 52.0, 'speed': 24.0, 'heading': 265, 'distance': 3529.99242487516 }, { 'latitude': 25.0424785614014, 'longitude': 121.556045532227, 'time': '2021-11-10T00:16:56Z', 'elevation': 55.0, 'speed': 21.0, 'heading': 242, 'distance': 311.562533294806 }, { 'latitude': 25.0294723510742, 'longitude': 121.523872375488, 'time': '2021-11-10T00:19:43Z', 'elevation': 46.0, 'speed': 20.0, 'heading': 261, 'distance': 3552.22982305584 }, { 'latitude': 25.0289211273193, 'longitude': 121.520874023438, 'time': '2021-11-10T00:19:58Z', 'elevation': 48.0, 'speed': 20.0, 'heading': 262, 'distance': 308.711285996059 }, { 'latitude': 25.0182571411133, 'longitude': 121.487205505371, 'time': '2021-11-10T00:22:45Z', 'elevation': 32.0, 'speed': 22.0, 'heading': 246, 'distance': 3597.65654701993 }, { 'latitude': 25.017053604126, 'longitude': 121.484390258789, 'time': '2021-11-10T00:23:00Z', 'elevation': 40.0, 'speed': 19.0, 'heading': 241, 'distance': 313.879459211334 }, { 'latitude': 25.0042171478271, 'longitude': 121.451065063477, 'time': '2021-11-10T00:25:47Z', 'elevation': 45.0, 'speed': 22.0, 'heading': 240, 'distance': 3652.07646742825 }, { 'latitude': 25.002893447876, 'longitude': 121.448036193848, 'time': '2021-11-10T00:26:02Z', 'elevation': 48.0, 'speed': 22.0, 'heading': 241, 'distance': 339.097390429624 }, { 'latitude': 24.9810581207275, 'longitude': 121.421981811523, 'time': '2021-11-10T00:28:48Z', 'elevation': 80.0, 'speed': 21.0, 'heading': 212, 'distance': 3573.40276069654 }, { 'latitude': 24.978702545166, 'longitude': 121.420196533203, 'time': '2021-11-10T00:29:04Z', 'elevation': 87.0, 'speed': 20.0, 'heading': 220, 'distance': 317.139402798049 }, { 'latitude': 24.9565258026123, 'longitude': 121.394432067871, 'time': '2021-11-10T00:31:51Z', 'elevation': 134.0, 'speed': 23.0, 'heading': 232, 'distance': 3578.14158511487 }, { 'latitude': 24.9545631408691, 'longitude': 121.391975402832, 'time': '2021-11-10T00:32:06Z', 'elevation': 144.0, 'speed': 23.0, 'heading': 234, 'distance': 329.871066865716 }, { 'latitude': 24.9405975341797, 'longitude': 121.358207702637, 'time': '2021-11-10T00:34:53Z', 'elevation': 121.0, 'speed': 23.0, 'heading': 253, 'distance': 3744.77437642043 }, { 'latitude': 24.9396839141846, 'longitude': 121.35498046875, 'time': '2021-11-10T00:35:08Z', 'elevation': 127.0, 'speed': 21.0, 'heading': 261, 'distance': 341.29713405961 }, { 'latitude': 24.9219779968262, 'longitude': 121.32186126709, 'time': '2021-11-10T00:37:55Z', 'elevation': 141.0, 'speed': 25.0, 'heading': 248, 'distance': 3877.82173805019 }, { 'latitude': 24.9203605651855, 'longitude': 121.318496704102, 'time': '2021-11-10T00:38:10Z', 'elevation': 129.0, 'speed': 25.0, 'heading': 241, 'distance': 384.202413650871 }, { 'latitude': 24.8966197967529, 'longitude': 121.289398193359, 'time': '2021-11-10T00:40:57Z', 'elevation': 115.0, 'speed': 25.0, 'heading': 211, 'distance': 3944.30082527601 }, { 'latitude': 24.8940849304199, 'longitude': 121.287719726562, 'time': '2021-11-10T00:41:12Z', 'elevation': 128.0, 'speed': 22.0, 'heading': 217, 'distance': 328.027822288599 }, { 'latitude': 24.8706035614014, 'longitude': 121.264518737793, 'time': '2021-11-10T00:43:59Z', 'elevation': 201.0, 'speed': 19.0, 'heading': 218, 'distance': 3501.65109876252 }, { 'latitude': 24.8682079315186, 'longitude': 121.263229370117, 'time': '2021-11-10T00:44:14Z', 'elevation': 215.0, 'speed': 19.0, 'heading': 189, 'distance': 295.629918790265 }, { 'latitude': 24.8460960388184, 'longitude': 121.239875793457, 'time': '2021-11-10T00:47:01Z', 'elevation': 283.0, 'speed': 22.0, 'heading': 241, 'distance': 3401.494937364 }, { 'latitude': 24.8451652526855, 'longitude': 121.236961364746, 'time': '2021-11-10T00:47:16Z', 'elevation': 318.0, 'speed': 21.0, 'heading': 248, 'distance': 312.100615320677 }, { 'latitude': 24.8250904083252, 'longitude': 121.205429077148, 'time': '2021-11-10T00:50:03Z', 'elevation': 401.0, 'speed': 26.0, 'heading': 231, 'distance': 3886.4503944746 }, { 'latitude': 24.8234996795654, 'longitude': 121.202278137207, 'time': '2021-11-10T00:50:18Z', 'elevation': 454.0, 'speed': 26.0, 'heading': 231, 'distance': 364.026319343163 }, { 'latitude': 24.8027362823486, 'longitude': 121.166687011719, 'time': '2021-11-10T00:53:05Z', 'elevation': 458.0, 'speed': 24.0, 'heading': 235, 'distance': 4270.58597523584 }, { 'latitude': 24.8013458251953, 'longitude': 121.163444519043, 'time': '2021-11-10T00:53:20Z', 'elevation': 450.0, 'speed': 23.0, 'heading': 256, 'distance': 362.228717597181 }, { 'latitude': 24.794303894043, 'longitude': 121.123779296875, 'time': '2021-11-10T00:56:07Z', 'elevation': 396.0, 'speed': 22.0, 'heading': 248, 'distance': 4085.88419679598 }, { 'latitude': 24.7936706542969, 'longitude': 121.120384216309, 'time': '2021-11-10T00:56:22Z', 'elevation': 394.0, 'speed': 22.0, 'heading': 265, 'distance': 350.395602536335 }, { 'latitude': 24.7714595794678, 'longitude': 121.088302612305, 'time': '2021-11-10T00:59:09Z', 'elevation': 351.0, 'speed': 25.0, 'heading': 228, 'distance': 4071.69919747281 }, { 'latitude': 24.7694664001465, 'longitude': 121.085205078125, 'time': '2021-11-10T00:59:24Z', 'elevation': 352.0, 'speed': 24.0, 'heading': 234, 'distance': 383.257632103675 }, { 'latitude': 24.7476615905762, 'longitude': 121.055137634277, 'time': '2021-11-10T01:02:11Z', 'elevation': 366.0, 'speed': 24.0, 'heading': 234, 'distance': 3883.64311998694 }, { 'latitude': 24.7459373474121, 'longitude': 121.052017211914, 'time': '2021-11-10T01:02:26Z', 'elevation': 361.0, 'speed': 24.0, 'heading': 247, 'distance': 368.934734499746 }, { 'latitude': 24.7211227416992, 'longitude': 121.022415161133, 'time': '2021-11-10T01:05:13Z', 'elevation': 368.0, 'speed': 25.0, 'heading': 223, 'distance': 4064.94342139053 }, { 'latitude': 24.718729019165, 'longitude': 121.019523620605, 'time': '2021-11-10T01:05:28Z', 'elevation': 363.0, 'speed': 25.0, 'heading': 224, 'distance': 394.83587888597 }, { 'latitude': 24.6955585479736, 'longitude': 120.986297607422, 'time': '2021-11-10T01:08:15Z', 'elevation': 334.0, 'speed': 27.0, 'heading': 244, 'distance': 4229.7493813031 }, { 'latitude': 24.6939487457275, 'longitude': 120.98274230957, 'time': '2021-11-10T01:08:30Z', 'elevation': 326.0, 'speed': 26.0, 'heading': 239, 'distance': 401.552746695724 }, { 'latitude': 24.6737747192383, 'longitude': 120.944358825684, 'time': '2021-11-10T01:11:17Z', 'elevation': 270.0, 'speed': 26.0, 'heading': 234, 'distance': 4481.55047439207 }, { 'latitude': 24.671745300293, 'longitude': 120.941078186035, 'time': '2021-11-10T01:11:32Z', 'elevation': 265.0, 'speed': 26.0, 'heading': 227, 'distance': 400.988322062768 }, { 'latitude': 24.6422500610352, 'longitude': 120.913772583008, 'time': '2021-11-10T01:14:19Z', 'elevation': 306.0, 'speed': 29.0, 'heading': 222, 'distance': 4279.52983303011 }, { 'latitude': 24.6392021179199, 'longitude': 120.910995483398, 'time': '2021-11-10T01:14:34Z', 'elevation': 305.0, 'speed': 29.0, 'heading': 221, 'distance': 439.354768925854 }, { 'latitude': 24.6077480316162, 'longitude': 120.875, 'time': '2021-11-10T01:17:21Z', 'elevation': 299.0, 'speed': 30.0, 'heading': 236, 'distance': 5042.1220559576 }, { 'latitude': 24.6051464080811, 'longitude': 120.871520996094, 'time': '2021-11-10T01:17:36Z', 'elevation': 300.0, 'speed': 30.0, 'heading': 230, 'distance': 455.160473672362 }, { 'latitude': 24.5731582641602, 'longitude': 120.83374786377, 'time': '2021-11-10T01:20:23Z', 'elevation': 298.0, 'speed': 31.0, 'heading': 224, 'distance': 5214.5044892193 }, { 'latitude': 24.5706462860107, 'longitude': 120.82999420166, 'time': '2021-11-10T01:20:38Z', 'elevation': 304.0, 'speed': 30.0, 'heading': 235, 'distance': 471.166485709099 }, { 'latitude': 24.5359745025635, 'longitude': 120.797103881836, 'time': '2021-11-10T01:23:25Z', 'elevation': 346.0, 'speed': 32.0, 'heading': 217, 'distance': 5084.54694073939 }, { 'latitude': 24.5325679779053, 'longitude': 120.794281005859, 'time': '2021-11-10T01:23:40Z', 'elevation': 353.0, 'speed': 31.0, 'heading': 219, 'distance': 473.48854968148 }, { 'latitude': 24.4953269958496, 'longitude': 120.759857177734, 'time': '2021-11-10T01:26:27Z', 'elevation': 391.0, 'speed': 31.0, 'heading': 219, 'distance': 5402.44293628283 }, { 'latitude': 24.4918422698975, 'longitude': 120.757164001465, 'time': '2021-11-10T01:26:42Z', 'elevation': 394.0, 'speed': 33.0, 'heading': 216, 'distance': 472.76228513215 }, { 'latitude': 24.4522495269775, 'longitude': 120.725463867188, 'time': '2021-11-10T01:29:29Z', 'elevation': 398.0, 'speed': 32.0, 'heading': 216, 'distance': 5436.93205690765 }, { 'latitude': 24.4487419128418, 'longitude': 120.723045349121, 'time': '2021-11-10T01:29:44Z', 'elevation': 408.0, 'speed': 30.0, 'heading': 216, 'distance': 459.437470388039 }, { 'latitude': 24.4094791412354, 'longitude': 120.692779541016, 'time': '2021-11-10T01:32:31Z', 'elevation': 323.0, 'speed': 33.0, 'heading': 217, 'distance': 5322.94249964987 }, { 'latitude': 24.4059677124023, 'longitude': 120.68970489502, 'time': '2021-11-10T01:32:46Z', 'elevation': 316.0, 'speed': 33.0, 'heading': 217, 'distance': 498.527341919596 }, { 'latitude': 24.366174697876, 'longitude': 120.661109924316, 'time': '2021-11-10T01:35:33Z', 'elevation': 352.0, 'speed': 31.0, 'heading': 210, 'distance': 5276.55784423144 }, { 'latitude': 24.3624706268311, 'longitude': 120.659286499023, 'time': '2021-11-10T01:35:48Z', 'elevation': 360.0, 'speed': 30.0, 'heading': 202, 'distance': 450.061418670523 }, { 'latitude': 24.3201313018799, 'longitude': 120.64705657959, 'time': '2021-11-10T01:38:35Z', 'elevation': 323.0, 'speed': 28.0, 'heading': 186, 'distance': 4851.08894413801 }, { 'latitude': 24.3163814544678, 'longitude': 120.646697998047, 'time': '2021-11-10T01:38:50Z', 'elevation': 313.0, 'speed': 28.0, 'heading': 181, 'distance': 416.93535988519 }, { 'latitude': 24.280689239502, 'longitude': 120.640975952148, 'time': '2021-11-10T01:41:37Z', 'elevation': 312.0, 'speed': 23.0, 'heading': 179, 'distance': 3995.80777934483 }, { 'latitude': 24.2774791717529, 'longitude': 120.64045715332, 'time': '2021-11-10T01:41:52Z', 'elevation': 318.0, 'speed': 24.0, 'heading': 191, 'distance': 359.434964008033 }, { 'latitude': 24.2396869659424, 'longitude': 120.63264465332, 'time': '2021-11-10T01:44:39Z', 'elevation': 296.0, 'speed': 26.0, 'heading': 195, 'distance': 4260.45460336694 }, { 'latitude': 24.2362041473389, 'longitude': 120.632225036621, 'time': '2021-11-10T01:44:54Z', 'elevation': 288.0, 'speed': 26.0, 'heading': 197, 'distance': 388.109803840548 }, { 'latitude': 24.1971874237061, 'longitude': 120.622428894043, 'time': '2021-11-10T01:47:41Z', 'elevation': 278.0, 'speed': 28.0, 'heading': 198, 'distance': 4434.63363846678 }, { 'latitude': 24.193675994873, 'longitude': 120.621444702148, 'time': '2021-11-10T01:47:56Z', 'elevation': 279.0, 'speed': 27.0, 'heading': 191, 'distance': 401.577492570784 }, { 'latitude': 24.153299331665, 'longitude': 120.615615844727, 'time': '2021-11-10T01:50:43Z', 'elevation': 210.0, 'speed': 24.0, 'heading': 186, 'distance': 4511.20075300285 }, { 'latitude': 24.1499061584473, 'longitude': 120.615493774414, 'time': '2021-11-10T01:50:58Z', 'elevation': 187.0, 'speed': 26.0, 'heading': 175, 'distance': 376.033981682047 }, { 'latitude': 24.1134376525879, 'longitude': 120.621917724609, 'time': '2021-11-10T01:53:45Z', 'elevation': 150.0, 'speed': 23.0, 'heading': 164, 'distance': 4091.69597371374 }, { 'latitude': 24.1104011535645, 'longitude': 120.622932434082, 'time': '2021-11-10T01:54:00Z', 'elevation': 147.0, 'speed': 23.0, 'heading': 167, 'distance': 351.787380829757 }, { 'latitude': 24.0738754272461, 'longitude': 120.623832702637, 'time': '2021-11-10T01:56:47Z', 'elevation': 165.0, 'speed': 24.0, 'heading': 168, 'distance': 4046.6085535044 }, { 'latitude': 24.0705909729004, 'longitude': 120.624816894531, 'time': '2021-11-10T01:57:02Z', 'elevation': 162.0, 'speed': 25.0, 'heading': 176, 'distance': 377.301045501693 }, { 'latitude': 24.0339908599854, 'longitude': 120.633285522461, 'time': '2021-11-10T01:59:49Z', 'elevation': 160.0, 'speed': 24.0, 'heading': 173, 'distance': 4144.29053731518 }, { 'latitude': 24.0307445526123, 'longitude': 120.633766174316, 'time': '2021-11-10T02:00:04Z', 'elevation': 160.0, 'speed': 24.0, 'heading': 171, 'distance': 362.866043221977 }, { 'latitude': 23.9974498748779, 'longitude': 120.645431518555, 'time': '2021-11-10T02:02:51Z', 'elevation': 168.0, 'speed': 22.0, 'heading': 177, 'distance': 3873.94758239875 }, { 'latitude': 23.9944190979004, 'longitude': 120.645980834961, 'time': '2021-11-10T02:03:06Z', 'elevation': 172.0, 'speed': 23.0, 'heading': 170, 'distance': 340.305146228288 }, { 'latitude': 23.9626426696777, 'longitude': 120.655456542969, 'time': '2021-11-10T02:05:53Z', 'elevation': 182.0, 'speed': 22.0, 'heading': 175, 'distance': 3649.21188800688 }, { 'latitude': 23.9597034454346, 'longitude': 120.655975341797, 'time': '2021-11-10T02:06:08Z', 'elevation': 186.0, 'speed': 21.0, 'heading': 166, 'distance': 329.796374261975 }, { 'latitude': 23.9300403594971, 'longitude': 120.654884338379, 'time': '2021-11-10T02:08:55Z', 'elevation': 332.0, 'speed': 20.0, 'heading': 199, 'distance': 3287.28353695398 }, { 'latitude': 23.9274883270264, 'longitude': 120.653686523438, 'time': '2021-11-10T02:09:10Z', 'elevation': 358.0, 'speed': 20.0, 'heading': 209, 'distance': 307.83990142015 }, { 'latitude': 23.9084205627441, 'longitude': 120.622619628906, 'time': '2021-11-10T02:11:57Z', 'elevation': 401.0, 'speed': 28.0, 'heading': 252, 'distance': 3803.33485670168 }, { 'latitude': 23.9069023132324, 'longitude': 120.619049072266, 'time': '2021-11-10T02:12:12Z', 'elevation': 395.0, 'speed': 26.0, 'heading': 240, 'distance': 400.573615909317 }, { 'latitude': 23.8799724578857, 'longitude': 120.589340209961, 'time': '2021-11-10T02:14:59Z', 'elevation': 314.0, 'speed': 25.0, 'heading': 208, 'distance': 4248.4580124597 }, { 'latitude': 23.877124786377, 'longitude': 120.587585449219, 'time': '2021-11-10T02:15:14Z', 'elevation': 287.0, 'speed': 23.0, 'heading': 209, 'distance': 362.513109789836 }, { 'latitude': 23.8448696136475, 'longitude': 120.590141296387, 'time': '2021-11-10T02:18:01Z', 'elevation': 236.0, 'speed': 20.0, 'heading': 197, 'distance': 3581.93438739014 }, { 'latitude': 23.8421249389648, 'longitude': 120.589324951172, 'time': '2021-11-10T02:18:16Z', 'elevation': 225.0, 'speed': 21.0, 'heading': 182, 'distance': 315.159861100908 }, { 'latitude': 23.811206817627, 'longitude': 120.597663879395, 'time': '2021-11-10T02:21:03Z', 'elevation': 190.0, 'speed': 21.0, 'heading': 163, 'distance': 3528.18798870428 }, { 'latitude': 23.8086452484131, 'longitude': 120.598564147949, 'time': '2021-11-10T02:21:18Z', 'elevation': 194.0, 'speed': 18.0, 'heading': 150, 'distance': 298.171072774178 }, { 'latitude': 23.7903633117676, 'longitude': 120.620414733887, 'time': '2021-11-10T02:24:05Z', 'elevation': 195.0, 'speed': 18.0, 'heading': 104, 'distance': 3009.71668094155 }, { 'latitude': 23.7886753082275, 'longitude': 120.622436523438, 'time': '2021-11-10T02:24:20Z', 'elevation': 185.0, 'speed': 18.0, 'heading': 136, 'distance': 278.22729726868 }, { 'latitude': 23.7754306793213, 'longitude': 120.645393371582, 'time': '2021-11-10T02:27:07Z', 'elevation': 148.0, 'speed': 18.0, 'heading': 119, 'distance': 2761.62430115191 }, { 'latitude': 23.7745532989502, 'longitude': 120.647834777832, 'time': '2021-11-10T02:27:22Z', 'elevation': 139.0, 'speed': 19.0, 'heading': 81, 'distance': 267.147663361164 }, { 'latitude': 23.7673168182373, 'longitude': 120.667015075684, 'time': '2021-11-10T02:30:08Z', 'elevation': 132.0, 'speed': 0.0, 'heading': 340, 'distance': 2112.97307499404 }, { 'latitude': 23.7672824859619, 'longitude': 120.667030334473, 'time': '2021-11-10T02:30:24Z', 'elevation': 117.0, 'speed': 0.0, 'heading': 23, 'distance': 4.10827780134536 }, { 'latitude': 23.767333984375, 'longitude': 120.666984558105, 'time': '2021-11-10T02:33:10Z', 'elevation': 117.0, 'speed': 0.0, 'heading': 146, 'distance': 7.36918796456199 }, { 'latitude': 23.7672557830811, 'longitude': 120.666870117188, 'time': '2021-11-10T02:33:25Z', 'elevation': 117.0, 'speed': 0.0, 'heading': 271, 'distance': 14.5292020706422 }, { 'latitude': 23.7671279907227, 'longitude': 120.666770935059, 'time': '2021-11-10T02:36:12Z', 'elevation': 117.0, 'speed': 0.0, 'heading': 103, 'distance': 17.3936143872705 }, { 'latitude': 23.767448425293, 'longitude': 120.666923522949, 'time': '2021-11-10T02:36:27Z', 'elevation': 117.0, 'speed': 0.0, 'heading': 3, 'distance': 38.748435257933 }, { 'latitude': 23.7669410705566, 'longitude': 120.667045593262, 'time': '2021-11-10T02:39:14Z', 'elevation': 117.0, 'speed': 3.0, 'heading': 147, 'distance': 57.5532168824635 }, { 'latitude': 23.7672824859619, 'longitude': 120.666900634766, 'time': '2021-11-10T02:39:29Z', 'elevation': 117.0, 'speed': 0.0, 'heading': 45, 'distance': 40.5979168988608 }, { 'latitude': 23.7672519683838, 'longitude': 120.666946411133, 'time': '2021-11-10T02:42:16Z', 'elevation': 117.0, 'speed': 0.0, 'heading': 342, 'distance': 5.76167944620994 }, { 'latitude': 23.767261505127, 'longitude': 120.666938781738, 'time': '2021-11-10T02:42:31Z', 'elevation': 117.0, 'speed': 0.0, 'heading': 352, 'distance': 1.31165667589164 }, { 'latitude': 23.7669239044189, 'longitude': 120.667152404785, 'time': '2021-11-10T02:45:18Z', 'elevation': 117.0, 'speed': 1.0, 'heading': 126, 'distance': 43.2695260437474 }, { 'latitude': 23.767261505127, 'longitude': 120.666969299316, 'time': '2021-11-10T02:45:34Z', 'elevation': 116.0, 'speed': 0.0, 'heading': 164, 'distance': 41.7905665833153 }, { 'latitude': 23.7672634124756, 'longitude': 120.667068481445, 'time': '2021-11-10T02:48:20Z', 'elevation': 116.0, 'speed': 0.0, 'heading': 309, 'distance': 10.11223065924 }, { 'latitude': 23.7673473358154, 'longitude': 120.6669921875, 'time': '2021-11-10T02:48:35Z', 'elevation': 116.0, 'speed': 0.0, 'heading': 222, 'distance': 12.1192529503245 }, { 'latitude': 23.7622680664062, 'longitude': 120.671562194824, 'time': '2021-11-10T02:54:24Z', 'elevation': 124.0, 'speed': 9.0, 'heading': 104, 'distance': 730.397514137709 }, { 'latitude': 23.761043548584, 'longitude': 120.67098236084, 'time': '2021-11-10T02:54:39Z', 'elevation': 139.0, 'speed': 10.0, 'heading': 203, 'distance': 147.94183050553 }, { 'latitude': 23.7610569000244, 'longitude': 120.673179626465, 'time': '2021-11-10T02:57:27Z', 'elevation': 139.0, 'speed': 1.0, 'heading': 259, 'distance': 223.991427894477 }, { 'latitude': 23.7611312866211, 'longitude': 120.673347473145, 'time': '2021-11-10T02:57:42Z', 'elevation': 139.0, 'speed': 0.0, 'heading': 272, 'distance': 18.9902728663091 }, { 'latitude': 23.7610931396484, 'longitude': 120.673027038574, 'time': '2021-11-10T03:00:44Z', 'elevation': 139.0, 'speed': 0.0, 'heading': 294, 'distance': 32.9367911084025 }, { 'latitude': 23.7612075805664, 'longitude': 120.673110961914, 'time': '2021-11-10T03:03:30Z', 'elevation': 139.0, 'speed': 0.0, 'heading': 332, 'distance': 15.2918666254221 }, { 'latitude': 23.7612438201904, 'longitude': 120.673126220703, 'time': '2021-11-10T03:03:45Z', 'elevation': 139.0, 'speed': 0.0, 'heading': 332, 'distance': 4.30456730246852 }, { 'latitude': 23.7610721588135, 'longitude': 120.673263549805, 'time': '2021-11-10T03:06:48Z', 'elevation': 172.0, 'speed': 0.0, 'heading': 284, 'distance': 23.6102602942188 }, { 'latitude': 23.7612190246582, 'longitude': 120.672775268555, 'time': '2021-11-10T03:09:34Z', 'elevation': 172.0, 'speed': 0.0, 'heading': 283, 'distance': 52.3651770112421 }, { 'latitude': 23.7611331939697, 'longitude': 120.67308807373, 'time': '2021-11-10T03:09:50Z', 'elevation': 178.0, 'speed': 0.0, 'heading': 95, 'distance': 33.2737764324797 }, { 'latitude': 23.7609939575195, 'longitude': 120.673568725586, 'time': '2021-11-10T03:12:52Z', 'elevation': 177.0, 'speed': 1.0, 'heading': 111, 'distance': 51.3665408650228 }, { 'latitude': 23.7610530853271, 'longitude': 120.673408508301, 'time': '2021-11-10T03:15:53Z', 'elevation': 177.0, 'speed': 0.0, 'heading': 111, 'distance': 17.5963390801544 }, { 'latitude': 23.7615699768066, 'longitude': 120.67261505127, 'time': '2021-11-10T03:18:55Z', 'elevation': 106.0, 'speed': 0.0, 'heading': 44, 'distance': 99.0936791954772 }, { 'latitude': 23.7611999511719, 'longitude': 120.673324584961, 'time': '2021-11-10T03:25:03Z', 'elevation': 206.0, 'speed': 0.0, 'heading': 293, 'distance': 83.1323597749114 }, { 'latitude': 23.7611522674561, 'longitude': 120.673271179199, 'time': '2021-11-10T03:37:11Z', 'elevation': 166.0, 'speed': 0.0, 'heading': 19, 'distance': 7.58478477959551 }, { 'latitude': 23.761157989502, 'longitude': 120.673271179199, 'time': '2021-11-10T03:39:57Z', 'elevation': 165.0, 'speed': 1.0, 'heading': 54, 'distance': 0.633743951980497 }, { 'latitude': 23.7612533569336, 'longitude': 120.67317199707, 'time': '2021-11-10T03:40:13Z', 'elevation': 165.0, 'speed': 0.0, 'heading': 73, 'distance': 14.6214336925151 }, { 'latitude': 23.7612152099609, 'longitude': 120.673164367676, 'time': '2021-11-10T03:43:00Z', 'elevation': 167.0, 'speed': 1.0, 'heading': 328, 'distance': 4.2959444831132 }, { 'latitude': 23.7612247467041, 'longitude': 120.673065185547, 'time': '2021-11-10T03:43:15Z', 'elevation': 169.0, 'speed': 1.0, 'heading': 296, 'distance': 10.1655135436046 }, { 'latitude': 23.7611446380615, 'longitude': 120.673248291016, 'time': '2021-11-10T03:46:01Z', 'elevation': 170.0, 'speed': 0.0, 'heading': 318, 'distance': 20.6669211385031 }, { 'latitude': 23.7611446380615, 'longitude': 120.673225402832, 'time': '2021-11-10T03:46:17Z', 'elevation': 172.0, 'speed': 0.0, 'heading': 318, 'distance': 2.3331731304484 }, { 'latitude': 23.7611198425293, 'longitude': 120.673210144043, 'time': '2021-11-10T03:49:19Z', 'elevation': 170.0, 'speed': 0.0, 'heading': 7, 'distance': 3.15613154681002 }, { 'latitude': 23.761251449585, 'longitude': 120.673133850098, 'time': '2021-11-10T03:52:06Z', 'elevation': 170.0, 'speed': 0.0, 'heading': 307, 'distance': 16.521181731669 }, { 'latitude': 23.7611141204834, 'longitude': 120.673217773438, 'time': '2021-11-10T03:52:21Z', 'elevation': 170.0, 'speed': 0.0, 'heading': 65, 'distance': 17.4507385556631 }, { 'latitude': 23.7611541748047, 'longitude': 120.673309326172, 'time': '2021-11-10T03:55:23Z', 'elevation': 171.0, 'speed': 0.0, 'heading': 108, 'distance': 10.3334638097 }, { 'latitude': 23.7609767913818, 'longitude': 120.67333984375, 'time': '2021-11-10T06:39:05Z', 'elevation': 169.0, 'speed': 1.0, 'heading': 194, 'distance': 19.8908385293937 }, { 'latitude': 24.0098266601562, 'longitude': 120.641914367676, 'time': '2021-11-10T07:06:20Z', 'elevation': 52.0, 'speed': 8.0, 'heading': 137, 'distance': 27746.9486397811 }],
    [{ 'latitude': 25.4056758880615, 'longitude': 121.991912841797, 'time': '2021-11-09T23:31:54Z', 'elevation': 88.0, 'speed': 17.0, 'heading': 215, 'distance': 0.0 }, { 'latitude': 25.4046516418457, 'longitude': 121.991104125977, 'time': '2021-11-09T23:32:00Z', 'elevation': 88.0, 'speed': 19.0, 'heading': 210, 'distance': 139.62590976769 }, { 'latitude': 25.4019050598145, 'longitude': 121.990272521973, 'time': '2021-11-09T23:32:15Z', 'elevation': 103.0, 'speed': 22.0, 'heading': 202, 'distance': 315.559230382363 }, { 'latitude': 25.3992481231689, 'longitude': 121.988945007324, 'time': '2021-11-09T23:32:30Z', 'elevation': 114.0, 'speed': 24.0, 'heading': 187, 'distance': 323.22419387511 }, { 'latitude': 25.3962268829346, 'longitude': 121.987518310547, 'time': '2021-11-09T23:32:45Z', 'elevation': 122.0, 'speed': 24.0, 'heading': 213, 'distance': 364.178494378818 }, { 'latitude': 25.3935852050781, 'longitude': 121.985725402832, 'time': '2021-11-09T23:33:00Z', 'elevation': 135.0, 'speed': 23.0, 'heading': 204, 'distance': 343.784169751188 }, { 'latitude': 25.390510559082, 'longitude': 121.984062194824, 'time': '2021-11-09T23:33:15Z', 'elevation': 143.0, 'speed': 25.0, 'heading': 210, 'distance': 379.503477960164 }, { 'latitude': 25.3874893188477, 'longitude': 121.982521057129, 'time': '2021-11-09T23:33:30Z', 'elevation': 158.0, 'speed': 23.0, 'heading': 209, 'distance': 368.873988060293 }, { 'latitude': 25.384407043457, 'longitude': 121.981460571289, 'time': '2021-11-09T23:33:45Z', 'elevation': 179.0, 'speed': 25.0, 'heading': 189, 'distance': 357.739224173462 }, { 'latitude': 25.3810653686523, 'longitude': 121.979942321777, 'time': '2021-11-09T23:34:00Z', 'elevation': 177.0, 'speed': 25.0, 'heading': 201, 'distance': 400.477595925218 }, { 'latitude': 25.3777046203613, 'longitude': 121.978401184082, 'time': '2021-11-09T23:34:15Z', 'elevation': 176.0, 'speed': 25.0, 'heading': 200, 'distance': 403.313141165402 }, { 'latitude': 25.3742485046387, 'longitude': 121.97713470459, 'time': '2021-11-09T23:34:30Z', 'elevation': 178.0, 'speed': 27.0, 'heading': 203, 'distance': 403.52231653673 }, { 'latitude': 25.3387584686279, 'longitude': 121.956748962402, 'time': '2021-11-09T23:37:17Z', 'elevation': 206.0, 'speed': 26.0, 'heading': 210, 'distance': 4434.79790018175 }, { 'latitude': 25.335485458374, 'longitude': 121.95482635498, 'time': '2021-11-09T23:37:32Z', 'elevation': 211.0, 'speed': 27.0, 'heading': 210, 'distance': 411.005628291308 }, { 'latitude': 25.2982540130615, 'longitude': 121.931503295898, 'time': '2021-11-09T23:40:19Z', 'elevation': 171.0, 'speed': 26.0, 'heading': 217, 'distance': 4746.12524699543 }, { 'latitude': 25.2960014343262, 'longitude': 121.928451538086, 'time': '2021-11-09T23:40:34Z', 'elevation': 165.0, 'speed': 27.0, 'heading': 221, 'distance': 395.87800857363 }, { 'latitude': 25.2580451965332, 'longitude': 121.910369873047, 'time': '2021-11-09T23:43:21Z', 'elevation': 115.0, 'speed': 28.0, 'heading': 187, 'distance': 4582.16234968096 }, { 'latitude': 25.2546005249023, 'longitude': 121.908767700195, 'time': '2021-11-09T23:43:36Z', 'elevation': 112.0, 'speed': 28.0, 'heading': 195, 'distance': 414.320157212377 }, { 'latitude': 25.2156734466553, 'longitude': 121.898872375488, 'time': '2021-11-09T23:46:23Z', 'elevation': 152.0, 'speed': 24.0, 'heading': 209, 'distance': 4425.96203268499 }, { 'latitude': 25.212739944458, 'longitude': 121.896957397461, 'time': '2021-11-09T23:46:38Z', 'elevation': 156.0, 'speed': 24.0, 'heading': 213, 'distance': 377.944145519324 }, { 'latitude': 25.1776123046875, 'longitude': 121.878356933594, 'time': '2021-11-09T23:49:25Z', 'elevation': 185.0, 'speed': 25.0, 'heading': 196, 'distance': 4319.35314383886 }, { 'latitude': 25.1744251251221, 'longitude': 121.876792907715, 'time': '2021-11-09T23:49:40Z', 'elevation': 185.0, 'speed': 25.0, 'heading': 204, 'distance': 386.66519190343 }, { 'latitude': 25.1453895568848, 'longitude': 121.853134155273, 'time': '2021-11-09T23:52:27Z', 'elevation': 220.0, 'speed': 24.0, 'heading': 223, 'distance': 4004.34853302049 }, { 'latitude': 25.1426849365234, 'longitude': 121.851097106934, 'time': '2021-11-09T23:52:42Z', 'elevation': 244.0, 'speed': 24.0, 'heading': 211, 'distance': 363.251832595351 }, { 'latitude': 25.1184597015381, 'longitude': 121.822174072266, 'time': '2021-11-09T23:55:29Z', 'elevation': 207.0, 'speed': 23.0, 'heading': 245, 'distance': 3963.39497489238 }, { 'latitude': 25.1181335449219, 'longitude': 121.819076538086, 'time': '2021-11-09T23:55:44Z', 'elevation': 217.0, 'speed': 21.0, 'heading': 234, 'distance': 314.478629530649 }, { 'latitude': 25.1023349761963, 'longitude': 121.787391662598, 'time': '2021-11-09T23:58:31Z', 'elevation': 165.0, 'speed': 24.0, 'heading': 245, 'distance': 3643.55252927882 }, { 'latitude': 25.1010856628418, 'longitude': 121.78409576416, 'time': '2021-11-09T23:58:46Z', 'elevation': 157.0, 'speed': 23.0, 'heading': 245, 'distance': 360.101668225124 }, { 'latitude': 25.0956554412842, 'longitude': 121.746719360352, 'time': '2021-11-10T00:01:33Z', 'elevation': 88.0, 'speed': 23.0, 'heading': 252, 'distance': 3817.82730679054 }, { 'latitude': 25.0950050354004, 'longitude': 121.743270874023, 'time': '2021-11-10T00:01:48Z', 'elevation': 91.0, 'speed': 23.0, 'heading': 247, 'distance': 355.238914591494 }, { 'latitude': 25.0880680084229, 'longitude': 121.707504272461, 'time': '2021-11-10T00:04:35Z', 'elevation': 105.0, 'speed': 22.0, 'heading': 260, 'distance': 3688.88816816077 }, { 'latitude': 25.0872497558594, 'longitude': 121.704231262207, 'time': '2021-11-10T00:04:50Z', 'elevation': 97.0, 'speed': 23.0, 'heading': 257, 'distance': 342.391501536449 }, { 'latitude': 25.0715885162354, 'longitude': 121.671577453613, 'time': '2021-11-10T00:07:37Z', 'elevation': 82.0, 'speed': 22.0, 'heading': 223, 'distance': 3723.17550239397 }, { 'latitude': 25.0698299407959, 'longitude': 121.668762207031, 'time': '2021-11-10T00:07:52Z', 'elevation': 73.0, 'speed': 21.0, 'heading': 244, 'distance': 344.420491540101 }, { 'latitude': 25.0543403625488, 'longitude': 121.637802124023, 'time': '2021-11-10T00:10:39Z', 'elevation': 110.0, 'speed': 24.0, 'heading': 241, 'distance': 3564.0635940273 }, { 'latitude': 25.0528717041016, 'longitude': 121.634582519531, 'time': '2021-11-10T00:10:54Z', 'elevation': 107.0, 'speed': 23.0, 'heading': 239, 'distance': 363.336563984377 }, { 'latitude': 25.04123878479, 'longitude': 121.598327636719, 'time': '2021-11-10T00:13:41Z', 'elevation': 64.0, 'speed': 25.0, 'heading': 258, 'distance': 3878.84599150017 }, { 'latitude': 25.0404777526855, 'longitude': 121.594673156738, 'time': '2021-11-10T00:13:56Z', 'elevation': 49.0, 'speed': 23.0, 'heading': 259, 'distance': 378.31046713433 }, { 'latitude': 25.0296592712402, 'longitude': 121.560264587402, 'time': '2021-11-10T00:16:43Z', 'elevation': 56.0, 'speed': 22.0, 'heading': 267, 'distance': 3673.53327404334 }, { 'latitude': 25.0292739868164, 'longitude': 121.557121276855, 'time': '2021-11-10T00:16:58Z', 'elevation': 60.0, 'speed': 20.0, 'heading': 257, 'distance': 320.099748233901 }, { 'latitude': 25.0119667053223, 'longitude': 121.526260375977, 'time': '2021-11-10T00:19:45Z', 'elevation': 43.0, 'speed': 21.0, 'heading': 242, 'distance': 3657.61304247462 }, { 'latitude': 25.0106906890869, 'longitude': 121.523292541504, 'time': '2021-11-10T00:20:00Z', 'elevation': 40.0, 'speed': 21.0, 'heading': 238, 'distance': 331.247495183548 }, { 'latitude': 24.9942016601562, 'longitude': 121.491676330566, 'time': '2021-11-10T00:22:47Z', 'elevation': 45.0, 'speed': 26.0, 'heading': 239, 'distance': 3677.2988238229 }, { 'latitude': 24.9925785064697, 'longitude': 121.488464355469, 'time': '2021-11-10T00:23:02Z', 'elevation': 42.0, 'speed': 22.0, 'heading': 239, 'distance': 370.77926707945 }, { 'latitude': 24.9769554138184, 'longitude': 121.454750061035, 'time': '2021-11-10T00:25:48Z', 'elevation': 53.0, 'speed': 24.0, 'heading': 238, 'distance': 3818.56242475278 }, { 'latitude': 24.9752349853516, 'longitude': 121.451522827148, 'time': '2021-11-10T00:26:04Z', 'elevation': 49.0, 'speed': 23.0, 'heading': 238, 'distance': 377.490633710891 }, { 'latitude': 24.9550724029541, 'longitude': 121.423736572266, 'time': '2021-11-10T00:28:51Z', 'elevation': 119.0, 'speed': 21.0, 'heading': 227, 'distance': 3586.21399824647 }, { 'latitude': 24.9534854888916, 'longitude': 121.421112060547, 'time': '2021-11-10T00:29:06Z', 'elevation': 128.0, 'speed': 21.0, 'heading': 227, 'distance': 318.038227043624 }, { 'latitude': 24.9290313720703, 'longitude': 121.397895812988, 'time': '2021-11-10T00:31:52Z', 'elevation': 183.0, 'speed': 17.0, 'heading': 222, 'distance': 3582.7132386933 }, { 'latitude': 24.9273338317871, 'longitude': 121.395668029785, 'time': '2021-11-10T00:32:08Z', 'elevation': 204.0, 'speed': 19.0, 'heading': 227, 'distance': 293.249650727239 }, { 'latitude': 24.9078674316406, 'longitude': 121.365013122559, 'time': '2021-11-10T00:34:55Z', 'elevation': 188.0, 'speed': 20.0, 'heading': 234, 'distance': 3773.47898430144 }, { 'latitude': 24.9064598083496, 'longitude': 121.36222076416, 'time': '2021-11-10T00:35:10Z', 'elevation': 194.0, 'speed': 22.0, 'heading': 231, 'distance': 322.324412605277 }, { 'latitude': 24.8898773193359, 'longitude': 121.329177856445, 'time': '2021-11-10T00:37:57Z', 'elevation': 187.0, 'speed': 25.0, 'heading': 273, 'distance': 3810.40393951067 }, { 'latitude': 24.8888568878174, 'longitude': 121.32593536377, 'time': '2021-11-10T00:38:12Z', 'elevation': 194.0, 'speed': 22.0, 'heading': 234, 'distance': 346.573568610368 }, { 'latitude': 24.8665466308594, 'longitude': 121.299530029297, 'time': '2021-11-10T00:40:59Z', 'elevation': 224.0, 'speed': 21.0, 'heading': 211, 'distance': 3636.90153280652 }, { 'latitude': 24.8641510009766, 'longitude': 121.297760009766, 'time': '2021-11-10T00:41:14Z', 'elevation': 235.0, 'speed': 21.0, 'heading': 217, 'distance': 320.025670126396 }, { 'latitude': 24.8374481201172, 'longitude': 121.275459289551, 'time': '2021-11-10T00:44:01Z', 'elevation': 256.0, 'speed': 22.0, 'heading': 212, 'distance': 3718.80791319079 }, { 'latitude': 24.8349514007568, 'longitude': 121.273155212402, 'time': '2021-11-10T00:44:16Z', 'elevation': 245.0, 'speed': 24.0, 'heading': 222, 'distance': 361.56786057899 }, { 'latitude': 24.8128547668457, 'longitude': 121.247314453125, 'time': '2021-11-10T00:47:03Z', 'elevation': 248.0, 'speed': 23.0, 'heading': 204, 'distance': 3579.84259642668 }, { 'latitude': 24.8102073669434, 'longitude': 121.24649810791, 'time': '2021-11-10T00:47:18Z', 'elevation': 267.0, 'speed': 21.0, 'heading': 222, 'distance': 304.646102072151 }, { 'latitude': 24.7902641296387, 'longitude': 121.21989440918, 'time': '2021-11-10T00:50:05Z', 'elevation': 384.0, 'speed': 26.0, 'heading': 229, 'distance': 3480.82149743682 }, { 'latitude': 24.7881259918213, 'longitude': 121.216644287109, 'time': '2021-11-10T00:50:20Z', 'elevation': 382.0, 'speed': 27.0, 'heading': 236, 'distance': 405.10436489399 }, { 'latitude': 24.7696914672852, 'longitude': 121.181488037109, 'time': '2021-11-10T00:53:07Z', 'elevation': 373.0, 'speed': 22.0, 'heading': 226, 'distance': 4100.02730458362 }, { 'latitude': 24.7677135467529, 'longitude': 121.178741455078, 'time': '2021-11-10T00:53:22Z', 'elevation': 371.0, 'speed': 23.0, 'heading': 236, 'distance': 353.788147312905 }, { 'latitude': 24.7494964599609, 'longitude': 121.145980834961, 'time': '2021-11-10T00:56:09Z', 'elevation': 392.0, 'speed': 27.0, 'heading': 254, 'distance': 3879.68717267362 }, { 'latitude': 24.7482452392578, 'longitude': 121.142105102539, 'time': '2021-11-10T00:56:24Z', 'elevation': 377.0, 'speed': 28.0, 'heading': 246, 'distance': 415.824381230907 }, { 'latitude': 24.725980758667, 'longitude': 121.106803894043, 'time': '2021-11-10T00:59:11Z', 'elevation': 265.0, 'speed': 24.0, 'heading': 243, 'distance': 4340.01363735464 }, { 'latitude': 24.7244911193848, 'longitude': 121.103530883789, 'time': '2021-11-10T00:59:26Z', 'elevation': 252.0, 'speed': 23.0, 'heading': 248, 'distance': 369.97519863136 }, { 'latitude': 24.7037410736084, 'longitude': 121.07292175293, 'time': '2021-11-10T01:02:13Z', 'elevation': 250.0, 'speed': 28.0, 'heading': 246, 'distance': 3856.80677348941 }, { 'latitude': 24.7020664215088, 'longitude': 121.069664001465, 'time': '2021-11-10T01:02:28Z', 'elevation': 247.0, 'speed': 24.0, 'heading': 249, 'distance': 378.263523936631 }, { 'latitude': 24.6893653869629, 'longitude': 121.030570983887, 'time': '2021-11-10T01:05:15Z', 'elevation': 164.0, 'speed': 26.0, 'heading': 257, 'distance': 4198.81855683306 }, { 'latitude': 24.688720703125, 'longitude': 121.026756286621, 'time': '2021-11-10T01:05:30Z', 'elevation': 154.0, 'speed': 24.0, 'heading': 258, 'distance': 392.60656169354 }, { 'latitude': 24.6777439117432, 'longitude': 120.990821838379, 'time': '2021-11-10T01:08:17Z', 'elevation': 174.0, 'speed': 23.0, 'heading': 239, 'distance': 3834.69715192374 }, { 'latitude': 24.6763000488281, 'longitude': 120.987785339355, 'time': '2021-11-10T01:08:32Z', 'elevation': 186.0, 'speed': 22.0, 'heading': 242, 'distance': 346.455474088938 }, { 'latitude': 24.6597290039062, 'longitude': 120.952735900879, 'time': '2021-11-10T01:11:19Z', 'elevation': 190.0, 'speed': 23.0, 'heading': 247, 'distance': 3994.41220744797 }, { 'latitude': 24.657958984375, 'longitude': 120.949951171875, 'time': '2021-11-10T01:11:34Z', 'elevation': 205.0, 'speed': 23.0, 'heading': 229, 'distance': 343.368489149557 }, { 'latitude': 24.6355724334717, 'longitude': 120.916412353516, 'time': '2021-11-10T01:14:21Z', 'elevation': 231.0, 'speed': 28.0, 'heading': 233, 'distance': 4204.45306833129 }, { 'latitude': 24.6330318450928, 'longitude': 120.913139343262, 'time': '2021-11-10T01:14:36Z', 'elevation': 235.0, 'speed': 29.0, 'heading': 228, 'distance': 434.75065264574 }, { 'latitude': 24.6078758239746, 'longitude': 120.874206542969, 'time': '2021-11-10T01:17:23Z', 'elevation': 293.0, 'speed': 30.0, 'heading': 234, 'distance': 4827.60514723198 }, { 'latitude': 24.6053791046143, 'longitude': 120.870597839355, 'time': '2021-11-10T01:17:38Z', 'elevation': 297.0, 'speed': 29.0, 'heading': 232, 'distance': 458.297013137345 }, { 'latitude': 24.57346534729, 'longitude': 120.832801818848, 'time': '2021-11-10T01:20:25Z', 'elevation': 300.0, 'speed': 30.0, 'heading': 223, 'distance': 5210.60619431822 }, { 'latitude': 24.5707340240479, 'longitude': 120.829330444336, 'time': '2021-11-10T01:20:40Z', 'elevation': 309.0, 'speed': 30.0, 'heading': 230, 'distance': 463.875337352106 }, { 'latitude': 24.5365905761719, 'longitude': 120.796333312988, 'time': '2021-11-10T01:23:27Z', 'elevation': 343.0, 'speed': 32.0, 'heading': 219, 'distance': 5047.64440171585 }, { 'latitude': 24.533073425293, 'longitude': 120.793525695801, 'time': '2021-11-10T01:23:42Z', 'elevation': 351.0, 'speed': 32.0, 'heading': 217, 'distance': 482.396110363914 }, { 'latitude': 24.497631072998, 'longitude': 120.758987426758, 'time': '2021-11-10T01:26:29Z', 'elevation': 391.0, 'speed': 30.0, 'heading': 217, 'distance': 5259.58574524508 }, { 'latitude': 24.4943428039551, 'longitude': 120.756164550781, 'time': '2021-11-10T01:26:44Z', 'elevation': 399.0, 'speed': 31.0, 'heading': 216, 'distance': 463.169782436079 }, { 'latitude': 24.4538879394531, 'longitude': 120.727188110352, 'time': '2021-11-10T01:29:31Z', 'elevation': 364.0, 'speed': 28.0, 'heading': 204, 'distance': 5358.00039725739 }, { 'latitude': 24.4505558013916, 'longitude': 120.725463867188, 'time': '2021-11-10T01:29:46Z', 'elevation': 380.0, 'speed': 28.0, 'heading': 214, 'distance': 408.395549410024 }, { 'latitude': 24.4130439758301, 'longitude': 120.698196411133, 'time': '2021-11-10T01:32:34Z', 'elevation': 300.0, 'speed': 30.0, 'heading': 219, 'distance': 4990.99632483171 }, { 'latitude': 24.4096126556396, 'longitude': 120.695610046387, 'time': '2021-11-10T01:32:49Z', 'elevation': 267.0, 'speed': 29.0, 'heading': 218, 'distance': 461.80636605176 }, { 'latitude': 24.3721790313721, 'longitude': 120.672225952148, 'time': '2021-11-10T01:35:36Z', 'elevation': 235.0, 'speed': 29.0, 'heading': 203, 'distance': 4776.89855132756 }, { 'latitude': 24.3686141967773, 'longitude': 120.670555114746, 'time': '2021-11-10T01:35:51Z', 'elevation': 244.0, 'speed': 28.0, 'heading': 204, 'distance': 429.705505406376 }, { 'latitude': 24.331148147583, 'longitude': 120.660842895508, 'time': '2021-11-10T01:38:38Z', 'elevation': 282.0, 'speed': 26.0, 'heading': 201, 'distance': 4265.28597641628 }, { 'latitude': 24.3278884887695, 'longitude': 120.660125732422, 'time': '2021-11-10T01:38:53Z', 'elevation': 293.0, 'speed': 25.0, 'heading': 187, 'distance': 368.313122138423 }, { 'latitude': 24.293571472168, 'longitude': 120.658012390137, 'time': '2021-11-10T01:41:40Z', 'elevation': 292.0, 'speed': 25.0, 'heading': 194, 'distance': 3807.09484368859 }, { 'latitude': 24.2902336120605, 'longitude': 120.657554626465, 'time': '2021-11-10T01:41:55Z', 'elevation': 294.0, 'speed': 23.0, 'heading': 181, 'distance': 372.618938808942 }, { 'latitude': 24.2557029724121, 'longitude': 120.660125732422, 'time': '2021-11-10T01:44:42Z', 'elevation': 255.0, 'speed': 24.0, 'heading': 177, 'distance': 3833.58801809919 }, { 'latitude': 24.2526187896729, 'longitude': 120.660736083984, 'time': '2021-11-10T01:44:57Z', 'elevation': 259.0, 'speed': 22.0, 'heading': 164, 'distance': 347.187413952152 }, { 'latitude': 24.2198276519775, 'longitude': 120.666397094727, 'time': '2021-11-10T01:47:44Z', 'elevation': 229.0, 'speed': 20.0, 'heading': 168, 'distance': 3677.22815692988 }, { 'latitude': 24.2169094085693, 'longitude': 120.666961669922, 'time': '2021-11-10T01:47:59Z', 'elevation': 223.0, 'speed': 22.0, 'heading': 166, 'distance': 328.276873785296 }, { 'latitude': 24.1877136230469, 'longitude': 120.681602478027, 'time': '2021-11-10T01:50:46Z', 'elevation': 204.0, 'speed': 20.0, 'heading': 129, 'distance': 3559.4275981807 }, { 'latitude': 24.1853179931641, 'longitude': 120.683303833008, 'time': '2021-11-10T01:51:01Z', 'elevation': 200.0, 'speed': 22.0, 'heading': 159, 'distance': 316.684286601155 }, { 'latitude': 24.1569328308105, 'longitude': 120.695945739746, 'time': '2021-11-10T01:53:48Z', 'elevation': 209.0, 'speed': 21.0, 'heading': 182, 'distance': 3396.28625370124 }, { 'latitude': 24.1539287567139, 'longitude': 120.695686340332, 'time': '2021-11-10T01:54:03Z', 'elevation': 206.0, 'speed': 21.0, 'heading': 179, 'distance': 333.775380942719 }, { 'latitude': 24.1460723876953, 'longitude': 120.697860717773, 'time': '2021-11-10T01:56:49Z', 'elevation': 119.0, 'speed': 0.0, 'heading': 267, 'distance': 897.797329553691 }, { 'latitude': 24.1461124420166, 'longitude': 120.697967529297, 'time': '2021-11-10T01:57:04Z', 'elevation': 73.0, 'speed': 0.0, 'heading': 267, 'distance': 11.727477346968 }, { 'latitude': 24.1460952758789, 'longitude': 120.69792175293, 'time': '2021-11-10T01:59:52Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 329, 'distance': 5.02602780901696 }, { 'latitude': 24.1461029052734, 'longitude': 120.697944641113, 'time': '2021-11-10T02:00:07Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 329, 'distance': 2.47498707155123 }, { 'latitude': 24.1461505889893, 'longitude': 120.697906494141, 'time': '2021-11-10T02:02:53Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 344, 'distance': 6.55177397237448 }, { 'latitude': 24.1460590362549, 'longitude': 120.697929382324, 'time': '2021-11-10T02:03:09Z', 'elevation': 75.0, 'speed': 0.0, 'heading': 344, 'distance': 10.4038176430496 }, { 'latitude': 24.1462593078613, 'longitude': 120.697845458984, 'time': '2021-11-10T02:05:55Z', 'elevation': 75.0, 'speed': 0.0, 'heading': 311, 'distance': 23.7655878693572 }, { 'latitude': 24.1461849212646, 'longitude': 120.697967529297, 'time': '2021-11-10T02:06:11Z', 'elevation': 75.0, 'speed': 0.0, 'heading': 311, 'distance': 14.8933240426594 }, { 'latitude': 24.1460990905762, 'longitude': 120.697891235352, 'time': '2021-11-10T02:08:58Z', 'elevation': 75.0, 'speed': 0.0, 'heading': 104, 'distance': 12.2680297348937 }, { 'latitude': 24.1461448669434, 'longitude': 120.697944641113, 'time': '2021-11-10T02:09:13Z', 'elevation': 75.0, 'speed': 0.0, 'heading': 104, 'distance': 7.4276151803431 }, { 'latitude': 24.1461544036865, 'longitude': 120.697898864746, 'time': '2021-11-10T02:11:59Z', 'elevation': 75.0, 'speed': 0.0, 'heading': 307, 'distance': 4.77091708406067 }, { 'latitude': 24.1461524963379, 'longitude': 120.697830200195, 'time': '2021-11-10T02:12:15Z', 'elevation': 75.0, 'speed': 0.0, 'heading': 307, 'distance': 6.9819690262019 }, { 'latitude': 24.1462631225586, 'longitude': 120.697677612305, 'time': '2021-11-10T02:15:01Z', 'elevation': 75.0, 'speed': 0.0, 'heading': 234, 'distance': 19.7648530756268 }, { 'latitude': 24.1461448669434, 'longitude': 120.697944641113, 'time': '2021-11-10T02:15:17Z', 'elevation': 75.0, 'speed': 0.0, 'heading': 234, 'distance': 30.1352117883203 }, { 'latitude': 24.1461277008057, 'longitude': 120.697624206543, 'time': '2021-11-10T02:18:04Z', 'elevation': 75.0, 'speed': 0.0, 'heading': 26, 'distance': 32.6233144481481 }, { 'latitude': 24.1461791992188, 'longitude': 120.697700500488, 'time': '2021-11-10T02:18:19Z', 'elevation': 75.0, 'speed': 0.0, 'heading': 191, 'distance': 9.62620506289141 }, { 'latitude': 24.1461200714111, 'longitude': 120.697967529297, 'time': '2021-11-10T02:21:06Z', 'elevation': 75.0, 'speed': 0.0, 'heading': 39, 'distance': 27.9188607955033 }, { 'latitude': 24.1462116241455, 'longitude': 120.697914123535, 'time': '2021-11-10T02:21:21Z', 'elevation': 75.0, 'speed': 0.0, 'heading': 353, 'distance': 11.501756677527 }, { 'latitude': 24.1460990905762, 'longitude': 120.697860717773, 'time': '2021-11-10T02:24:08Z', 'elevation': 75.0, 'speed': 0.0, 'heading': 82, 'distance': 13.5948570599691 }, { 'latitude': 24.1461658477783, 'longitude': 120.697860717773, 'time': '2021-11-10T02:24:23Z', 'elevation': 75.0, 'speed': 0.0, 'heading': 63, 'distance': 7.39405002818519 }, { 'latitude': 24.146110534668, 'longitude': 120.697822570801, 'time': '2021-11-10T02:27:10Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 306, 'distance': 7.25023168197612 }, { 'latitude': 24.1461067199707, 'longitude': 120.697898864746, 'time': '2021-11-10T02:27:25Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 200, 'distance': 7.76575701527217 }, { 'latitude': 24.1461563110352, 'longitude': 120.697929382324, 'time': '2021-11-10T02:30:12Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 341, 'distance': 6.30796363388096 }, { 'latitude': 24.146146774292, 'longitude': 120.697914123535, 'time': '2021-11-10T02:30:27Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 341, 'distance': 1.87639388555647 }, { 'latitude': 24.1461544036865, 'longitude': 120.697868347168, 'time': '2021-11-10T02:33:13Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 62, 'distance': 4.72863382402379 }, { 'latitude': 24.1462345123291, 'longitude': 120.697845458984, 'time': '2021-11-10T02:33:29Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 295, 'distance': 9.17273767725918 }, { 'latitude': 24.1461143493652, 'longitude': 120.697906494141, 'time': '2021-11-10T02:36:16Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 202, 'distance': 14.6839633703954 }, { 'latitude': 24.1461372375488, 'longitude': 120.69792175293, 'time': '2021-11-10T02:36:31Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 202, 'distance': 2.97184233917293 }, { 'latitude': 24.146183013916, 'longitude': 120.697967529297, 'time': '2021-11-10T02:39:18Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 209, 'distance': 6.88134274994859 }, { 'latitude': 24.1461601257324, 'longitude': 120.697967529297, 'time': '2021-11-10T02:39:33Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 209, 'distance': 2.5351028796377 }, { 'latitude': 24.1459426879883, 'longitude': 120.698043823242, 'time': '2021-11-10T02:42:19Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 38, 'distance': 25.3010351221919 }, { 'latitude': 24.1459560394287, 'longitude': 120.698059082031, 'time': '2021-11-10T02:42:35Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 38, 'distance': 2.14289194429777 }, { 'latitude': 24.1460971832275, 'longitude': 120.697998046875, 'time': '2021-11-10T02:45:22Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 69, 'distance': 16.8189342053354 }, { 'latitude': 24.1460494995117, 'longitude': 120.698043823242, 'time': '2021-11-10T02:45:37Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 152, 'distance': 7.03845051770367 }, { 'latitude': 24.1460361480713, 'longitude': 120.697959899902, 'time': '2021-11-10T02:48:24Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 304, 'distance': 8.65692738004993 }, { 'latitude': 24.146053314209, 'longitude': 120.697952270508, 'time': '2021-11-10T02:48:39Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 304, 'distance': 2.0533681344174 }, { 'latitude': 24.1460971832275, 'longitude': 120.698135375977, 'time': '2021-11-10T02:51:25Z', 'elevation': 74.0, 'speed': 0.0, 'heading': 266, 'distance': 19.2340709166867 }, { 'latitude': 24.1461391448975, 'longitude': 120.698051452637, 'time': '2021-11-10T02:51:41Z', 'elevation': 76.0, 'speed': 0.0, 'heading': 287, 'distance': 9.71372413076555 }, { 'latitude': 24.1461963653564, 'longitude': 120.697883605957, 'time': '2021-11-10T02:54:28Z', 'elevation': 76.0, 'speed': 0.0, 'heading': 274, 'distance': 18.1985892630092 }, { 'latitude': 24.1462554931641, 'longitude': 120.697914123535, 'time': '2021-11-10T02:54:43Z', 'elevation': 75.0, 'speed': 0.0, 'heading': 96, 'distance': 7.24637803607098 }, { 'latitude': 24.1461849212646, 'longitude': 120.69807434082, 'time': '2021-11-10T02:57:29Z', 'elevation': 76.0, 'speed': 0.0, 'heading': 350, 'distance': 18.0628009366297 }, { 'latitude': 24.1462268829346, 'longitude': 120.69800567627, 'time': '2021-11-10T02:57:45Z', 'elevation': 76.0, 'speed': 0.0, 'heading': 160, 'distance': 8.38476184666136 }, { 'latitude': 24.1459789276123, 'longitude': 120.698013305664, 'time': '2021-11-10T03:00:31Z', 'elevation': 76.0, 'speed': 1.0, 'heading': 106, 'distance': 27.4745588658091 }, { 'latitude': 24.1462287902832, 'longitude': 120.697891235352, 'time': '2021-11-10T03:00:47Z', 'elevation': 77.0, 'speed': 0.0, 'heading': 4, 'distance': 30.3286574064979 }, { 'latitude': 24.1459922790527, 'longitude': 120.697738647461, 'time': '2021-11-10T03:03:34Z', 'elevation': 77.0, 'speed': 0.0, 'heading': 213, 'distance': 30.4425286161082 }, { 'latitude': 24.1460494995117, 'longitude': 120.697799682617, 'time': '2021-11-10T03:03:49Z', 'elevation': 77.0, 'speed': 0.0, 'heading': 213, 'distance': 8.86841774461811 }, { 'latitude': 24.1461486816406, 'longitude': 120.697853088379, 'time': '2021-11-10T03:06:36Z', 'elevation': 77.0, 'speed': 0.0, 'heading': 0, 'distance': 12.2532652412603 }, { 'latitude': 24.1461639404297, 'longitude': 120.697906494141, 'time': '2021-11-10T03:06:51Z', 'elevation': 77.0, 'speed': 0.0, 'heading': 303, 'distance': 5.68496237712631 }, { 'latitude': 24.1460075378418, 'longitude': 120.697746276855, 'time': '2021-11-10T03:09:38Z', 'elevation': 77.0, 'speed': 0.0, 'heading': 285, 'distance': 23.7751964161717 }, { 'latitude': 24.1461086273193, 'longitude': 120.697929382324, 'time': '2021-11-10T03:09:53Z', 'elevation': 77.0, 'speed': 0.0, 'heading': 285, 'distance': 21.7188027952288 }, { 'latitude': 24.1460876464844, 'longitude': 120.697509765625, 'time': '2021-11-10T03:12:40Z', 'elevation': 78.0, 'speed': 0.0, 'heading': 311, 'distance': 42.7116670634371 }, { 'latitude': 24.146110534668, 'longitude': 120.697807312012, 'time': '2021-11-10T03:12:55Z', 'elevation': 78.0, 'speed': 0.0, 'heading': 311, 'distance': 30.3476651250371 }, { 'latitude': 24.146032333374, 'longitude': 120.697807312012, 'time': '2021-11-10T03:15:42Z', 'elevation': 78.0, 'speed': 0.0, 'heading': 153, 'distance': 8.66160139244642 }, { 'latitude': 24.1461372375488, 'longitude': 120.697906494141, 'time': '2021-11-10T03:15:57Z', 'elevation': 78.0, 'speed': 0.0, 'heading': 153, 'distance': 15.3825694614134 }, { 'latitude': 24.1462879180908, 'longitude': 120.697959899902, 'time': '2021-11-10T03:18:44Z', 'elevation': 78.0, 'speed': 0.0, 'heading': 52, 'distance': 17.5499124200558 }, { 'latitude': 24.1462249755859, 'longitude': 120.697952270508, 'time': '2021-11-10T03:18:59Z', 'elevation': 78.0, 'speed': 0.0, 'heading': 358, 'distance': 7.01452394721457 }, { 'latitude': 24.1461544036865, 'longitude': 120.698097229004, 'time': '2021-11-10T03:21:46Z', 'elevation': 79.0, 'speed': 0.0, 'heading': 31, 'distance': 16.6781951879822 }, { 'latitude': 24.1461410522461, 'longitude': 120.698043823242, 'time': '2021-11-10T03:22:01Z', 'elevation': 79.0, 'speed': 0.0, 'heading': 31, 'distance': 5.62577535879856 }, { 'latitude': 24.146125793457, 'longitude': 120.698051452637, 'time': '2021-11-10T03:24:48Z', 'elevation': 79.0, 'speed': 0.0, 'heading': 0, 'distance': 1.85946412047 }, { 'latitude': 24.1461067199707, 'longitude': 120.698028564453, 'time': '2021-11-10T03:25:03Z', 'elevation': 79.0, 'speed': 0.0, 'heading': 0, 'distance': 3.142370924599 }, { 'latitude': 24.146089553833, 'longitude': 120.697959899902, 'time': '2021-11-10T03:27:49Z', 'elevation': 79.0, 'speed': 0.0, 'heading': 339, 'distance': 7.23314234281722 }, { 'latitude': 24.1460971832275, 'longitude': 120.697982788086, 'time': '2021-11-10T03:28:05Z', 'elevation': 79.0, 'speed': 0.0, 'heading': 339, 'distance': 2.47498716821486 }, { 'latitude': 24.1461849212646, 'longitude': 120.697952270508, 'time': '2021-11-10T03:30:52Z', 'elevation': 80.0, 'speed': 0.0, 'heading': 300, 'distance': 10.2008759153253 }, { 'latitude': 24.1460380554199, 'longitude': 120.698043823242, 'time': '2021-11-10T03:31:07Z', 'elevation': 80.0, 'speed': 0.0, 'heading': 301, 'distance': 18.7402599216557 }, { 'latitude': 24.1463508605957, 'longitude': 120.69792175293, 'time': '2021-11-10T03:33:54Z', 'elevation': 80.0, 'speed': 0.0, 'heading': 346, 'distance': 36.8008439160639 }, { 'latitude': 24.1463069915771, 'longitude': 120.697898864746, 'time': '2021-11-10T03:34:09Z', 'elevation': 80.0, 'speed': 0.0, 'heading': 326, 'distance': 5.38709823883473 }, { 'latitude': 24.1461963653564, 'longitude': 120.697952270508, 'time': '2021-11-10T03:36:55Z', 'elevation': 80.0, 'speed': 0.0, 'heading': 210, 'distance': 13.4014315102093 }, { 'latitude': 24.1462249755859, 'longitude': 120.69800567627, 'time': '2021-11-10T03:37:11Z', 'elevation': 80.0, 'speed': 0.0, 'heading': 210, 'distance': 6.2852392292261 }, { 'latitude': 24.1462287902832, 'longitude': 120.698066711426, 'time': '2021-11-10T03:39:58Z', 'elevation': 80.0, 'speed': 0.0, 'heading': 27, 'distance': 6.21772192885538 }, { 'latitude': 24.1462287902832, 'longitude': 120.698020935059, 'time': '2021-11-10T03:40:13Z', 'elevation': 80.0, 'speed': 0.0, 'heading': 27, 'distance': 4.6525120688036 }, { 'latitude': 24.1461334228516, 'longitude': 120.698043823242, 'time': '2021-11-10T03:43:00Z', 'elevation': 81.0, 'speed': 0.0, 'heading': 276, 'distance': 10.8160498075109 }, { 'latitude': 24.1461143493652, 'longitude': 120.698059082031, 'time': '2021-11-10T03:43:15Z', 'elevation': 81.0, 'speed': 0.0, 'heading': 284, 'distance': 2.62070960798309 }, { 'latitude': 24.1462268829346, 'longitude': 120.697944641113, 'time': '2021-11-10T03:46:02Z', 'elevation': 81.0, 'speed': 0.0, 'heading': 320, 'distance': 17.0483600580171 }, { 'latitude': 24.1462059020996, 'longitude': 120.697937011719, 'time': '2021-11-10T03:46:17Z', 'elevation': 81.0, 'speed': 0.0, 'heading': 300, 'distance': 2.44980135232743 }, { 'latitude': 24.146240234375, 'longitude': 120.697868347168, 'time': '2021-11-10T03:49:04Z', 'elevation': 82.0, 'speed': 0.0, 'heading': 8, 'distance': 7.94753978540097 }, { 'latitude': 24.1462459564209, 'longitude': 120.697853088379, 'time': '2021-11-10T03:49:19Z', 'elevation': 82.0, 'speed': 0.0, 'heading': 8, 'distance': 1.67534105055674 }, { 'latitude': 24.1461791992188, 'longitude': 120.69799041748, 'time': '2021-11-10T03:52:06Z', 'elevation': 83.0, 'speed': 0.0, 'heading': 0, 'distance': 15.7951852273933 }, { 'latitude': 24.1461563110352, 'longitude': 120.697898864746, 'time': '2021-11-10T03:52:21Z', 'elevation': 82.0, 'speed': 0.0, 'heading': 0, 'distance': 9.64425482897624 }, { 'latitude': 24.1462078094482, 'longitude': 120.697731018066, 'time': '2021-11-10T03:55:08Z', 'elevation': 83.0, 'speed': 0.0, 'heading': 23, 'distance': 17.9876853681996 }, { 'latitude': 24.1461696624756, 'longitude': 120.697784423828, 'time': '2021-11-10T03:55:23Z', 'elevation': 83.0, 'speed': 0.0, 'heading': 29, 'distance': 6.87855541322448 }, { 'latitude': 24.1461982727051, 'longitude': 120.697822570801, 'time': '2021-11-10T03:58:10Z', 'elevation': 85.0, 'speed': 0.0, 'heading': 277, 'distance': 5.00736010745258 }, { 'latitude': 24.1461791992188, 'longitude': 120.697875976562, 'time': '2021-11-10T03:58:25Z', 'elevation': 84.0, 'speed': 0.0, 'heading': 346, 'distance': 5.82455741453295 }, { 'latitude': 24.1461601257324, 'longitude': 120.697845458984, 'time': '2021-11-10T04:01:12Z', 'elevation': 84.0, 'speed': 0.0, 'heading': 297, 'distance': 3.7527874123496 }, { 'latitude': 24.1461162567139, 'longitude': 120.697875976562, 'time': '2021-11-10T04:01:27Z', 'elevation': 85.0, 'speed': 0.0, 'heading': 228, 'distance': 5.76452661990497 }, { 'latitude': 24.1459522247314, 'longitude': 120.697891235352, 'time': '2021-11-10T04:04:13Z', 'elevation': 85.0, 'speed': 0.0, 'heading': 353, 'distance': 18.2343066410631 }, { 'latitude': 24.1459941864014, 'longitude': 120.697883605957, 'time': '2021-11-10T04:04:29Z', 'elevation': 85.0, 'speed': 0.0, 'heading': 353, 'distance': 4.71193005428481 }, { 'latitude': 24.1462440490723, 'longitude': 120.697952270508, 'time': '2021-11-10T04:07:16Z', 'elevation': 85.0, 'speed': 0.0, 'heading': 62, 'distance': 28.5412311962668 }, { 'latitude': 24.1461410522461, 'longitude': 120.697959899902, 'time': '2021-11-10T04:07:31Z', 'elevation': 85.0, 'speed': 0.0, 'heading': 69, 'distance': 11.4342859005776 }, { 'latitude': 24.1462440490723, 'longitude': 120.697868347168, 'time': '2021-11-10T04:10:18Z', 'elevation': 86.0, 'speed': 0.0, 'heading': 276, 'distance': 14.7216334278752 }, { 'latitude': 24.1461906433105, 'longitude': 120.697898864746, 'time': '2021-11-10T04:10:33Z', 'elevation': 86.0, 'speed': 0.0, 'heading': 255, 'distance': 6.6791057063735 }, { 'latitude': 24.1459941864014, 'longitude': 120.697875976562, 'time': '2021-11-10T04:13:19Z', 'elevation': 86.0, 'speed': 0.0, 'heading': 281, 'distance': 21.8836262832463 }, { 'latitude': 24.1459159851074, 'longitude': 120.697906494141, 'time': '2021-11-10T04:13:35Z', 'elevation': 86.0, 'speed': 0.0, 'heading': 315, 'distance': 9.20020452926087 }, { 'latitude': 24.1460742950439, 'longitude': 120.697959899902, 'time': '2021-11-10T04:16:22Z', 'elevation': 87.0, 'speed': 0.0, 'heading': 279, 'distance': 18.3553770919237 }, { 'latitude': 24.1460094451904, 'longitude': 120.697898864746, 'time': '2021-11-10T04:16:37Z', 'elevation': 86.0, 'speed': 0.0, 'heading': 274, 'distance': 9.49074011365818 }, { 'latitude': 24.1461296081543, 'longitude': 120.697944641113, 'time': '2021-11-10T04:19:23Z', 'elevation': 86.0, 'speed': 0.0, 'heading': 141, 'distance': 14.0990468091996 }, { 'latitude': 24.146276473999, 'longitude': 120.697807312012, 'time': '2021-11-10T04:19:39Z', 'elevation': 87.0, 'speed': 0.0, 'heading': 321, 'distance': 21.4342785318267 }, { 'latitude': 24.1460494995117, 'longitude': 120.697647094727, 'time': '2021-11-10T04:22:25Z', 'elevation': 86.0, 'speed': 0.0, 'heading': 46, 'distance': 29.952868569425 }, { 'latitude': 24.1460018157959, 'longitude': 120.697746276855, 'time': '2021-11-10T04:22:41Z', 'elevation': 87.0, 'speed': 0.0, 'heading': 46, 'distance': 11.380294161508 }, { 'latitude': 24.1461563110352, 'longitude': 120.698516845703, 'time': '2021-11-10T04:25:28Z', 'elevation': 87.0, 'speed': 0.0, 'heading': 258, 'distance': 80.1656147844183 }, { 'latitude': 24.1461124420166, 'longitude': 120.69800567627, 'time': '2021-11-10T04:25:43Z', 'elevation': 87.0, 'speed': 0.0, 'heading': 209, 'distance': 52.1802157293869 }, { 'latitude': 24.1462802886963, 'longitude': 120.697937011719, 'time': '2021-11-10T04:28:29Z', 'elevation': 87.0, 'speed': 0.0, 'heading': 321, 'distance': 19.8574767318392 }, { 'latitude': 24.1460494995117, 'longitude': 120.698097229004, 'time': '2021-11-10T04:28:45Z', 'elevation': 88.0, 'speed': 0.0, 'heading': 70, 'distance': 30.3083621575323 }, { 'latitude': 24.1459770202637, 'longitude': 120.697937011719, 'time': '2021-11-10T04:31:31Z', 'elevation': 90.0, 'speed': 0.0, 'heading': 124, 'distance': 18.1552442014619 }, { 'latitude': 24.1460876464844, 'longitude': 120.69799041748, 'time': '2021-11-10T04:31:47Z', 'elevation': 89.0, 'speed': 0.0, 'heading': 334, 'distance': 13.4014349396881 }, { 'latitude': 24.1463756561279, 'longitude': 120.697731018066, 'time': '2021-11-10T04:34:34Z', 'elevation': 89.0, 'speed': 0.0, 'heading': 355, 'distance': 41.3847380270024 }, { 'latitude': 24.1461372375488, 'longitude': 120.697891235352, 'time': '2021-11-10T04:34:49Z', 'elevation': 90.0, 'speed': 0.0, 'heading': 354, 'distance': 31.024386494893 }, { 'latitude': 24.1462783813477, 'longitude': 120.697875976562, 'time': '2021-11-10T04:37:36Z', 'elevation': 90.0, 'speed': 0.0, 'heading': 270, 'distance': 15.7098692407651 }, { 'latitude': 24.1463184356689, 'longitude': 120.697822570801, 'time': '2021-11-10T04:37:51Z', 'elevation': 90.0, 'speed': 0.0, 'heading': 270, 'distance': 7.0103004532161 }, { 'latitude': 24.1461582183838, 'longitude': 120.697883605957, 'time': '2021-11-10T04:40:38Z', 'elevation': 90.0, 'speed': 0.0, 'heading': 267, 'distance': 18.7987267615776 }, { 'latitude': 24.1461658477783, 'longitude': 120.69783782959, 'time': '2021-11-10T04:40:53Z', 'elevation': 90.0, 'speed': 0.0, 'heading': 267, 'distance': 4.72863341677196 }, { 'latitude': 24.1461620330811, 'longitude': 120.69783782959, 'time': '2021-11-10T04:43:40Z', 'elevation': 91.0, 'speed': 0.0, 'heading': 308, 'distance': 0.422517146288992 }, { 'latitude': 24.1462745666504, 'longitude': 120.697929382324, 'time': '2021-11-10T04:43:55Z', 'elevation': 91.0, 'speed': 0.0, 'heading': 349, 'distance': 15.5545013321499 }, { 'latitude': 24.1463775634766, 'longitude': 120.697830200195, 'time': '2021-11-10T04:46:42Z', 'elevation': 91.0, 'speed': 0.0, 'heading': 320, 'distance': 15.2236125774116 }, { 'latitude': 24.1463947296143, 'longitude': 120.697860717773, 'time': '2021-11-10T04:46:57Z', 'elevation': 91.0, 'speed': 0.0, 'heading': 334, 'distance': 3.63804997670636 }, { 'latitude': 24.1464443206787, 'longitude': 120.697883605957, 'time': '2021-11-10T04:49:44Z', 'elevation': 92.0, 'speed': 0.0, 'heading': 2, 'distance': 5.96501952708384 }, { 'latitude': 24.1464424133301, 'longitude': 120.697891235352, 'time': '2021-11-10T04:49:59Z', 'elevation': 92.0, 'speed': 0.0, 'heading': 345, 'distance': 0.803680474600337 }, { 'latitude': 24.1463241577148, 'longitude': 120.698051452637, 'time': '2021-11-10T04:52:46Z', 'elevation': 91.0, 'speed': 0.0, 'heading': 333, 'distance': 20.8979381975644 }, { 'latitude': 24.1462593078613, 'longitude': 120.697998046875, 'time': '2021-11-10T04:53:01Z', 'elevation': 91.0, 'speed': 0.0, 'heading': 333, 'distance': 9.00304940444639 }, { 'latitude': 24.146125793457, 'longitude': 120.698013305664, 'time': '2021-11-10T04:55:48Z', 'elevation': 91.0, 'speed': 0.0, 'heading': 284, 'distance': 14.8691965008666 }, { 'latitude': 24.1462631225586, 'longitude': 120.697830200195, 'time': '2021-11-10T04:56:03Z', 'elevation': 91.0, 'speed': 0.0, 'heading': 323, 'distance': 24.0354395380564 }, { 'latitude': 24.1462879180908, 'longitude': 120.697952270508, 'time': '2021-11-10T04:58:49Z', 'elevation': 92.0, 'speed': 0.0, 'heading': 299, 'distance': 12.7071225139415 }, { 'latitude': 24.1461029052734, 'longitude': 120.697914123535, 'time': '2021-11-10T04:59:05Z', 'elevation': 92.0, 'speed': 0.0, 'heading': 285, 'distance': 20.8556292728325 }, { 'latitude': 24.1461448669434, 'longitude': 120.697967529297, 'time': '2021-11-10T05:01:52Z', 'elevation': 93.0, 'speed': 0.0, 'heading': 314, 'distance': 7.14587219675614 }, { 'latitude': 24.1462173461914, 'longitude': 120.698043823242, 'time': '2021-11-10T05:02:07Z', 'elevation': 93.0, 'speed': 0.0, 'heading': 121, 'distance': 11.1612893747343 }, { 'latitude': 24.1462631225586, 'longitude': 120.698020935059, 'time': '2021-11-10T05:04:54Z', 'elevation': 93.0, 'speed': 0.0, 'heading': 313, 'distance': 5.57839162154556 }, { 'latitude': 24.1462707519531, 'longitude': 120.697982788086, 'time': '2021-11-10T05:05:09Z', 'elevation': 93.0, 'speed': 0.0, 'heading': 311, 'distance': 3.96811381123672 }, { 'latitude': 24.14621925354, 'longitude': 120.697944641113, 'time': '2021-11-10T05:07:55Z', 'elevation': 93.0, 'speed': 0.0, 'heading': 291, 'distance': 6.89690182018679 }, { 'latitude': 24.1462306976318, 'longitude': 120.697952270508, 'time': '2021-11-10T05:08:11Z', 'elevation': 93.0, 'speed': 0.0, 'heading': 351, 'distance': 1.48592087295034 }, { 'latitude': 24.1462879180908, 'longitude': 120.698013305664, 'time': '2021-11-10T05:10:58Z', 'elevation': 93.0, 'speed': 0.0, 'heading': 298, 'distance': 8.86840983744812 }, { 'latitude': 24.1462097167969, 'longitude': 120.697944641113, 'time': '2021-11-10T05:11:13Z', 'elevation': 93.0, 'speed': 0.0, 'heading': 311, 'distance': 11.1232428380591 }, { 'latitude': 24.1461887359619, 'longitude': 120.698089599609, 'time': '2021-11-10T05:13:59Z', 'elevation': 93.0, 'speed': 0.0, 'heading': 71, 'distance': 14.9152167840837 }, { 'latitude': 24.1462440490723, 'longitude': 120.698036193848, 'time': '2021-11-10T05:14:14Z', 'elevation': 93.0, 'speed': 0.0, 'heading': 71, 'distance': 8.1851343150007 }, { 'latitude': 24.1464328765869, 'longitude': 120.698127746582, 'time': '2021-11-10T05:17:17Z', 'elevation': 93.0, 'speed': 0.0, 'heading': 275, 'distance': 22.8911584449762 }, { 'latitude': 24.1448497772217, 'longitude': 120.700218200684, 'time': '2021-11-10T05:20:03Z', 'elevation': 93.0, 'speed': 6.0, 'heading': 93, 'distance': 275.47795172377 }, { 'latitude': 24.1446800231934, 'longitude': 120.700485229492, 'time': '2021-11-10T05:20:19Z', 'elevation': 94.0, 'speed': 1.0, 'heading': 102, 'distance': 33.0167323556018 }, { 'latitude': 24.1441440582275, 'longitude': 120.704444885254, 'time': '2021-11-10T05:23:21Z', 'elevation': 97.0, 'speed': 0.0, 'heading': 347, 'distance': 406.80578015248 }, { 'latitude': 24.1439876556396, 'longitude': 120.704399108887, 'time': '2021-11-10T05:26:23Z', 'elevation': 97.0, 'speed': 0.0, 'heading': 258, 'distance': 17.9371066254403 }, { 'latitude': 24.1441764831543, 'longitude': 120.704734802246, 'time': '2021-11-10T05:29:09Z', 'elevation': 97.0, 'speed': 0.0, 'heading': 305, 'distance': 40.0192943575821 }, { 'latitude': 24.1441745758057, 'longitude': 120.70458984375, 'time': '2021-11-10T05:29:24Z', 'elevation': 97.0, 'speed': 0.0, 'heading': 180, 'distance': 14.734819466938 }, { 'latitude': 24.1442432403564, 'longitude': 120.704597473145, 'time': '2021-11-10T05:32:12Z', 'elevation': 101.0, 'speed': 0.0, 'heading': 100, 'distance': 7.64473562599076 }, { 'latitude': 24.1441497802734, 'longitude': 120.704528808594, 'time': '2021-11-10T05:32:27Z', 'elevation': 96.0, 'speed': 0.0, 'heading': 100, 'distance': 12.4844608459999 }, { 'latitude': 24.1440315246582, 'longitude': 120.704460144043, 'time': '2021-11-10T05:35:33Z', 'elevation': 95.0, 'speed': 0.0, 'heading': 304, 'distance': 14.8412654921362 }, { 'latitude': 24.1440010070801, 'longitude': 120.704162597656, 'time': '2021-11-10T05:41:37Z', 'elevation': 119.0, 'speed': 0.0, 'heading': 235, 'distance': 30.4303958755169 }, { 'latitude': 24.1438064575195, 'longitude': 120.704238891602, 'time': '2021-11-10T05:44:23Z', 'elevation': 118.0, 'speed': 0.0, 'heading': 335, 'distance': 22.9011504307294 }, { 'latitude': 24.1439571380615, 'longitude': 120.704414367676, 'time': '2021-11-10T05:44:39Z', 'elevation': 117.0, 'speed': 0.0, 'heading': 293, 'distance': 24.425957462658 }, { 'latitude': 24.144115447998, 'longitude': 120.704475402832, 'time': '2021-11-10T05:47:25Z', 'elevation': 117.0, 'speed': 1.0, 'heading': 123, 'distance': 18.5994631109733 }, { 'latitude': 24.1440753936768, 'longitude': 120.704795837402, 'time': '2021-11-10T05:47:40Z', 'elevation': 117.0, 'speed': 2.0, 'heading': 122, 'distance': 32.8691524776634 }, { 'latitude': 24.1440563201904, 'longitude': 120.704818725586, 'time': '2021-11-10T05:50:42Z', 'elevation': 72.0, 'speed': 0.0, 'heading': 104, 'distance': 3.14239801428304 }, { 'latitude': 24.1439876556396, 'longitude': 120.704887390137, 'time': '2021-11-10T05:53:28Z', 'elevation': 73.0, 'speed': 0.0, 'heading': 226, 'distance': 10.3220910442902 }, { 'latitude': 24.1440658569336, 'longitude': 120.704902648926, 'time': '2021-11-10T05:53:44Z', 'elevation': 73.0, 'speed': 0.0, 'heading': 359, 'distance': 8.79934528345168 }, { 'latitude': 24.1441860198975, 'longitude': 120.704742431641, 'time': '2021-11-10T05:56:45Z', 'elevation': 73.0, 'speed': 0.0, 'heading': 52, 'distance': 21.0312102268756 }, { 'latitude': 24.1290225982666, 'longitude': 120.708847045898, 'time': '2021-11-10T06:06:00Z', 'elevation': 79.0, 'speed': 0.0, 'heading': 273, 'distance': 1730.54793168335 }, { 'latitude': 24.129056930542, 'longitude': 120.707321166992, 'time': '2021-11-10T06:08:48Z', 'elevation': 80.0, 'speed': 2.0, 'heading': 312, 'distance': 155.152283664471 }, { 'latitude': 24.1284637451172, 'longitude': 120.706748962402, 'time': '2021-11-10T06:09:03Z', 'elevation': 72.0, 'speed': 10.0, 'heading': 206, 'distance': 87.7484767202637 }, { 'latitude': 24.1106014251709, 'longitude': 120.699501037598, 'time': '2021-11-10T06:12:05Z', 'elevation': 70.0, 'speed': 0.0, 'heading': 255, 'distance': 2111.17680754508 }, { 'latitude': 24.100944519043, 'longitude': 120.694458007812, 'time': '2021-11-10T06:15:07Z', 'elevation': 71.0, 'speed': 0.0, 'heading': 126, 'distance': 1186.13462020068 }, { 'latitude': 24.0955486297607, 'longitude': 120.689018249512, 'time': '2021-11-10T06:18:09Z', 'elevation': 57.0, 'speed': 17.0, 'heading': 212, 'distance': 814.299446715702 }, { 'latitude': 24.0692348480225, 'longitude': 120.690383911133, 'time': '2021-11-10T06:20:55Z', 'elevation': 83.0, 'speed': 22.0, 'heading': 172, 'distance': 2917.80550971777 }, { 'latitude': 24.0661277770996, 'longitude': 120.690063476562, 'time': '2021-11-10T06:21:11Z', 'elevation': 61.0, 'speed': 23.0, 'heading': 187, 'distance': 345.676170568984 }, { 'latitude': 24.0079689025879, 'longitude': 120.650032043457, 'time': '2021-11-10T06:27:14Z', 'elevation': -6.0, 'speed': 0.0, 'heading': 284, 'distance': 7620.779771265 }, { 'latitude': 24.0104160308838, 'longitude': 120.643699645996, 'time': '2021-11-10T06:30:01Z', 'elevation': 1.0, 'speed': 8.0, 'heading': 184, 'distance': 698.976553644906 }, { 'latitude': 24.0099468231201, 'longitude': 120.643707275391, 'time': '2021-11-10T06:30:17Z', 'elevation': 6.0, 'speed': 3.0, 'heading': 197, 'distance': 51.9744821514361 }],
    [{ 'latitude': 25.4071311950684, 'longitude': 121.992172241211, 'time': '2021-11-09T23:31:58Z', 'elevation': 82.0, 'speed': 20.0, 'heading': 191, 'distance': 0.0 }, { 'latitude': 25.4047241210938, 'longitude': 121.990913391113, 'time': '2021-11-09T23:32:14Z', 'elevation': 105.0, 'speed': 11.0, 'heading': 288, 'distance': 295.206282126901 }, { 'latitude': 25.4034080505371, 'longitude': 121.989761352539, 'time': '2021-11-09T23:32:29Z', 'elevation': 121.0, 'speed': 21.0, 'heading': 195, 'distance': 186.257604416892 }, { 'latitude': 25.4009895324707, 'longitude': 121.98779296875, 'time': '2021-11-09T23:32:44Z', 'elevation': 129.0, 'speed': 22.0, 'heading': 236, 'distance': 333.178690009275 }, { 'latitude': 25.3984107971191, 'longitude': 121.985664367676, 'time': '2021-11-09T23:32:59Z', 'elevation': 145.0, 'speed': 23.0, 'heading': 223, 'distance': 357.044773026559 }, { 'latitude': 25.3970813751221, 'longitude': 121.982635498047, 'time': '2021-11-09T23:33:14Z', 'elevation': 162.0, 'speed': 23.0, 'heading': 241, 'distance': 338.490110659443 }, { 'latitude': 25.3955364227295, 'longitude': 121.979515075684, 'time': '2021-11-09T23:33:29Z', 'elevation': 173.0, 'speed': 22.0, 'heading': 245, 'distance': 357.604128302727 }, { 'latitude': 25.3939476013184, 'longitude': 121.976516723633, 'time': '2021-11-09T23:33:44Z', 'elevation': 181.0, 'speed': 24.0, 'heading': 247, 'distance': 349.295647429579 }, { 'latitude': 25.3918228149414, 'longitude': 121.973510742188, 'time': '2021-11-09T23:33:59Z', 'elevation': 180.0, 'speed': 27.0, 'heading': 219, 'distance': 383.274951568088 }, { 'latitude': 25.3893642425537, 'longitude': 121.970771789551, 'time': '2021-11-09T23:34:14Z', 'elevation': 194.0, 'speed': 24.0, 'heading': 237, 'distance': 387.483359774473 }, { 'latitude': 25.3873920440674, 'longitude': 121.967636108398, 'time': '2021-11-09T23:34:29Z', 'elevation': 192.0, 'speed': 25.0, 'heading': 236, 'distance': 383.798247422477 }, { 'latitude': 25.3603191375732, 'longitude': 121.934967041016, 'time': '2021-11-09T23:37:16Z', 'elevation': 147.0, 'speed': 31.0, 'heading': 213, 'distance': 4450.26220557611 }, { 'latitude': 25.3571109771729, 'longitude': 121.93253326416, 'time': '2021-11-09T23:37:31Z', 'elevation': 137.0, 'speed': 29.0, 'heading': 206, 'distance': 431.643834301312 }, { 'latitude': 25.3285465240479, 'longitude': 121.900146484375, 'time': '2021-11-09T23:40:18Z', 'elevation': 48.0, 'speed': 28.0, 'heading': 235, 'distance': 4543.40757992681 }, { 'latitude': 25.3256740570068, 'longitude': 121.897491455078, 'time': '2021-11-09T23:40:33Z', 'elevation': 40.0, 'speed': 28.0, 'heading': 221, 'distance': 415.584139358479 }, { 'latitude': 25.2940139770508, 'longitude': 121.875068664551, 'time': '2021-11-09T23:43:20Z', 'elevation': 49.0, 'speed': 25.0, 'heading': 201, 'distance': 4171.16514910961 }, { 'latitude': 25.2906513214111, 'longitude': 121.874000549316, 'time': '2021-11-09T23:43:35Z', 'elevation': 53.0, 'speed': 25.0, 'heading': 200, 'distance': 387.726463879204 }, { 'latitude': 25.2514019012451, 'longitude': 121.870582580566, 'time': '2021-11-09T23:46:22Z', 'elevation': 51.0, 'speed': 28.0, 'heading': 181, 'distance': 4361.54002499408 }, { 'latitude': 25.2475891113281, 'longitude': 121.870086669922, 'time': '2021-11-09T23:46:37Z', 'elevation': 41.0, 'speed': 28.0, 'heading': 182, 'distance': 425.31254421681 }, { 'latitude': 25.2114410400391, 'longitude': 121.850234985352, 'time': '2021-11-09T23:49:24Z', 'elevation': 14.0, 'speed': 27.0, 'heading': 213, 'distance': 4476.15703572589 }, { 'latitude': 25.2083148956299, 'longitude': 121.84839630127, 'time': '2021-11-09T23:49:39Z', 'elevation': 13.0, 'speed': 26.0, 'heading': 193, 'distance': 392.760229287627 }, { 'latitude': 25.1759414672852, 'longitude': 121.82780456543, 'time': '2021-11-09T23:52:25Z', 'elevation': 12.0, 'speed': 26.0, 'heading': 231, 'distance': 4143.48139997708 }, { 'latitude': 25.1737251281738, 'longitude': 121.824768066406, 'time': '2021-11-09T23:52:41Z', 'elevation': 12.0, 'speed': 25.0, 'heading': 238, 'distance': 392.39665622804 }, { 'latitude': 25.1523189544678, 'longitude': 121.799194335938, 'time': '2021-11-09T23:55:28Z', 'elevation': 28.0, 'speed': 17.0, 'heading': 218, 'distance': 3502.90443585471 }, { 'latitude': 25.1507205963135, 'longitude': 121.797004699707, 'time': '2021-11-09T23:55:43Z', 'elevation': 28.0, 'speed': 19.0, 'heading': 224, 'distance': 283.00175036261 }, { 'latitude': 25.1282806396484, 'longitude': 121.780578613281, 'time': '2021-11-09T23:58:30Z', 'elevation': 123.0, 'speed': 19.0, 'heading': 250, 'distance': 2987.06945127286 }, { 'latitude': 25.1268062591553, 'longitude': 121.778465270996, 'time': '2021-11-09T23:58:45Z', 'elevation': 139.0, 'speed': 21.0, 'heading': 251, 'distance': 268.506034228264 }, { 'latitude': 25.1094169616699, 'longitude': 121.751518249512, 'time': '2021-11-10T00:01:32Z', 'elevation': 176.0, 'speed': 20.0, 'heading': 226, 'distance': 3331.13908803278 }, { 'latitude': 25.1076965332031, 'longitude': 121.749397277832, 'time': '2021-11-10T00:01:47Z', 'elevation': 179.0, 'speed': 23.0, 'heading': 218, 'distance': 286.50299631828 }, { 'latitude': 25.0944385528564, 'longitude': 121.716934204102, 'time': '2021-11-10T00:04:34Z', 'elevation': 135.0, 'speed': 22.0, 'heading': 248, 'distance': 3588.73711187647 }, { 'latitude': 25.0932636260986, 'longitude': 121.713882446289, 'time': '2021-11-10T00:04:49Z', 'elevation': 129.0, 'speed': 22.0, 'heading': 239, 'distance': 334.223592683256 }, { 'latitude': 25.0764751434326, 'longitude': 121.682983398438, 'time': '2021-11-10T00:07:36Z', 'elevation': 68.0, 'speed': 20.0, 'heading': 262, 'distance': 3629.73894286937 }, { 'latitude': 25.0775718688965, 'longitude': 121.68106842041, 'time': '2021-11-10T00:07:51Z', 'elevation': 94.0, 'speed': 11.0, 'heading': 218, 'distance': 228.220062011813 }, { 'latitude': 25.0615882873535, 'longitude': 121.649642944336, 'time': '2021-11-10T00:10:38Z', 'elevation': 80.0, 'speed': 21.0, 'heading': 244, 'distance': 3631.48741981314 }, { 'latitude': 25.0613288879395, 'longitude': 121.647003173828, 'time': '2021-11-10T00:10:53Z', 'elevation': 104.0, 'speed': 16.0, 'heading': 248, 'distance': 267.897848269166 }, { 'latitude': 25.0502643585205, 'longitude': 121.61255645752, 'time': '2021-11-10T00:13:40Z', 'elevation': 80.0, 'speed': 20.0, 'heading': 258, 'distance': 3685.59543931923 }, { 'latitude': 25.0495796203613, 'longitude': 121.609336853027, 'time': '2021-11-10T00:13:55Z', 'elevation': 78.0, 'speed': 22.0, 'heading': 261, 'distance': 333.62481350098 }, { 'latitude': 25.0417633056641, 'longitude': 121.572372436523, 'time': '2021-11-10T00:16:41Z', 'elevation': 40.0, 'speed': 21.0, 'heading': 236, 'distance': 3829.35085595707 }, { 'latitude': 25.0405082702637, 'longitude': 121.569595336914, 'time': '2021-11-10T00:16:57Z', 'elevation': 45.0, 'speed': 19.0, 'heading': 246, 'distance': 312.843000582973 }, { 'latitude': 25.0281467437744, 'longitude': 121.53685760498, 'time': '2021-11-10T00:19:44Z', 'elevation': 39.0, 'speed': 23.0, 'heading': 253, 'distance': 3576.47863981259 }, { 'latitude': 25.0278129577637, 'longitude': 121.533561706543, 'time': '2021-11-10T00:19:59Z', 'elevation': 41.0, 'speed': 21.0, 'heading': 256, 'distance': 334.694458312925 }, { 'latitude': 25.0182666778564, 'longitude': 121.498886108398, 'time': '2021-11-10T00:22:45Z', 'elevation': 26.0, 'speed': 24.0, 'heading': 250, 'distance': 3656.11944946776 }, { 'latitude': 25.0172748565674, 'longitude': 121.495574951172, 'time': '2021-11-10T00:23:00Z', 'elevation': 18.0, 'speed': 21.0, 'heading': 258, 'distance': 351.808856990204 }, { 'latitude': 25.0023880004883, 'longitude': 121.462348937988, 'time': '2021-11-10T00:25:47Z', 'elevation': 38.0, 'speed': 23.0, 'heading': 240, 'distance': 3737.3874701796 }, { 'latitude': 25.0004539489746, 'longitude': 121.459609985352, 'time': '2021-11-10T00:26:03Z', 'elevation': 36.0, 'speed': 23.0, 'heading': 240, 'distance': 349.782947312638 }, { 'latitude': 24.9718704223633, 'longitude': 121.435424804688, 'time': '2021-11-10T00:29:05Z', 'elevation': 61.0, 'speed': 22.0, 'heading': 196, 'distance': 3998.44071565453 }, { 'latitude': 24.9505290985107, 'longitude': 121.410278320312, 'time': '2021-11-10T00:31:52Z', 'elevation': 128.0, 'speed': 20.0, 'heading': 216, 'distance': 3469.41730688416 }, { 'latitude': 24.9482154846191, 'longitude': 121.408393859863, 'time': '2021-11-10T00:32:07Z', 'elevation': 132.0, 'speed': 22.0, 'heading': 222, 'distance': 319.219366484831 }, { 'latitude': 24.9271240234375, 'longitude': 121.380218505859, 'time': '2021-11-10T00:34:54Z', 'elevation': 180.0, 'speed': 22.0, 'heading': 239, 'distance': 3681.94505831389 }, { 'latitude': 24.9254703521729, 'longitude': 121.377418518066, 'time': '2021-11-10T00:35:09Z', 'elevation': 185.0, 'speed': 22.0, 'heading': 237, 'distance': 336.966311621481 }, { 'latitude': 24.905029296875, 'longitude': 121.347045898438, 'time': '2021-11-10T00:37:56Z', 'elevation': 189.0, 'speed': 22.0, 'heading': 235, 'distance': 3813.26228162852 }, { 'latitude': 24.9032363891602, 'longitude': 121.344139099121, 'time': '2021-11-10T00:38:11Z', 'elevation': 185.0, 'speed': 23.0, 'heading': 230, 'distance': 354.520229282905 }, { 'latitude': 24.8836803436279, 'longitude': 121.313606262207, 'time': '2021-11-10T00:40:58Z', 'elevation': 185.0, 'speed': 23.0, 'heading': 212, 'distance': 3769.55172770803 }, { 'latitude': 24.8816108703613, 'longitude': 121.311408996582, 'time': '2021-11-10T00:41:13Z', 'elevation': 189.0, 'speed': 20.0, 'heading': 218, 'distance': 319.131397506048 }, { 'latitude': 24.857063293457, 'longitude': 121.291954040527, 'time': '2021-11-10T00:44:00Z', 'elevation': 227.0, 'speed': 18.0, 'heading': 209, 'distance': 3355.4701525532 }, { 'latitude': 24.8549690246582, 'longitude': 121.290267944336, 'time': '2021-11-10T00:44:15Z', 'elevation': 251.0, 'speed': 20.0, 'heading': 227, 'distance': 287.846840581248 }, { 'latitude': 24.8321990966797, 'longitude': 121.265716552734, 'time': '2021-11-10T00:47:02Z', 'elevation': 269.0, 'speed': 23.0, 'heading': 236, 'distance': 3538.35980531566 }, { 'latitude': 24.8303508758545, 'longitude': 121.263221740723, 'time': '2021-11-10T00:47:17Z', 'elevation': 281.0, 'speed': 21.0, 'heading': 231, 'distance': 324.831630484285 }, { 'latitude': 24.8185806274414, 'longitude': 121.233535766602, 'time': '2021-11-10T00:50:04Z', 'elevation': 315.0, 'speed': 21.0, 'heading': 263, 'distance': 3272.02558199899 }, { 'latitude': 24.8182849884033, 'longitude': 121.230369567871, 'time': '2021-11-10T00:50:19Z', 'elevation': 328.0, 'speed': 22.0, 'heading': 256, 'distance': 321.766963148193 }, { 'latitude': 24.7970085144043, 'longitude': 121.201248168945, 'time': '2021-11-10T00:53:06Z', 'elevation': 356.0, 'speed': 23.0, 'heading': 201, 'distance': 3771.44398429391 }, { 'latitude': 24.7942543029785, 'longitude': 121.200370788574, 'time': '2021-11-10T00:53:21Z', 'elevation': 365.0, 'speed': 22.0, 'heading': 207, 'distance': 317.721271056501 }, { 'latitude': 24.7763824462891, 'longitude': 121.169692993164, 'time': '2021-11-10T00:56:08Z', 'elevation': 316.0, 'speed': 21.0, 'heading': 247, 'distance': 3680.11288755585 }, { 'latitude': 24.7755374908447, 'longitude': 121.16658782959, 'time': '2021-11-10T00:56:23Z', 'elevation': 313.0, 'speed': 21.0, 'heading': 253, 'distance': 327.68359601853 }, { 'latitude': 24.7703800201416, 'longitude': 121.128944396973, 'time': '2021-11-10T00:59:10Z', 'elevation': 383.0, 'speed': 23.0, 'heading': 260, 'distance': 3849.68681064975 }, { 'latitude': 24.7696533203125, 'longitude': 121.125450134277, 'time': '2021-11-10T00:59:25Z', 'elevation': 399.0, 'speed': 24.0, 'heading': 257, 'distance': 362.451546896 }, { 'latitude': 24.7507801055908, 'longitude': 121.088890075684, 'time': '2021-11-10T01:02:12Z', 'elevation': 323.0, 'speed': 25.0, 'heading': 220, 'distance': 4247.91150673749 }, { 'latitude': 24.7482891082764, 'longitude': 121.086242675781, 'time': '2021-11-10T01:02:27Z', 'elevation': 303.0, 'speed': 26.0, 'heading': 235, 'distance': 384.511226077236 }, { 'latitude': 24.7267284393311, 'longitude': 121.053649902344, 'time': '2021-11-10T01:05:14Z', 'elevation': 281.0, 'speed': 26.0, 'heading': 223, 'distance': 4071.27469731194 }, { 'latitude': 24.7242336273193, 'longitude': 121.051208496094, 'time': '2021-11-10T01:05:29Z', 'elevation': 269.0, 'speed': 23.0, 'heading': 224, 'distance': 370.647163752538 }, { 'latitude': 24.7037868499756, 'longitude': 121.019577026367, 'time': '2021-11-10T01:08:16Z', 'elevation': 217.0, 'speed': 24.0, 'heading': 252, 'distance': 3920.85811928987 }, { 'latitude': 24.7024765014648, 'longitude': 121.016151428223, 'time': '2021-11-10T01:08:31Z', 'elevation': 207.0, 'speed': 25.0, 'heading': 249, 'distance': 375.801744953203 }, { 'latitude': 24.6820945739746, 'longitude': 120.981437683105, 'time': '2021-11-10T01:11:18Z', 'elevation': 174.0, 'speed': 23.0, 'heading': 229, 'distance': 4175.9410909584 }, { 'latitude': 24.6801338195801, 'longitude': 120.978645324707, 'time': '2021-11-10T01:11:33Z', 'elevation': 176.0, 'speed': 23.0, 'heading': 232, 'distance': 356.427669745031 }, { 'latitude': 24.6538276672363, 'longitude': 120.952934265137, 'time': '2021-11-10T01:14:20Z', 'elevation': 180.0, 'speed': 22.0, 'heading': 220, 'distance': 3906.86848143773 }, { 'latitude': 24.6514110565186, 'longitude': 120.950553894043, 'time': '2021-11-10T01:14:35Z', 'elevation': 183.0, 'speed': 24.0, 'heading': 220, 'distance': 360.167202059235 }, { 'latitude': 24.6257629394531, 'longitude': 120.920753479004, 'time': '2021-11-10T01:17:22Z', 'elevation': 190.0, 'speed': 25.0, 'heading': 226, 'distance': 4144.15502271894 }, { 'latitude': 24.6233978271484, 'longitude': 120.917770385742, 'time': '2021-11-10T01:17:37Z', 'elevation': 187.0, 'speed': 25.0, 'heading': 224, 'distance': 399.834362457847 }, { 'latitude': 24.5964183807373, 'longitude': 120.889488220215, 'time': '2021-11-10T01:20:24Z', 'elevation': 179.0, 'speed': 24.0, 'heading': 217, 'distance': 4139.25655574487 }, { 'latitude': 24.5936279296875, 'longitude': 120.887496948242, 'time': '2021-11-10T01:20:39Z', 'elevation': 178.0, 'speed': 24.0, 'heading': 202, 'distance': 369.064167892211 }, { 'latitude': 24.5785865783691, 'longitude': 120.866493225098, 'time': '2021-11-10T01:23:26Z', 'elevation': 168.0, 'speed': 26.0, 'heading': 258, 'distance': 2702.13891588219 }, { 'latitude': 24.5774345397949, 'longitude': 120.862854003906, 'time': '2021-11-10T01:23:41Z', 'elevation': 182.0, 'speed': 24.0, 'heading': 241, 'distance': 390.086789113634 }, { 'latitude': 24.5533905029297, 'longitude': 120.831916809082, 'time': '2021-11-10T01:26:28Z', 'elevation': 239.0, 'speed': 26.0, 'heading': 238, 'distance': 4112.78853020108 }, { 'latitude': 24.5511264801025, 'longitude': 120.828742980957, 'time': '2021-11-10T01:26:43Z', 'elevation': 253.0, 'speed': 26.0, 'heading': 229, 'distance': 407.778610065169 }, { 'latitude': 24.5206394195557, 'longitude': 120.798294067383, 'time': '2021-11-10T01:29:30Z', 'elevation': 281.0, 'speed': 29.0, 'heading': 218, 'distance': 4574.11503834656 }, { 'latitude': 24.5173854827881, 'longitude': 120.795837402344, 'time': '2021-11-10T01:29:45Z', 'elevation': 290.0, 'speed': 29.0, 'heading': 210, 'distance': 438.047702741085 }, { 'latitude': 24.4829998016357, 'longitude': 120.774475097656, 'time': '2021-11-10T01:32:32Z', 'elevation': 412.0, 'speed': 23.0, 'heading': 202, 'distance': 4381.15383136981 }, { 'latitude': 24.4799499511719, 'longitude': 120.77311706543, 'time': '2021-11-10T01:32:47Z', 'elevation': 415.0, 'speed': 24.0, 'heading': 200, 'distance': 364.789993998169 }, { 'latitude': 24.4478874206543, 'longitude': 120.758354187012, 'time': '2021-11-10T01:35:34Z', 'elevation': 491.0, 'speed': 24.0, 'heading': 205, 'distance': 3853.91157608298 }, { 'latitude': 24.444860458374, 'longitude': 120.756355285645, 'time': '2021-11-10T01:35:49Z', 'elevation': 493.0, 'speed': 27.0, 'heading': 218, 'distance': 391.78298742986 }, { 'latitude': 24.4146060943604, 'longitude': 120.721862792969, 'time': '2021-11-10T01:38:36Z', 'elevation': 439.0, 'speed': 30.0, 'heading': 226, 'distance': 4844.1066178988 }, { 'latitude': 24.4115619659424, 'longitude': 120.719055175781, 'time': '2021-11-10T01:38:51Z', 'elevation': 417.0, 'speed': 27.0, 'heading': 219, 'distance': 441.338168779271 }, { 'latitude': 24.374490737915, 'longitude': 120.697334289551, 'time': '2021-11-10T01:41:38Z', 'elevation': 325.0, 'speed': 24.0, 'heading': 196, 'distance': 4659.97506922437 }, { 'latitude': 24.3713283538818, 'longitude': 120.696533203125, 'time': '2021-11-10T01:41:53Z', 'elevation': 338.0, 'speed': 23.0, 'heading': 192, 'distance': 359.582770770398 }, { 'latitude': 24.3405265808105, 'longitude': 120.696792602539, 'time': '2021-11-10T01:44:40Z', 'elevation': 321.0, 'speed': 23.0, 'heading': 216, 'distance': 3411.81027484579 }, { 'latitude': 24.3378582000732, 'longitude': 120.69474029541, 'time': '2021-11-10T01:44:55Z', 'elevation': 318.0, 'speed': 24.0, 'heading': 205, 'distance': 361.570336157058 }, { 'latitude': 24.3021793365479, 'longitude': 120.686317443848, 'time': '2021-11-10T01:47:42Z', 'elevation': 242.0, 'speed': 24.0, 'heading': 172, 'distance': 4043.30629089661 }, { 'latitude': 24.2988471984863, 'longitude': 120.686500549316, 'time': '2021-11-10T01:47:57Z', 'elevation': 219.0, 'speed': 22.0, 'heading': 169, 'distance': 369.543978823608 }, { 'latitude': 24.2654705047607, 'longitude': 120.686340332031, 'time': '2021-11-10T01:50:44Z', 'elevation': 193.0, 'speed': 21.0, 'heading': 190, 'distance': 3696.91555163662 }, { 'latitude': 24.2625637054443, 'longitude': 120.685760498047, 'time': '2021-11-10T01:50:59Z', 'elevation': 196.0, 'speed': 23.0, 'heading': 192, 'distance': 327.302365054405 }, { 'latitude': 24.2299098968506, 'longitude': 120.680099487305, 'time': '2021-11-10T01:53:46Z', 'elevation': 199.0, 'speed': 20.0, 'heading': 170, 'distance': 3662.20285195627 }, { 'latitude': 24.2269344329834, 'longitude': 120.680244445801, 'time': '2021-11-10T01:54:01Z', 'elevation': 193.0, 'speed': 23.0, 'heading': 172, 'distance': 329.895659882797 }, { 'latitude': 24.1972713470459, 'longitude': 120.691520690918, 'time': '2021-11-10T01:56:48Z', 'elevation': 179.0, 'speed': 21.0, 'heading': 154, 'distance': 3479.48263208531 }, { 'latitude': 24.1949157714844, 'longitude': 120.69310760498, 'time': '2021-11-10T01:57:03Z', 'elevation': 182.0, 'speed': 20.0, 'heading': 150, 'distance': 306.701307996409 }, { 'latitude': 24.1659088134766, 'longitude': 120.704345703125, 'time': '2021-11-10T01:59:50Z', 'elevation': 196.0, 'speed': 23.0, 'heading': 174, 'distance': 3409.72657243564 }, { 'latitude': 24.1629581451416, 'longitude': 120.705276489258, 'time': '2021-11-10T02:00:05Z', 'elevation': 192.0, 'speed': 23.0, 'heading': 175, 'distance': 340.230566752303 }, { 'latitude': 24.1304512023926, 'longitude': 120.704040527344, 'time': '2021-11-10T02:02:52Z', 'elevation': 188.0, 'speed': 20.0, 'heading': 193, 'distance': 3602.67082039456 }, { 'latitude': 24.1276092529297, 'longitude': 120.703384399414, 'time': '2021-11-10T02:03:07Z', 'elevation': 185.0, 'speed': 23.0, 'heading': 198, 'distance': 321.762817886118 }, { 'latitude': 24.0942668914795, 'longitude': 120.689720153809, 'time': '2021-11-10T02:05:54Z', 'elevation': 160.0, 'speed': 25.0, 'heading': 224, 'distance': 3945.62915727506 }, { 'latitude': 24.0919227600098, 'longitude': 120.687057495117, 'time': '2021-11-10T02:06:09Z', 'elevation': 157.0, 'speed': 24.0, 'heading': 221, 'distance': 375.1103273006 }, { 'latitude': 24.0606346130371, 'longitude': 120.672805786133, 'time': '2021-11-10T02:08:56Z', 'elevation': 120.0, 'speed': 20.0, 'heading': 191, 'distance': 3756.29941522122 }, { 'latitude': 24.0577754974365, 'longitude': 120.672866821289, 'time': '2021-11-10T02:09:11Z', 'elevation': 119.0, 'speed': 21.0, 'heading': 166, 'distance': 316.733834377308 }, { 'latitude': 24.0257129669189, 'longitude': 120.673561096191, 'time': '2021-11-10T02:11:58Z', 'elevation': 123.0, 'speed': 22.0, 'heading': 169, 'distance': 3551.91025154681 }, { 'latitude': 24.0229187011719, 'longitude': 120.673934936523, 'time': '2021-11-10T02:12:13Z', 'elevation': 130.0, 'speed': 18.0, 'heading': 178, 'distance': 311.81690410413 }, { 'latitude': 23.9946022033691, 'longitude': 120.67797088623, 'time': '2021-11-10T02:15:00Z', 'elevation': 153.0, 'speed': 20.0, 'heading': 186, 'distance': 3163.05677761053 }, { 'latitude': 23.9919891357422, 'longitude': 120.677764892578, 'time': '2021-11-10T02:15:15Z', 'elevation': 162.0, 'speed': 18.0, 'heading': 180, 'distance': 290.176538454086 }, { 'latitude': 23.9624824523926, 'longitude': 120.681571960449, 'time': '2021-11-10T02:18:02Z', 'elevation': 167.0, 'speed': 18.0, 'heading': 164, 'distance': 3290.98426244733 }, { 'latitude': 23.9599113464355, 'longitude': 120.682281494141, 'time': '2021-11-10T02:18:17Z', 'elevation': 171.0, 'speed': 20.0, 'heading': 164, 'distance': 293.784274689869 }, { 'latitude': 23.9315567016602, 'longitude': 120.694709777832, 'time': '2021-11-10T02:21:04Z', 'elevation': 160.0, 'speed': 21.0, 'heading': 156, 'distance': 3385.73717701655 }, { 'latitude': 23.9288635253906, 'longitude': 120.695617675781, 'time': '2021-11-10T02:21:19Z', 'elevation': 152.0, 'speed': 20.0, 'heading': 167, 'distance': 312.281037988062 }, { 'latitude': 23.9029541015625, 'longitude': 120.698608398438, 'time': '2021-11-10T02:24:06Z', 'elevation': 184.0, 'speed': 19.0, 'heading': 178, 'distance': 2885.76124292124 }, { 'latitude': 23.9011192321777, 'longitude': 120.70027923584, 'time': '2021-11-10T02:24:21Z', 'elevation': 180.0, 'speed': 17.0, 'heading': 125, 'distance': 265.042305901538 }, { 'latitude': 23.8779468536377, 'longitude': 120.711647033691, 'time': '2021-11-10T02:27:08Z', 'elevation': 305.0, 'speed': 16.0, 'heading': 148, 'distance': 2815.51310941047 }, { 'latitude': 23.8760013580322, 'longitude': 120.712615966797, 'time': '2021-11-10T02:27:23Z', 'elevation': 320.0, 'speed': 16.0, 'heading': 153, 'distance': 236.99904422194 }, { 'latitude': 23.8572082519531, 'longitude': 120.73477935791, 'time': '2021-11-10T02:30:10Z', 'elevation': 477.0, 'speed': 21.0, 'heading': 132, 'distance': 3070.61602363956 }, { 'latitude': 23.8547954559326, 'longitude': 120.73681640625, 'time': '2021-11-10T02:30:25Z', 'elevation': 482.0, 'speed': 22.0, 'heading': 147, 'distance': 338.334947563042 }, { 'latitude': 23.8333911895752, 'longitude': 120.763290405273, 'time': '2021-11-10T02:33:12Z', 'elevation': 457.0, 'speed': 24.0, 'heading': 121, 'distance': 3590.80145281045 }, { 'latitude': 23.8316135406494, 'longitude': 120.766784667969, 'time': '2021-11-10T02:33:27Z', 'elevation': 424.0, 'speed': 28.0, 'heading': 129, 'distance': 406.821848216451 }, { 'latitude': 23.8283424377441, 'longitude': 120.776588439941, 'time': '2021-11-10T02:36:15Z', 'elevation': 231.0, 'speed': 0.0, 'heading': 174, 'distance': 1062.53124956687 }, { 'latitude': 23.8283176422119, 'longitude': 120.776596069336, 'time': '2021-11-10T02:36:30Z', 'elevation': 225.0, 'speed': 0.0, 'heading': 174, 'distance': 2.85413908628841 }, { 'latitude': 23.8283443450928, 'longitude': 120.776573181152, 'time': '2021-11-10T02:39:16Z', 'elevation': 225.0, 'speed': 0.0, 'heading': 122, 'distance': 3.76628378810232 }, { 'latitude': 23.8283195495605, 'longitude': 120.77660369873, 'time': '2021-11-10T02:39:32Z', 'elevation': 225.0, 'speed': 0.0, 'heading': 132, 'distance': 4.14844708562772 }, { 'latitude': 23.8282642364502, 'longitude': 120.776573181152, 'time': '2021-11-10T02:42:19Z', 'elevation': 224.0, 'speed': 0.0, 'heading': 111, 'distance': 6.87012505374479 }, { 'latitude': 23.8282699584961, 'longitude': 120.776596069336, 'time': '2021-11-10T02:42:34Z', 'elevation': 225.0, 'speed': 0.0, 'heading': 192, 'distance': 2.41655659315697 }, { 'latitude': 23.8283271789551, 'longitude': 120.776611328125, 'time': '2021-11-10T02:45:21Z', 'elevation': 225.0, 'speed': 0.0, 'heading': 117, 'distance': 6.52539452423594 }, { 'latitude': 23.8283100128174, 'longitude': 120.776588439941, 'time': '2021-11-10T02:45:36Z', 'elevation': 225.0, 'speed': 0.0, 'heading': 140, 'distance': 3.00879520003142 }, { 'latitude': 23.8283233642578, 'longitude': 120.776588439941, 'time': '2021-11-10T02:48:23Z', 'elevation': 225.0, 'speed': 0.0, 'heading': 255, 'distance': 1.47874875155501 }, { 'latitude': 23.8283061981201, 'longitude': 120.776573181152, 'time': '2021-11-10T02:48:38Z', 'elevation': 225.0, 'speed': 0.0, 'heading': 255, 'distance': 2.45594794544197 }, { 'latitude': 23.8282833099365, 'longitude': 120.776550292969, 'time': '2021-11-10T02:51:25Z', 'elevation': 223.0, 'speed': 0.0, 'heading': 247, 'distance': 3.44446210516054 }, { 'latitude': 23.828254699707, 'longitude': 120.776596069336, 'time': '2021-11-10T02:51:40Z', 'elevation': 224.0, 'speed': 0.0, 'heading': 247, 'distance': 5.63856261866338 }, { 'latitude': 23.828296661377, 'longitude': 120.776641845703, 'time': '2021-11-10T02:54:27Z', 'elevation': 225.0, 'speed': 0.0, 'heading': 248, 'distance': 6.58419670411812 }, { 'latitude': 23.8283290863037, 'longitude': 120.776626586914, 'time': '2021-11-10T02:54:42Z', 'elevation': 224.0, 'speed': 0.0, 'heading': 246, 'distance': 3.91330930152823 }, { 'latitude': 23.8283176422119, 'longitude': 120.776580810547, 'time': '2021-11-10T02:57:29Z', 'elevation': 225.0, 'speed': 0.0, 'heading': 154, 'distance': 4.83311124759052 }, { 'latitude': 23.8283348083496, 'longitude': 120.776588439941, 'time': '2021-11-10T02:57:44Z', 'elevation': 224.0, 'speed': 0.0, 'heading': 37, 'distance': 2.05401535332324 }, { 'latitude': 23.8282852172852, 'longitude': 120.776596069336, 'time': '2021-11-10T03:00:30Z', 'elevation': 224.0, 'speed': 0.0, 'heading': 157, 'distance': 5.54722804807194 }, { 'latitude': 23.8283271789551, 'longitude': 120.776580810547, 'time': '2021-11-10T03:00:46Z', 'elevation': 225.0, 'speed': 0.0, 'heading': 157, 'distance': 4.9006280092253 }, { 'latitude': 23.8282852172852, 'longitude': 120.776573181152, 'time': '2021-11-10T03:03:33Z', 'elevation': 225.0, 'speed': 0.0, 'heading': 39, 'distance': 4.71205406557009 }, { 'latitude': 23.8283023834229, 'longitude': 120.776588439941, 'time': '2021-11-10T03:03:48Z', 'elevation': 224.0, 'speed': 0.0, 'heading': 39, 'distance': 2.45594810024438 }, { 'latitude': 23.8283081054688, 'longitude': 120.776596069336, 'time': '2021-11-10T03:06:35Z', 'elevation': 224.0, 'speed': 0.0, 'heading': 273, 'distance': 1.00293179308233 }, { 'latitude': 23.8282985687256, 'longitude': 120.776573181152, 'time': '2021-11-10T03:06:50Z', 'elevation': 225.0, 'speed': 0.0, 'heading': 218, 'distance': 2.56003252727476 }, { 'latitude': 23.8281707763672, 'longitude': 120.776626586914, 'time': '2021-11-10T03:09:37Z', 'elevation': 225.0, 'speed': 0.0, 'heading': 293, 'distance': 15.1636336288509 }, { 'latitude': 23.8281745910645, 'longitude': 120.77668762207, 'time': '2021-11-10T03:09:52Z', 'elevation': 225.0, 'speed': 0.0, 'heading': 293, 'distance': 6.23294053897352 }, { 'latitude': 23.8282051086426, 'longitude': 120.776695251465, 'time': '2021-11-10T03:12:39Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 348, 'distance': 3.46822940428725 }, { 'latitude': 23.8282508850098, 'longitude': 120.776649475098, 'time': '2021-11-10T03:12:54Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 348, 'distance': 6.88892579270212 }, { 'latitude': 23.8282909393311, 'longitude': 120.776634216309, 'time': '2021-11-10T03:15:40Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 226, 'distance': 4.70076771071506 }, { 'latitude': 23.8282890319824, 'longitude': 120.776588439941, 'time': '2021-11-10T03:15:56Z', 'elevation': 227.0, 'speed': 0.0, 'heading': 226, 'distance': 4.66873092056487 }, { 'latitude': 23.8282928466797, 'longitude': 120.776565551758, 'time': '2021-11-10T03:18:43Z', 'elevation': 227.0, 'speed': 0.0, 'heading': 122, 'distance': 2.36993910220885 }, { 'latitude': 23.8283004760742, 'longitude': 120.77661895752, 'time': '2021-11-10T03:18:58Z', 'elevation': 227.0, 'speed': 0.0, 'heading': 66, 'distance': 5.50649470383318 }, { 'latitude': 23.8283386230469, 'longitude': 120.776626586914, 'time': '2021-11-10T03:21:45Z', 'elevation': 228.0, 'speed': 0.0, 'heading': 241, 'distance': 4.29590834818498 }, { 'latitude': 23.8283195495605, 'longitude': 120.776611328125, 'time': '2021-11-10T03:22:00Z', 'elevation': 227.0, 'speed': 0.0, 'heading': 241, 'distance': 2.62289592811078 }, { 'latitude': 23.8282737731934, 'longitude': 120.776596069336, 'time': '2021-11-10T03:24:47Z', 'elevation': 227.0, 'speed': 0.0, 'heading': 53, 'distance': 5.30299839585436 }, { 'latitude': 23.8282775878906, 'longitude': 120.776611328125, 'time': '2021-11-10T03:25:02Z', 'elevation': 227.0, 'speed': 0.0, 'heading': 53, 'distance': 1.61103763099216 }, { 'latitude': 23.8283290863037, 'longitude': 120.776512145996, 'time': '2021-11-10T03:27:48Z', 'elevation': 226.0, 'speed': 1.0, 'heading': 306, 'distance': 11.6038713387136 }, { 'latitude': 23.8282928466797, 'longitude': 120.776557922363, 'time': '2021-11-10T03:28:04Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 315, 'distance': 6.15325741044453 }, { 'latitude': 23.8283138275146, 'longitude': 120.776557922363, 'time': '2021-11-10T03:30:51Z', 'elevation': 227.0, 'speed': 0.0, 'heading': 38, 'distance': 2.32374803439578 }, { 'latitude': 23.828296661377, 'longitude': 120.776580810547, 'time': '2021-11-10T03:31:06Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 38, 'distance': 3.00879538318155 }, { 'latitude': 23.8282737731934, 'longitude': 120.776641845703, 'time': '2021-11-10T03:33:53Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 315, 'distance': 6.71544408106235 }, { 'latitude': 23.8282928466797, 'longitude': 120.77661895752, 'time': '2021-11-10T03:34:08Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 315, 'distance': 3.14654647404393 }, { 'latitude': 23.82834815979, 'longitude': 120.77661895752, 'time': '2021-11-10T03:36:54Z', 'elevation': 225.0, 'speed': 0.0, 'heading': 291, 'distance': 6.1262448311011 }, { 'latitude': 23.8283500671387, 'longitude': 120.77653503418, 'time': '2021-11-10T03:37:10Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 44, 'distance': 8.55324598317765 }, { 'latitude': 23.8283195495605, 'longitude': 120.776580810547, 'time': '2021-11-10T03:39:57Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 3, 'distance': 5.75992949050538 }, { 'latitude': 23.828296661377, 'longitude': 120.776611328125, 'time': '2021-11-10T03:40:12Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 3, 'distance': 4.01172712445395 }, { 'latitude': 23.8283538818359, 'longitude': 120.776557922363, 'time': '2021-11-10T03:42:59Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 304, 'distance': 8.35292078712814 }, { 'latitude': 23.828296661377, 'longitude': 120.77660369873, 'time': '2021-11-10T03:43:14Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 304, 'distance': 7.86868786285661 }, { 'latitude': 23.8282451629639, 'longitude': 120.776596069336, 'time': '2021-11-10T03:46:01Z', 'elevation': 224.0, 'speed': 0.0, 'heading': 340, 'distance': 5.756469652602 }, { 'latitude': 23.8282661437988, 'longitude': 120.776588439941, 'time': '2021-11-10T03:46:16Z', 'elevation': 225.0, 'speed': 0.0, 'heading': 340, 'distance': 2.45031408552622 }, { 'latitude': 23.8282585144043, 'longitude': 120.776573181152, 'time': '2021-11-10T03:49:03Z', 'elevation': 227.0, 'speed': 0.0, 'heading': 4, 'distance': 1.76945205635041 }, { 'latitude': 23.828275680542, 'longitude': 120.776596069336, 'time': '2021-11-10T03:49:18Z', 'elevation': 227.0, 'speed': 0.0, 'heading': 4, 'distance': 3.00879590542809 }, { 'latitude': 23.8282775878906, 'longitude': 120.776588439941, 'time': '2021-11-10T03:52:05Z', 'elevation': 227.0, 'speed': 0.0, 'heading': 204, 'distance': 0.805518808692173 }, { 'latitude': 23.8282890319824, 'longitude': 120.77660369873, 'time': '2021-11-10T03:52:20Z', 'elevation': 227.0, 'speed': 0.0, 'heading': 204, 'distance': 2.00586378989086 }, { 'latitude': 23.8282985687256, 'longitude': 120.776565551758, 'time': '2021-11-10T03:55:07Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 133, 'distance': 4.02759355599386 }, { 'latitude': 23.8282890319824, 'longitude': 120.776626586914, 'time': '2021-11-10T03:55:22Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 133, 'distance': 6.30766456200566 }, { 'latitude': 23.8282947540283, 'longitude': 120.776611328125, 'time': '2021-11-10T03:58:09Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 172, 'distance': 1.67886094802238 }, { 'latitude': 23.8282909393311, 'longitude': 120.77660369873, 'time': '2021-11-10T03:58:24Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 172, 'distance': 0.884725868443813 }, { 'latitude': 23.8283100128174, 'longitude': 120.77668762207, 'time': '2021-11-10T04:01:11Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 296, 'distance': 8.8077291949477 }, { 'latitude': 23.8283214569092, 'longitude': 120.776649475098, 'time': '2021-11-10T04:01:26Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 296, 'distance': 4.0880797594028 }, { 'latitude': 23.828296661377, 'longitude': 120.776550292969, 'time': '2021-11-10T04:04:13Z', 'elevation': 227.0, 'speed': 0.0, 'heading': 296, 'distance': 10.4718187743568 }, { 'latitude': 23.8282890319824, 'longitude': 120.776573181152, 'time': '2021-11-10T04:04:28Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 296, 'distance': 2.48034857041737 }, { 'latitude': 23.8283805847168, 'longitude': 120.776573181152, 'time': '2021-11-10T04:07:15Z', 'elevation': 227.0, 'speed': 2.0, 'heading': 300, 'distance': 10.1399914626147 }, { 'latitude': 23.8282585144043, 'longitude': 120.77661895752, 'time': '2021-11-10T04:07:30Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 353, 'distance': 14.3018356704098 }, { 'latitude': 23.8282127380371, 'longitude': 120.776550292969, 'time': '2021-11-10T04:10:17Z', 'elevation': 228.0, 'speed': 0.0, 'heading': 236, 'distance': 8.63989850413893 }, { 'latitude': 23.828239440918, 'longitude': 120.776565551758, 'time': '2021-11-10T04:10:32Z', 'elevation': 229.0, 'speed': 0.0, 'heading': 206, 'distance': 3.34121675681789 }, { 'latitude': 23.8282680511475, 'longitude': 120.776557922363, 'time': '2021-11-10T04:13:19Z', 'elevation': 229.0, 'speed': 0.0, 'heading': 0, 'distance': 3.2626973072005 }, { 'latitude': 23.8282871246338, 'longitude': 120.776573181152, 'time': '2021-11-10T04:13:34Z', 'elevation': 229.0, 'speed': 0.0, 'heading': 0, 'distance': 2.62289627947046 }, { 'latitude': 23.8283061981201, 'longitude': 120.776611328125, 'time': '2021-11-10T04:16:21Z', 'elevation': 228.0, 'speed': 0.0, 'heading': 10, 'distance': 4.42362924632658 }, { 'latitude': 23.8283290863037, 'longitude': 120.776626586914, 'time': '2021-11-10T04:16:36Z', 'elevation': 229.0, 'speed': 0.0, 'heading': 10, 'distance': 2.97374324679602 }, { 'latitude': 23.8282794952393, 'longitude': 120.77661895752, 'time': '2021-11-10T04:19:23Z', 'elevation': 228.0, 'speed': 0.0, 'heading': 265, 'distance': 5.54722804907063 }, { 'latitude': 23.8282833099365, 'longitude': 120.776611328125, 'time': '2021-11-10T04:19:38Z', 'elevation': 229.0, 'speed': 0.0, 'heading': 211, 'distance': 0.884725927838844 }, { 'latitude': 23.8283424377441, 'longitude': 120.776710510254, 'time': '2021-11-10T04:22:24Z', 'elevation': 228.0, 'speed': 0.0, 'heading': 325, 'distance': 12.0417257983388 }, { 'latitude': 23.8283233642578, 'longitude': 120.776634216309, 'time': '2021-11-10T04:22:40Z', 'elevation': 228.0, 'speed': 0.0, 'heading': 333, 'distance': 8.05524383962945 }, { 'latitude': 23.8283405303955, 'longitude': 120.776580810547, 'time': '2021-11-10T04:25:27Z', 'elevation': 229.0, 'speed': 0.0, 'heading': 354, 'distance': 5.76386932464671 }, { 'latitude': 23.8283309936523, 'longitude': 120.776596069336, 'time': '2021-11-10T04:25:42Z', 'elevation': 229.0, 'speed': 0.0, 'heading': 354, 'distance': 1.87952021842125 }, { 'latitude': 23.8283023834229, 'longitude': 120.77660369873, 'time': '2021-11-10T04:28:29Z', 'elevation': 229.0, 'speed': 0.0, 'heading': 46, 'distance': 3.26269724379971 }, { 'latitude': 23.8282909393311, 'longitude': 120.77661895752, 'time': '2021-11-10T04:28:44Z', 'elevation': 229.0, 'speed': 0.0, 'heading': 46, 'distance': 2.00586366609826 }, { 'latitude': 23.8283214569092, 'longitude': 120.776596069336, 'time': '2021-11-10T04:31:30Z', 'elevation': 228.0, 'speed': 0.0, 'heading': 333, 'distance': 4.10639559870669 }, { 'latitude': 23.8283081054688, 'longitude': 120.776626586914, 'time': '2021-11-10T04:31:46Z', 'elevation': 229.0, 'speed': 0.0, 'heading': 77, 'distance': 3.44302734289437 }, { 'latitude': 23.8283100128174, 'longitude': 120.776557922363, 'time': '2021-11-10T04:34:33Z', 'elevation': 230.0, 'speed': 0.0, 'heading': 319, 'distance': 6.99911147945139 }, { 'latitude': 23.8282890319824, 'longitude': 120.776596069336, 'time': '2021-11-10T04:34:48Z', 'elevation': 231.0, 'speed': 0.0, 'heading': 319, 'distance': 4.52831660258815 }, { 'latitude': 23.8282833099365, 'longitude': 120.776580810547, 'time': '2021-11-10T04:37:35Z', 'elevation': 231.0, 'speed': 0.0, 'heading': 338, 'distance': 1.67886100853481 }, { 'latitude': 23.8282585144043, 'longitude': 120.776557922363, 'time': '2021-11-10T04:37:50Z', 'elevation': 231.0, 'speed': 0.0, 'heading': 354, 'distance': 3.60277439035994 }, { 'latitude': 23.8283557891846, 'longitude': 120.776649475098, 'time': '2021-11-10T04:40:37Z', 'elevation': 231.0, 'speed': 0.0, 'heading': 346, 'distance': 14.2507728117925 }, { 'latitude': 23.8283081054688, 'longitude': 120.776672363281, 'time': '2021-11-10T04:40:52Z', 'elevation': 232.0, 'speed': 0.0, 'heading': 346, 'distance': 5.77318426395767 }, { 'latitude': 23.8283443450928, 'longitude': 120.776649475098, 'time': '2021-11-10T04:43:39Z', 'elevation': 230.0, 'speed': 0.0, 'heading': 321, 'distance': 4.64201080835085 }, { 'latitude': 23.8283100128174, 'longitude': 120.776611328125, 'time': '2021-11-10T04:43:54Z', 'elevation': 231.0, 'speed': 0.0, 'heading': 318, 'distance': 5.43735430337152 }, { 'latitude': 23.828311920166, 'longitude': 120.776641845703, 'time': '2021-11-10T04:46:41Z', 'elevation': 231.0, 'speed': 0.0, 'heading': 69, 'distance': 3.11646698185059 }, { 'latitude': 23.8282737731934, 'longitude': 120.77661895752, 'time': '2021-11-10T04:46:56Z', 'elevation': 231.0, 'speed': 0.0, 'heading': 215, 'distance': 4.82583671414901 }, { 'latitude': 23.8283500671387, 'longitude': 120.776557922363, 'time': '2021-11-10T04:49:43Z', 'elevation': 231.0, 'speed': 0.0, 'heading': 195, 'distance': 10.4915841806048 }, { 'latitude': 23.828332901001, 'longitude': 120.776596069336, 'time': '2021-11-10T04:49:58Z', 'elevation': 231.0, 'speed': 0.0, 'heading': 195, 'distance': 4.32672879897987 }, { 'latitude': 23.8283653259277, 'longitude': 120.77653503418, 'time': '2021-11-10T04:52:45Z', 'elevation': 231.0, 'speed': 0.0, 'heading': 298, 'distance': 7.18108572052954 }, { 'latitude': 23.8283271789551, 'longitude': 120.776580810547, 'time': '2021-11-10T04:53:00Z', 'elevation': 231.0, 'speed': 0.0, 'heading': 298, 'distance': 6.29309130338251 }, { 'latitude': 23.8282623291016, 'longitude': 120.776657104492, 'time': '2021-11-10T04:55:47Z', 'elevation': 232.0, 'speed': 0.0, 'heading': 306, 'distance': 10.5835985731956 }, { 'latitude': 23.8283081054688, 'longitude': 120.776611328125, 'time': '2021-11-10T04:56:02Z', 'elevation': 231.0, 'speed': 0.0, 'heading': 330, 'distance': 6.88892443651595 }, { 'latitude': 23.8283271789551, 'longitude': 120.776596069336, 'time': '2021-11-10T04:58:49Z', 'elevation': 231.0, 'speed': 0.0, 'heading': 166, 'distance': 2.62289600731346 }, { 'latitude': 23.8283157348633, 'longitude': 120.776596069336, 'time': '2021-11-10T04:59:04Z', 'elevation': 232.0, 'speed': 0.0, 'heading': 166, 'distance': 1.26749893041774 }, { 'latitude': 23.8283138275146, 'longitude': 120.776580810547, 'time': '2021-11-10T05:01:51Z', 'elevation': 232.0, 'speed': 0.0, 'heading': 234, 'distance': 1.56893636971991 }, { 'latitude': 23.8283271789551, 'longitude': 120.77660369873, 'time': '2021-11-10T05:02:06Z', 'elevation': 231.0, 'speed': 0.0, 'heading': 234, 'distance': 2.7613041861564 }, { 'latitude': 23.8283519744873, 'longitude': 120.77661895752, 'time': '2021-11-10T05:04:53Z', 'elevation': 230.0, 'speed': 0.0, 'heading': 297, 'distance': 3.15575827653766 }, { 'latitude': 23.8283214569092, 'longitude': 120.776596069336, 'time': '2021-11-10T05:05:08Z', 'elevation': 231.0, 'speed': 0.0, 'heading': 297, 'distance': 4.10639529899112 }, { 'latitude': 23.8282566070557, 'longitude': 120.776542663574, 'time': '2021-11-10T05:07:54Z', 'elevation': 230.0, 'speed': 0.0, 'heading': 276, 'distance': 9.01086468480244 }, { 'latitude': 23.8283004760742, 'longitude': 120.776596069336, 'time': '2021-11-10T05:08:10Z', 'elevation': 229.0, 'speed': 0.0, 'heading': 124, 'distance': 7.29485296797141 }, { 'latitude': 23.8282604217529, 'longitude': 120.77660369873, 'time': '2021-11-10T05:10:57Z', 'elevation': 229.0, 'speed': 0.0, 'heading': 261, 'distance': 4.50383333232028 }, { 'latitude': 23.8282470703125, 'longitude': 120.776588439941, 'time': '2021-11-10T05:11:12Z', 'elevation': 229.0, 'speed': 0.0, 'heading': 261, 'distance': 2.14560829338498 }, { 'latitude': 23.8282432556152, 'longitude': 120.776626586914, 'time': '2021-11-10T05:13:59Z', 'elevation': 228.0, 'speed': 0.0, 'heading': 33, 'distance': 3.90952233501844 }, { 'latitude': 23.8282794952393, 'longitude': 120.776588439941, 'time': '2021-11-10T05:14:14Z', 'elevation': 228.0, 'speed': 0.0, 'heading': 310, 'distance': 5.5871295688078 }, { 'latitude': 23.8282814025879, 'longitude': 120.776550292969, 'time': '2021-11-10T05:17:01Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 91, 'distance': 3.89236139879755 }, { 'latitude': 23.8282527923584, 'longitude': 120.776588439941, 'time': '2021-11-10T05:17:16Z', 'elevation': 227.0, 'speed': 0.0, 'heading': 91, 'distance': 5.01465984322015 }, { 'latitude': 23.8280410766602, 'longitude': 120.776985168457, 'time': '2021-11-10T05:20:02Z', 'elevation': 227.0, 'speed': 0.0, 'heading': 312, 'distance': 46.7302982869942 }, { 'latitude': 23.8282833099365, 'longitude': 120.77668762207, 'time': '2021-11-10T05:20:18Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 51, 'distance': 40.4825476016829 }, { 'latitude': 23.828218460083, 'longitude': 120.776641845703, 'time': '2021-11-10T05:23:05Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 106, 'distance': 8.5639157643352 }, { 'latitude': 23.8282356262207, 'longitude': 120.776634216309, 'time': '2021-11-10T05:23:20Z', 'elevation': 226.0, 'speed': 0.0, 'heading': 156, 'distance': 2.05401555404688 }, { 'latitude': 23.8283519744873, 'longitude': 120.776626586914, 'time': '2021-11-10T05:26:07Z', 'elevation': 224.0, 'speed': 0.0, 'heading': 308, 'distance': 12.9096627221509 }, { 'latitude': 23.8283023834229, 'longitude': 120.776611328125, 'time': '2021-11-10T05:26:22Z', 'elevation': 225.0, 'speed': 0.0, 'heading': 308, 'distance': 5.70827818036498 }, { 'latitude': 23.8283843994141, 'longitude': 120.77660369873, 'time': '2021-11-10T05:29:09Z', 'elevation': 224.0, 'speed': 1.0, 'heading': 298, 'distance': 9.11694075545612 }, { 'latitude': 23.8283138275146, 'longitude': 120.77661895752, 'time': '2021-11-10T05:29:24Z', 'elevation': 224.0, 'speed': 0.0, 'heading': 283, 'distance': 7.96935348587554 }, { 'latitude': 23.8283290863037, 'longitude': 120.776626586914, 'time': '2021-11-10T05:32:11Z', 'elevation': 223.0, 'speed': 0.0, 'heading': 338, 'distance': 1.86019591262517 }, { 'latitude': 23.8283233642578, 'longitude': 120.77661895752, 'time': '2021-11-10T05:32:26Z', 'elevation': 223.0, 'speed': 0.0, 'heading': 54, 'distance': 1.00293169978474 }, { 'latitude': 23.8282260894775, 'longitude': 120.776672363281, 'time': '2021-11-10T05:35:13Z', 'elevation': 223.0, 'speed': 0.0, 'heading': 0, 'distance': 12.0698368624984 }, { 'latitude': 23.8282337188721, 'longitude': 120.776657104492, 'time': '2021-11-10T05:35:28Z', 'elevation': 224.0, 'speed': 0.0, 'heading': 0, 'distance': 1.76945239217229 }, { 'latitude': 23.8283157348633, 'longitude': 120.77661895752, 'time': '2021-11-10T05:38:15Z', 'elevation': 224.0, 'speed': 0.0, 'heading': 253, 'distance': 9.88029483072194 }, { 'latitude': 23.8282775878906, 'longitude': 120.776580810547, 'time': '2021-11-10T05:38:30Z', 'elevation': 224.0, 'speed': 0.0, 'heading': 247, 'distance': 5.74077013706203 }, { 'latitude': 23.8283271789551, 'longitude': 120.776565551758, 'time': '2021-11-10T05:41:16Z', 'elevation': 224.0, 'speed': 0.0, 'heading': 277, 'distance': 5.70827824404223 }, { 'latitude': 23.82834815979, 'longitude': 120.776580810547, 'time': '2021-11-10T05:41:32Z', 'elevation': 224.0, 'speed': 0.0, 'heading': 290, 'distance': 2.79584316110758 }, { 'latitude': 23.8283500671387, 'longitude': 120.776626586914, 'time': '2021-11-10T05:44:19Z', 'elevation': 223.0, 'speed': 0.0, 'heading': 331, 'distance': 4.66872880914635 }, { 'latitude': 23.8283004760742, 'longitude': 120.776580810547, 'time': '2021-11-10T05:44:34Z', 'elevation': 223.0, 'speed': 0.0, 'heading': 331, 'distance': 7.20554755267037 }, { 'latitude': 23.828311920166, 'longitude': 120.776573181152, 'time': '2021-11-10T05:47:21Z', 'elevation': 221.0, 'speed': 0.0, 'heading': 259, 'distance': 1.48687165804876 }, { 'latitude': 23.8283233642578, 'longitude': 120.776550292969, 'time': '2021-11-10T05:47:36Z', 'elevation': 222.0, 'speed': 0.0, 'heading': 259, 'distance': 2.65417721943735 }, { 'latitude': 23.8282814025879, 'longitude': 120.776588439941, 'time': '2021-11-10T05:50:23Z', 'elevation': 223.0, 'speed': 0.0, 'heading': 14, 'distance': 6.05847054891901 }, { 'latitude': 23.828254699707, 'longitude': 120.776588439941, 'time': '2021-11-10T05:50:38Z', 'elevation': 222.0, 'speed': 0.0, 'heading': 14, 'distance': 2.95749748453499 }, { 'latitude': 23.8282566070557, 'longitude': 120.77653503418, 'time': '2021-11-10T05:53:25Z', 'elevation': 223.0, 'speed': 0.0, 'heading': 199, 'distance': 5.44537466395706 }, { 'latitude': 23.8282489776611, 'longitude': 120.776557922363, 'time': '2021-11-10T05:53:40Z', 'elevation': 223.0, 'speed': 0.0, 'heading': 199, 'distance': 2.48034924229185 }, { 'latitude': 23.82834815979, 'longitude': 120.776557922363, 'time': '2021-11-10T05:56:27Z', 'elevation': 224.0, 'speed': 0.0, 'heading': 149, 'distance': 10.984990699888 }, { 'latitude': 23.8283538818359, 'longitude': 120.776542663574, 'time': '2021-11-10T05:56:42Z', 'elevation': 223.0, 'speed': 0.0, 'heading': 353, 'distance': 1.67886029753517 }, { 'latitude': 23.8281745910645, 'longitude': 120.776374816895, 'time': '2021-11-10T05:59:28Z', 'elevation': 223.0, 'speed': 0.0, 'heading': 26, 'distance': 26.2063652024008 }, { 'latitude': 23.8283042907715, 'longitude': 120.776481628418, 'time': '2021-11-10T05:59:43Z', 'elevation': 223.0, 'speed': 0.0, 'heading': 74, 'distance': 18.0217834602319 }, { 'latitude': 23.8283615112305, 'longitude': 120.776573181152, 'time': '2021-11-10T06:02:31Z', 'elevation': 223.0, 'speed': 0.0, 'heading': 220, 'distance': 11.2771821486891 }, { 'latitude': 23.8283596038818, 'longitude': 120.776588439941, 'time': '2021-11-10T06:02:46Z', 'elevation': 223.0, 'speed': 0.0, 'heading': 223, 'distance': 1.56893583189468 }, { 'latitude': 23.8284091949463, 'longitude': 120.776542663574, 'time': '2021-11-10T06:05:32Z', 'elevation': 223.0, 'speed': 0.0, 'heading': 302, 'distance': 7.20554621656598 }, { 'latitude': 23.8284339904785, 'longitude': 120.776550292969, 'time': '2021-11-10T06:05:48Z', 'elevation': 223.0, 'speed': 0.0, 'heading': 2, 'distance': 2.85413896910179 }, { 'latitude': 23.8283519744873, 'longitude': 120.776519775391, 'time': '2021-11-10T06:08:34Z', 'elevation': 223.0, 'speed': 0.0, 'heading': 229, 'distance': 9.60115118980876 }, { 'latitude': 23.8283309936523, 'longitude': 120.776557922363, 'time': '2021-11-10T06:08:50Z', 'elevation': 223.0, 'speed': 0.0, 'heading': 52, 'distance': 4.52831553861954 }, { 'latitude': 23.8293571472168, 'longitude': 120.778495788574, 'time': '2021-11-10T06:11:51Z', 'elevation': 223.0, 'speed': 3.0, 'heading': 104, 'distance': 227.81551654658 }, { 'latitude': 23.8225803375244, 'longitude': 120.768684387207, 'time': '2021-11-10T06:14:37Z', 'elevation': 219.0, 'speed': 1.0, 'heading': 48, 'distance': 1250.07473869386 }, { 'latitude': 23.8316612243652, 'longitude': 120.747383117676, 'time': '2021-11-10T06:17:39Z', 'elevation': 220.0, 'speed': 18.0, 'heading': 303, 'distance': 2392.0441531692 }, { 'latitude': 23.8331031799316, 'longitude': 120.744735717773, 'time': '2021-11-10T06:17:55Z', 'elevation': 222.0, 'speed': 21.0, 'heading': 281, 'distance': 313.460452243089 }, { 'latitude': 23.8348045349121, 'longitude': 120.720146179199, 'time': '2021-11-10T06:20:41Z', 'elevation': 203.0, 'speed': 15.0, 'heading': 259, 'distance': 2512.30568091746 }, { 'latitude': 23.8337841033936, 'longitude': 120.718276977539, 'time': '2021-11-10T06:20:57Z', 'elevation': 185.0, 'speed': 15.0, 'heading': 214, 'distance': 221.448888030809 }, { 'latitude': 23.8377265930176, 'longitude': 120.702713012695, 'time': '2021-11-10T06:23:43Z', 'elevation': 179.0, 'speed': 14.0, 'heading': 328, 'distance': 1644.68788533921 }, { 'latitude': 23.8391361236572, 'longitude': 120.702102661133, 'time': '2021-11-10T06:23:59Z', 'elevation': 175.0, 'speed': 2.0, 'heading': 347, 'distance': 168.041906866942 }, { 'latitude': 23.8455696105957, 'longitude': 120.698287963867, 'time': '2021-11-10T06:26:45Z', 'elevation': 166.0, 'speed': 0.0, 'heading': 176, 'distance': 811.635039442644 }, { 'latitude': 23.8455219268799, 'longitude': 120.698265075684, 'time': '2021-11-10T06:27:01Z', 'elevation': 158.0, 'speed': 0.0, 'heading': 219, 'distance': 5.77307073713139 }, { 'latitude': 23.8451824188232, 'longitude': 120.697929382324, 'time': '2021-11-10T06:29:48Z', 'elevation': 158.0, 'speed': 0.0, 'heading': 229, 'distance': 50.8277592887901 }, { 'latitude': 23.8452892303467, 'longitude': 120.698043823242, 'time': '2021-11-10T06:30:03Z', 'elevation': 158.0, 'speed': 0.0, 'heading': 350, 'distance': 16.6092963547491 }, { 'latitude': 23.8456058502197, 'longitude': 120.698333740234, 'time': '2021-11-10T06:32:49Z', 'elevation': 158.0, 'speed': 0.0, 'heading': 136, 'distance': 45.8479107575402 }, { 'latitude': 23.8455619812012, 'longitude': 120.698341369629, 'time': '2021-11-10T06:33:05Z', 'elevation': 158.0, 'speed': 0.0, 'heading': 234, 'distance': 4.92052752911171 }, { 'latitude': 23.8454761505127, 'longitude': 120.698402404785, 'time': '2021-11-10T06:36:06Z', 'elevation': 158.0, 'speed': 0.0, 'heading': 359, 'distance': 11.3591283069196 }, { 'latitude': 23.845588684082, 'longitude': 120.698356628418, 'time': '2021-11-10T06:38:52Z', 'elevation': 158.0, 'speed': 0.0, 'heading': 94, 'distance': 13.307598071269 }, { 'latitude': 23.8456897735596, 'longitude': 120.698295593262, 'time': '2021-11-10T06:39:08Z', 'elevation': 158.0, 'speed': 0.0, 'heading': 340, 'distance': 12.8069141713548 }, { 'latitude': 23.8459091186523, 'longitude': 120.698432922363, 'time': '2021-11-10T06:42:10Z', 'elevation': 158.0, 'speed': 0.0, 'heading': 50, 'distance': 28.0340914099132 }, { 'latitude': 23.8457679748535, 'longitude': 120.698310852051, 'time': '2021-11-10T06:44:56Z', 'elevation': 158.0, 'speed': 1.0, 'heading': 43, 'distance': 19.9754962712962 }, { 'latitude': 23.8456687927246, 'longitude': 120.698379516602, 'time': '2021-11-10T06:45:12Z', 'elevation': 158.0, 'speed': 0.0, 'heading': 41, 'distance': 13.0230732105667 }, { 'latitude': 23.8453731536865, 'longitude': 120.698425292969, 'time': '2021-11-10T06:47:58Z', 'elevation': 158.0, 'speed': 0.0, 'heading': 92, 'distance': 33.0742016336838 }, { 'latitude': 23.8455333709717, 'longitude': 120.698371887207, 'time': '2021-11-10T06:48:14Z', 'elevation': 158.0, 'speed': 0.0, 'heading': 185, 'distance': 18.5603223168734 }, { 'latitude': 23.845085144043, 'longitude': 120.698310852051, 'time': '2021-11-10T06:51:00Z', 'elevation': 157.0, 'speed': 0.0, 'heading': 95, 'distance': 50.0316849362611 }, { 'latitude': 23.8451805114746, 'longitude': 120.698295593262, 'time': '2021-11-10T06:51:16Z', 'elevation': 157.0, 'speed': 0.0, 'heading': 138, 'distance': 10.6762828812672 }, { 'latitude': 23.8455810546875, 'longitude': 120.698036193848, 'time': '2021-11-10T06:54:18Z', 'elevation': 157.0, 'speed': 0.0, 'heading': 325, 'distance': 51.6368004327703 }, { 'latitude': 23.8426628112793, 'longitude': 120.695411682129, 'time': '2021-11-10T06:57:04Z', 'elevation': 157.0, 'speed': 1.0, 'heading': 249, 'distance': 419.467478864176 }, { 'latitude': 23.8426723480225, 'longitude': 120.695785522461, 'time': '2021-11-10T06:57:20Z', 'elevation': 155.0, 'speed': 0.0, 'heading': 309, 'distance': 38.0996632412692 }, { 'latitude': 23.8405704498291, 'longitude': 120.694686889648, 'time': '2021-11-10T07:00:06Z', 'elevation': 155.0, 'speed': 7.0, 'heading': 212, 'distance': 258.305637561134 }, { 'latitude': 23.8387317657471, 'longitude': 120.695182800293, 'time': '2021-11-10T07:00:21Z', 'elevation': 155.0, 'speed': 14.0, 'heading': 162, 'distance': 209.8185448742 }, { 'latitude': 23.8388805389404, 'longitude': 120.702033996582, 'time': '2021-11-10T07:06:44Z', 'elevation': 183.0, 'speed': 1.0, 'heading': 347, 'distance': 698.181403812954 }, { 'latitude': 23.9519081115723, 'longitude': 120.663246154785, 'time': '2021-11-10T07:18:51Z', 'elevation': 69.0, 'speed': 0.0, 'heading': 0, 'distance': 13126.9274164211 }],
    [{ 'latitude': 25.4032497406006, 'longitude': 121.991249084473, 'time': '2021-11-09T23:32:14Z', 'elevation': 119.0, 'speed': 19.0, 'heading': 235, 'distance': 0.0 }, { 'latitude': 25.4008769989014, 'longitude': 121.990219116211, 'time': '2021-11-09T23:32:29Z', 'elevation': 127.0, 'speed': 21.0, 'heading': 200, 'distance': 282.542187074998 }, { 'latitude': 25.3980522155762, 'longitude': 121.989639282227, 'time': '2021-11-09T23:32:44Z', 'elevation': 131.0, 'speed': 23.0, 'heading': 203, 'distance': 318.318784221562 }, { 'latitude': 25.3953437805176, 'longitude': 121.988166809082, 'time': '2021-11-09T23:32:59Z', 'elevation': 146.0, 'speed': 22.0, 'heading': 222, 'distance': 334.627200326755 }, { 'latitude': 25.392520904541, 'longitude': 121.986808776855, 'time': '2021-11-09T23:33:14Z', 'elevation': 160.0, 'speed': 23.0, 'heading': 209, 'distance': 341.269112986133 }, { 'latitude': 25.3897190093994, 'longitude': 121.98583984375, 'time': '2021-11-09T23:33:29Z', 'elevation': 174.0, 'speed': 19.0, 'heading': 157, 'distance': 325.344198785246 }, { 'latitude': 25.3875141143799, 'longitude': 121.986892700195, 'time': '2021-11-09T23:33:44Z', 'elevation': 197.0, 'speed': 21.0, 'heading': 200, 'distance': 266.24413971884 }, { 'latitude': 25.3847560882568, 'longitude': 121.985725402832, 'time': '2021-11-09T23:33:59Z', 'elevation': 208.0, 'speed': 23.0, 'heading': 185, 'distance': 327.334006153629 }, { 'latitude': 25.381742477417, 'longitude': 121.98558807373, 'time': '2021-11-09T23:34:14Z', 'elevation': 215.0, 'speed': 24.0, 'heading': 207, 'distance': 334.129595376903 }, { 'latitude': 25.3788280487061, 'longitude': 121.984024047852, 'time': '2021-11-09T23:34:29Z', 'elevation': 209.0, 'speed': 23.0, 'heading': 194, 'distance': 359.180530489529 }, { 'latitude': 25.3426399230957, 'longitude': 121.969314575195, 'time': '2021-11-09T23:37:16Z', 'elevation': 292.0, 'speed': 27.0, 'heading': 202, 'distance': 4273.52285038869 }, { 'latitude': 25.3391876220703, 'longitude': 121.967567443848, 'time': '2021-11-09T23:37:31Z', 'elevation': 280.0, 'speed': 28.0, 'heading': 206, 'distance': 420.944757383526 }, { 'latitude': 25.297758102417, 'longitude': 121.956489562988, 'time': '2021-11-09T23:40:18Z', 'elevation': 207.0, 'speed': 25.0, 'heading': 206, 'distance': 4723.06405068379 }, { 'latitude': 25.2943382263184, 'longitude': 121.954940795898, 'time': '2021-11-09T23:40:33Z', 'elevation': 174.0, 'speed': 31.0, 'heading': 213, 'distance': 409.695487101655 }, { 'latitude': 25.2537670135498, 'longitude': 121.940299987793, 'time': '2021-11-09T23:43:20Z', 'elevation': 164.0, 'speed': 29.0, 'heading': 195, 'distance': 4730.11288361188 }, { 'latitude': 25.2503070831299, 'longitude': 121.938606262207, 'time': '2021-11-09T23:43:35Z', 'elevation': 173.0, 'speed': 27.0, 'heading': 204, 'distance': 419.545260612274 }, { 'latitude': 25.211030960083, 'longitude': 121.920928955078, 'time': '2021-11-09T23:46:22Z', 'elevation': 104.0, 'speed': 25.0, 'heading': 213, 'distance': 4701.34295670648 }, { 'latitude': 25.2081336975098, 'longitude': 121.918846130371, 'time': '2021-11-09T23:46:37Z', 'elevation': 106.0, 'speed': 26.0, 'heading': 219, 'distance': 383.492489762633 }, { 'latitude': 25.1784477233887, 'longitude': 121.893257141113, 'time': '2021-11-09T23:49:24Z', 'elevation': 128.0, 'speed': 25.0, 'heading': 209, 'distance': 4179.25636328271 }, { 'latitude': 25.1754512786865, 'longitude': 121.891883850098, 'time': '2021-11-09T23:49:39Z', 'elevation': 135.0, 'speed': 25.0, 'heading': 198, 'distance': 359.643566925076 }, { 'latitude': 25.1424713134766, 'longitude': 121.877716064453, 'time': '2021-11-09T23:52:26Z', 'elevation': 220.0, 'speed': 24.0, 'heading': 206, 'distance': 3922.67483791672 }, { 'latitude': 25.1397953033447, 'longitude': 121.875907897949, 'time': '2021-11-09T23:52:41Z', 'elevation': 241.0, 'speed': 23.0, 'heading': 212, 'distance': 348.017671357509 }, { 'latitude': 25.1221141815186, 'longitude': 121.846282958984, 'time': '2021-11-09T23:55:28Z', 'elevation': 331.0, 'speed': 26.0, 'heading': 236, 'distance': 3572.27358362515 }, { 'latitude': 25.1194534301758, 'longitude': 121.843208312988, 'time': '2021-11-09T23:55:43Z', 'elevation': 308.0, 'speed': 26.0, 'heading': 203, 'distance': 427.813749120387 }, { 'latitude': 25.1014995574951, 'longitude': 121.812171936035, 'time': '2021-11-09T23:58:30Z', 'elevation': 251.0, 'speed': 23.0, 'heading': 268, 'distance': 3708.6845177234 }, { 'latitude': 25.1011543273926, 'longitude': 121.808654785156, 'time': '2021-11-09T23:58:45Z', 'elevation': 238.0, 'speed': 23.0, 'heading': 259, 'distance': 356.82021988463 }, { 'latitude': 25.0989418029785, 'longitude': 121.769752502441, 'time': '2021-11-10T00:01:32Z', 'elevation': 173.0, 'speed': 21.0, 'heading': 255, 'distance': 3931.64952179765 }, { 'latitude': 25.098783493042, 'longitude': 121.766815185547, 'time': '2021-11-10T00:01:47Z', 'elevation': 185.0, 'speed': 20.0, 'heading': 291, 'distance': 296.80322169959 }, { 'latitude': 25.0932331085205, 'longitude': 121.728904724121, 'time': '2021-11-10T00:04:34Z', 'elevation': 172.0, 'speed': 17.0, 'heading': 253, 'distance': 3873.19714076322 }, { 'latitude': 25.0928211212158, 'longitude': 121.725547790527, 'time': '2021-11-10T00:04:49Z', 'elevation': 147.0, 'speed': 21.0, 'heading': 263, 'distance': 341.688642065929 }, { 'latitude': 25.0812149047852, 'longitude': 121.691123962402, 'time': '2021-11-10T00:07:36Z', 'elevation': 100.0, 'speed': 21.0, 'heading': 268, 'distance': 3702.99243513657 }, { 'latitude': 25.0805969238281, 'longitude': 121.687965393066, 'time': '2021-11-10T00:07:51Z', 'elevation': 86.0, 'speed': 21.0, 'heading': 246, 'distance': 325.919129884014 }, { 'latitude': 25.0653095245361, 'longitude': 121.656692504883, 'time': '2021-11-10T00:10:38Z', 'elevation': 85.0, 'speed': 21.0, 'heading': 241, 'distance': 3580.87015245168 }, { 'latitude': 25.0638999938965, 'longitude': 121.654106140137, 'time': '2021-11-10T00:10:53Z', 'elevation': 99.0, 'speed': 20.0, 'heading': 241, 'distance': 304.101981956164 }, { 'latitude': 25.0521450042725, 'longitude': 121.618721008301, 'time': '2021-11-10T00:13:40Z', 'elevation': 59.0, 'speed': 25.0, 'heading': 247, 'distance': 3800.48856338075 }, { 'latitude': 25.0514659881592, 'longitude': 121.61540222168, 'time': '2021-11-10T00:13:55Z', 'elevation': 55.0, 'speed': 23.0, 'heading': 264, 'distance': 343.234202879832 }, { 'latitude': 25.0371780395508, 'longitude': 121.580635070801, 'time': '2021-11-10T00:16:42Z', 'elevation': 56.0, 'speed': 21.0, 'heading': 234, 'distance': 3848.96143709526 }, { 'latitude': 25.0356025695801, 'longitude': 121.577659606934, 'time': '2021-11-10T00:16:57Z', 'elevation': 47.0, 'speed': 23.0, 'heading': 242, 'distance': 347.315807108028 }, { 'latitude': 25.0177211761475, 'longitude': 121.54753112793, 'time': '2021-11-10T00:19:44Z', 'elevation': 41.0, 'speed': 21.0, 'heading': 247, 'distance': 3629.05688362678 }, { 'latitude': 25.0163650512695, 'longitude': 121.544654846191, 'time': '2021-11-10T00:19:59Z', 'elevation': 44.0, 'speed': 23.0, 'heading': 244, 'distance': 326.883612776778 }, { 'latitude': 25.0000743865967, 'longitude': 121.513656616211, 'time': '2021-11-10T00:22:46Z', 'elevation': 48.0, 'speed': 22.0, 'heading': 227, 'distance': 3612.13391923178 }, { 'latitude': 24.9984188079834, 'longitude': 121.511039733887, 'time': '2021-11-10T00:23:01Z', 'elevation': 54.0, 'speed': 21.0, 'heading': 239, 'distance': 321.593042573897 }, { 'latitude': 24.9829349517822, 'longitude': 121.477554321289, 'time': '2021-11-10T00:25:48Z', 'elevation': 75.0, 'speed': 20.0, 'heading': 226, 'distance': 3790.8312031083 }, { 'latitude': 24.981351852417, 'longitude': 121.475700378418, 'time': '2021-11-10T00:26:03Z', 'elevation': 110.0, 'speed': 14.0, 'heading': 248, 'distance': 256.495481554306 }, { 'latitude': 24.9659080505371, 'longitude': 121.445816040039, 'time': '2021-11-10T00:28:50Z', 'elevation': 58.0, 'speed': 23.0, 'heading': 230, 'distance': 3468.68659755725 }, { 'latitude': 24.9642677307129, 'longitude': 121.443054199219, 'time': '2021-11-10T00:29:05Z', 'elevation': 68.0, 'speed': 21.0, 'heading': 250, 'distance': 332.856585990084 }, { 'latitude': 24.949499130249, 'longitude': 121.410888671875, 'time': '2021-11-10T00:31:52Z', 'elevation': 124.0, 'speed': 22.0, 'heading': 224, 'distance': 3636.95368145974 }, { 'latitude': 24.9473686218262, 'longitude': 121.408645629883, 'time': '2021-11-10T00:32:07Z', 'elevation': 135.0, 'speed': 23.0, 'heading': 226, 'distance': 327.127109522443 }, { 'latitude': 24.9263687133789, 'longitude': 121.380523681641, 'time': '2021-11-10T00:34:54Z', 'elevation': 178.0, 'speed': 22.0, 'heading': 234, 'distance': 3671.35759445785 }, { 'latitude': 24.9245548248291, 'longitude': 121.377807617188, 'time': '2021-11-10T00:35:09Z', 'elevation': 180.0, 'speed': 23.0, 'heading': 237, 'distance': 340.060311794913 }, { 'latitude': 24.9038524627686, 'longitude': 121.346954345703, 'time': '2021-11-10T00:37:56Z', 'elevation': 208.0, 'speed': 23.0, 'heading': 236, 'distance': 3869.54307595969 }, { 'latitude': 24.902229309082, 'longitude': 121.343948364258, 'time': '2021-11-10T00:38:11Z', 'elevation': 210.0, 'speed': 23.0, 'heading': 228, 'distance': 352.925512570728 }, { 'latitude': 24.8834419250488, 'longitude': 121.311363220215, 'time': '2021-11-10T00:40:58Z', 'elevation': 213.0, 'speed': 22.0, 'heading': 220, 'distance': 3894.91516323021 }, { 'latitude': 24.8812999725342, 'longitude': 121.309173583984, 'time': '2021-11-10T00:41:13Z', 'elevation': 218.0, 'speed': 22.0, 'heading': 226, 'distance': 324.420579090088 }, { 'latitude': 24.8559532165527, 'longitude': 121.288284301758, 'time': '2021-11-10T00:44:00Z', 'elevation': 267.0, 'speed': 21.0, 'heading': 224, 'distance': 3512.75653212519 }, { 'latitude': 24.8535537719727, 'longitude': 121.286727905273, 'time': '2021-11-10T00:44:15Z', 'elevation': 293.0, 'speed': 20.0, 'heading': 200, 'distance': 308.848630881699 }, { 'latitude': 24.8276233673096, 'longitude': 121.263328552246, 'time': '2021-11-10T00:47:02Z', 'elevation': 321.0, 'speed': 25.0, 'heading': 242, 'distance': 3720.81222470762 }, { 'latitude': 24.8260154724121, 'longitude': 121.26016998291, 'time': '2021-11-10T00:47:17Z', 'elevation': 324.0, 'speed': 24.0, 'heading': 245, 'distance': 365.618288956498 }, { 'latitude': 24.8150939941406, 'longitude': 121.23023223877, 'time': '2021-11-10T00:50:04Z', 'elevation': 410.0, 'speed': 21.0, 'heading': 279, 'distance': 3259.41978398573 }, { 'latitude': 24.814525604248, 'longitude': 121.226860046387, 'time': '2021-11-10T00:50:19Z', 'elevation': 410.0, 'speed': 25.0, 'heading': 242, 'distance': 346.696403851367 }, { 'latitude': 24.789852142334, 'longitude': 121.195465087891, 'time': '2021-11-10T00:53:06Z', 'elevation': 340.0, 'speed': 23.0, 'heading': 214, 'distance': 4188.84225374811 }, { 'latitude': 24.7870903015137, 'longitude': 121.193794250488, 'time': '2021-11-10T00:53:21Z', 'elevation': 336.0, 'speed': 22.0, 'heading': 209, 'distance': 349.484292278334 }, { 'latitude': 24.7670001983643, 'longitude': 121.164733886719, 'time': '2021-11-10T00:56:08Z', 'elevation': 356.0, 'speed': 20.0, 'heading': 256, 'distance': 3686.39673423659 }, { 'latitude': 24.7665710449219, 'longitude': 121.161613464355, 'time': '2021-11-10T00:56:23Z', 'elevation': 370.0, 'speed': 21.0, 'heading': 258, 'distance': 319.158967216233 }, { 'latitude': 24.7582874298096, 'longitude': 121.125114440918, 'time': '2021-11-10T00:59:10Z', 'elevation': 438.0, 'speed': 28.0, 'heading': 241, 'distance': 3803.95714704207 }, { 'latitude': 24.7561092376709, 'longitude': 121.121612548828, 'time': '2021-11-10T00:59:25Z', 'elevation': 446.0, 'speed': 29.0, 'heading': 236, 'distance': 428.576366617032 }, { 'latitude': 24.7349071502686, 'longitude': 121.082992553711, 'time': '2021-11-10T01:02:12Z', 'elevation': 396.0, 'speed': 24.0, 'heading': 235, 'distance': 4558.26761162631 }, { 'latitude': 24.7333106994629, 'longitude': 121.079612731934, 'time': '2021-11-10T01:02:27Z', 'elevation': 391.0, 'speed': 25.0, 'heading': 243, 'distance': 384.945896256619 }, { 'latitude': 24.71067237854, 'longitude': 121.044067382812, 'time': '2021-11-10T01:05:14Z', 'elevation': 354.0, 'speed': 26.0, 'heading': 234, 'distance': 4384.26737361122 }, { 'latitude': 24.7086601257324, 'longitude': 121.040679931641, 'time': '2021-11-10T01:05:29Z', 'elevation': 355.0, 'speed': 26.0, 'heading': 234, 'distance': 408.862043582989 }, { 'latitude': 24.6889133453369, 'longitude': 121.001899719238, 'time': '2021-11-10T01:08:16Z', 'elevation': 325.0, 'speed': 26.0, 'heading': 243, 'distance': 4492.76513727575 }, { 'latitude': 24.6873893737793, 'longitude': 120.998199462891, 'time': '2021-11-10T01:08:31Z', 'elevation': 322.0, 'speed': 27.0, 'heading': 251, 'distance': 410.767804549247 }, { 'latitude': 24.6656379699707, 'longitude': 120.958099365234, 'time': '2021-11-10T01:11:18Z', 'elevation': 284.0, 'speed': 27.0, 'heading': 231, 'distance': 4719.91576443963 }, { 'latitude': 24.6632347106934, 'longitude': 120.955070495605, 'time': '2021-11-10T01:11:33Z', 'elevation': 285.0, 'speed': 26.0, 'heading': 230, 'distance': 406.031929172787 }, { 'latitude': 24.6337718963623, 'longitude': 120.922813415527, 'time': '2021-11-10T01:14:20Z', 'elevation': 262.0, 'speed': 28.0, 'heading': 219, 'distance': 4616.76092142739 }, { 'latitude': 24.6308612823486, 'longitude': 120.919876098633, 'time': '2021-11-10T01:14:35Z', 'elevation': 256.0, 'speed': 29.0, 'heading': 225, 'distance': 438.621232636625 }, { 'latitude': 24.6032180786133, 'longitude': 120.883438110352, 'time': '2021-11-10T01:17:22Z', 'elevation': 258.0, 'speed': 27.0, 'heading': 233, 'distance': 4794.76461474145 }, { 'latitude': 24.6007480621338, 'longitude': 120.880012512207, 'time': '2021-11-10T01:17:37Z', 'elevation': 258.0, 'speed': 29.0, 'heading': 231, 'distance': 441.824073982308 }, { 'latitude': 24.5674057006836, 'longitude': 120.84986114502, 'time': '2021-11-10T01:20:24Z', 'elevation': 228.0, 'speed': 28.0, 'heading': 222, 'distance': 4792.33916909691 }, { 'latitude': 24.5650310516357, 'longitude': 120.8466796875, 'time': '2021-11-10T01:20:39Z', 'elevation': 227.0, 'speed': 27.0, 'heading': 225, 'distance': 415.998030162007 }, { 'latitude': 24.5342464447021, 'longitude': 120.814193725586, 'time': '2021-11-10T01:23:26Z', 'elevation': 292.0, 'speed': 28.0, 'heading': 218, 'distance': 4739.21162547095 }, { 'latitude': 24.5313282012939, 'longitude': 120.811416625977, 'time': '2021-11-10T01:23:41Z', 'elevation': 293.0, 'speed': 28.0, 'heading': 220, 'distance': 428.568548159524 }, { 'latitude': 24.4989318847656, 'longitude': 120.777824401855, 'time': '2021-11-10T01:26:28Z', 'elevation': 317.0, 'speed': 30.0, 'heading': 215, 'distance': 4946.31702281311 }, { 'latitude': 24.4957714080811, 'longitude': 120.775123596191, 'time': '2021-11-10T01:26:43Z', 'elevation': 330.0, 'speed': 29.0, 'heading': 217, 'distance': 444.39469859133 }, { 'latitude': 24.4607467651367, 'longitude': 120.755157470703, 'time': '2021-11-10T01:29:30Z', 'elevation': 404.0, 'speed': 29.0, 'heading': 216, 'distance': 4375.75375423272 }, { 'latitude': 24.4574890136719, 'longitude': 120.75260925293, 'time': '2021-11-10T01:29:45Z', 'elevation': 400.0, 'speed': 31.0, 'heading': 219, 'distance': 443.798782853628 }, { 'latitude': 24.4242458343506, 'longitude': 120.720077514648, 'time': '2021-11-10T01:32:32Z', 'elevation': 382.0, 'speed': 25.0, 'heading': 214, 'distance': 4943.71971835382 }, { 'latitude': 24.4214820861816, 'longitude': 120.717391967773, 'time': '2021-11-10T01:32:47Z', 'elevation': 380.0, 'speed': 29.0, 'heading': 223, 'distance': 409.745948212773 }, { 'latitude': 24.3854389190674, 'longitude': 120.684638977051, 'time': '2021-11-10T01:35:35Z', 'elevation': 345.0, 'speed': 30.0, 'heading': 216, 'distance': 5193.7842744224 }, { 'latitude': 24.3820323944092, 'longitude': 120.682090759277, 'time': '2021-11-10T01:35:50Z', 'elevation': 337.0, 'speed': 29.0, 'heading': 209, 'distance': 457.381717862948 }, { 'latitude': 24.3432083129883, 'longitude': 120.666038513184, 'time': '2021-11-10T01:38:37Z', 'elevation': 286.0, 'speed': 25.0, 'heading': 173, 'distance': 4598.39942095488 }, { 'latitude': 24.3397636413574, 'longitude': 120.666633605957, 'time': '2021-11-10T01:38:52Z', 'elevation': 289.0, 'speed': 26.0, 'heading': 185, 'distance': 386.292568272052 }, { 'latitude': 24.3043212890625, 'longitude': 120.662048339844, 'time': '2021-11-10T01:41:40Z', 'elevation': 260.0, 'speed': 22.0, 'heading': 194, 'distance': 3953.18721678671 }, { 'latitude': 24.3013725280762, 'longitude': 120.661460876465, 'time': '2021-11-10T01:41:55Z', 'elevation': 253.0, 'speed': 23.0, 'heading': 182, 'distance': 332.012060006409 }, { 'latitude': 24.2668514251709, 'longitude': 120.651473999023, 'time': '2021-11-10T01:44:42Z', 'elevation': 243.0, 'speed': 24.0, 'heading': 191, 'distance': 3955.79084030039 }, { 'latitude': 24.2636413574219, 'longitude': 120.651077270508, 'time': '2021-11-10T01:44:57Z', 'elevation': 250.0, 'speed': 22.0, 'heading': 186, 'distance': 357.828607143204 }, { 'latitude': 24.2264099121094, 'longitude': 120.646728515625, 'time': '2021-11-10T01:47:44Z', 'elevation': 234.0, 'speed': 25.0, 'heading': 182, 'distance': 4147.40333730032 }, { 'latitude': 24.2228908538818, 'longitude': 120.646583557129, 'time': '2021-11-10T01:47:59Z', 'elevation': 221.0, 'speed': 26.0, 'heading': 179, 'distance': 390.054086248219 }, { 'latitude': 24.1887397766113, 'longitude': 120.654235839844, 'time': '2021-11-10T01:50:46Z', 'elevation': 169.0, 'speed': 23.0, 'heading': 147, 'distance': 3861.6714493613 }, { 'latitude': 24.1859760284424, 'longitude': 120.655708312988, 'time': '2021-11-10T01:51:01Z', 'elevation': 163.0, 'speed': 21.0, 'heading': 157, 'distance': 340.719029973398 }, { 'latitude': 24.1566371917725, 'longitude': 120.665100097656, 'time': '2021-11-10T01:53:48Z', 'elevation': 211.0, 'speed': 22.0, 'heading': 190, 'distance': 3386.83354861185 }, { 'latitude': 24.1537170410156, 'longitude': 120.664482116699, 'time': '2021-11-10T01:54:03Z', 'elevation': 217.0, 'speed': 21.0, 'heading': 188, 'distance': 329.478574412519 }, { 'latitude': 24.1215934753418, 'longitude': 120.658729553223, 'time': '2021-11-10T01:56:50Z', 'elevation': 192.0, 'speed': 23.0, 'heading': 209, 'distance': 3605.73721114952 }, { 'latitude': 24.1189517974854, 'longitude': 120.656715393066, 'time': '2021-11-10T01:57:05Z', 'elevation': 156.0, 'speed': 23.0, 'heading': 205, 'distance': 357.119208567364 }, { 'latitude': 24.0928993225098, 'longitude': 120.637344360352, 'time': '2021-11-10T01:59:52Z', 'elevation': 115.0, 'speed': 23.0, 'heading': 189, 'distance': 3493.58055489284 }, { 'latitude': 24.0897769927979, 'longitude': 120.636863708496, 'time': '2021-11-10T02:00:07Z', 'elevation': 109.0, 'speed': 24.0, 'heading': 185, 'distance': 349.264083474491 }, { 'latitude': 24.0547771453857, 'longitude': 120.635818481445, 'time': '2021-11-10T02:02:54Z', 'elevation': 110.0, 'speed': 23.0, 'heading': 178, 'distance': 3878.01434905748 }, { 'latitude': 24.0515365600586, 'longitude': 120.635643005371, 'time': '2021-11-10T02:03:09Z', 'elevation': 102.0, 'speed': 24.0, 'heading': 183, 'distance': 359.367417025714 }, { 'latitude': 24.0166454315186, 'longitude': 120.639869689941, 'time': '2021-11-10T02:05:56Z', 'elevation': 105.0, 'speed': 20.0, 'heading': 198, 'distance': 3888.34126068621 }, { 'latitude': 24.0138339996338, 'longitude': 120.639839172363, 'time': '2021-11-10T02:06:11Z', 'elevation': 115.0, 'speed': 20.0, 'heading': 181, 'distance': 311.405286080408 }, { 'latitude': 23.9810543060303, 'longitude': 120.652076721191, 'time': '2021-11-10T02:08:58Z', 'elevation': 119.0, 'speed': 22.0, 'heading': 169, 'distance': 3838.22372148826 }, { 'latitude': 23.9782238006592, 'longitude': 120.653129577637, 'time': '2021-11-10T02:09:13Z', 'elevation': 117.0, 'speed': 22.0, 'heading': 164, 'distance': 331.305395022275 }, { 'latitude': 23.9484119415283, 'longitude': 120.663604736328, 'time': '2021-11-10T02:12:00Z', 'elevation': 134.0, 'speed': 19.0, 'heading': 155, 'distance': 3469.75631792479 }, { 'latitude': 23.9459266662598, 'longitude': 120.664611816406, 'time': '2021-11-10T02:12:15Z', 'elevation': 137.0, 'speed': 19.0, 'heading': 155, 'distance': 293.732371531062 }, { 'latitude': 23.9155883789062, 'longitude': 120.676742553711, 'time': '2021-11-10T02:15:02Z', 'elevation': 154.0, 'speed': 21.0, 'heading': 166, 'distance': 3579.94739517906 }, { 'latitude': 23.9128112792969, 'longitude': 120.676971435547, 'time': '2021-11-10T02:15:17Z', 'elevation': 162.0, 'speed': 21.0, 'heading': 172, 'distance': 308.464760971053 }, { 'latitude': 23.8809032440186, 'longitude': 120.682258605957, 'time': '2021-11-10T02:18:04Z', 'elevation': 195.0, 'speed': 23.0, 'heading': 175, 'distance': 3574.80740045187 }, { 'latitude': 23.8778705596924, 'longitude': 120.682640075684, 'time': '2021-11-10T02:18:19Z', 'elevation': 205.0, 'speed': 21.0, 'heading': 159, 'distance': 338.128883875482 }, { 'latitude': 23.8478183746338, 'longitude': 120.694374084473, 'time': '2021-11-10T02:21:06Z', 'elevation': 204.0, 'speed': 20.0, 'heading': 139, 'distance': 3536.5576037671 }, { 'latitude': 23.8460960388184, 'longitude': 120.696624755859, 'time': '2021-11-10T02:21:21Z', 'elevation': 198.0, 'speed': 20.0, 'heading': 124, 'distance': 298.258694182407 }, { 'latitude': 23.8454418182373, 'longitude': 120.698524475098, 'time': '2021-11-10T02:24:08Z', 'elevation': 195.0, 'speed': 0.0, 'heading': 181, 'distance': 206.649321203887 }, { 'latitude': 23.8455905914307, 'longitude': 120.69847869873, 'time': '2021-11-10T02:24:23Z', 'elevation': 195.0, 'speed': 0.0, 'heading': 181, 'distance': 17.1247024953163 }, { 'latitude': 23.8456287384033, 'longitude': 120.698402404785, 'time': '2021-11-10T02:27:10Z', 'elevation': 194.0, 'speed': 0.0, 'heading': 201, 'distance': 8.8464101056538 }, { 'latitude': 23.8456382751465, 'longitude': 120.698394775391, 'time': '2021-11-10T02:27:25Z', 'elevation': 194.0, 'speed': 0.0, 'heading': 201, 'distance': 1.31138874702615 }, { 'latitude': 23.8454399108887, 'longitude': 120.69849395752, 'time': '2021-11-10T02:30:12Z', 'elevation': 193.0, 'speed': 1.0, 'heading': 180, 'distance': 24.1820671946982 }, { 'latitude': 23.8454971313477, 'longitude': 120.698463439941, 'time': '2021-11-10T02:30:27Z', 'elevation': 193.0, 'speed': 0.0, 'heading': 177, 'distance': 7.05898106574102 }, { 'latitude': 23.8455429077148, 'longitude': 120.698432922363, 'time': '2021-11-10T02:33:14Z', 'elevation': 194.0, 'speed': 1.0, 'heading': 174, 'distance': 5.94728174854316 }, { 'latitude': 23.8455848693848, 'longitude': 120.698425292969, 'time': '2021-11-10T02:33:29Z', 'elevation': 193.0, 'speed': 0.0, 'heading': 215, 'distance': 4.71204735990761 }, { 'latitude': 23.8455276489258, 'longitude': 120.698593139648, 'time': '2021-11-10T02:36:16Z', 'elevation': 193.0, 'speed': 0.0, 'heading': 211, 'distance': 18.2356906713252 }, { 'latitude': 23.845516204834, 'longitude': 120.698501586914, 'time': '2021-11-10T02:36:31Z', 'elevation': 192.0, 'speed': 0.0, 'heading': 254, 'distance': 9.4124717922158 }, { 'latitude': 23.8456134796143, 'longitude': 120.69847869873, 'time': '2021-11-10T02:39:18Z', 'elevation': 191.0, 'speed': 0.0, 'heading': 185, 'distance': 11.023188171353 }, { 'latitude': 23.8455829620361, 'longitude': 120.698471069336, 'time': '2021-11-10T02:39:33Z', 'elevation': 191.0, 'speed': 0.0, 'heading': 185, 'distance': 3.46821359004387 }, { 'latitude': 23.8456649780273, 'longitude': 120.698570251465, 'time': '2021-11-10T02:42:19Z', 'elevation': 191.0, 'speed': 0.0, 'heading': 185, 'distance': 13.5869328557717 }, { 'latitude': 23.8456478118896, 'longitude': 120.69849395752, 'time': '2021-11-10T02:42:35Z', 'elevation': 191.0, 'speed': 0.0, 'heading': 189, 'distance': 8.00143832229622 }, { 'latitude': 23.8455562591553, 'longitude': 120.698379516602, 'time': '2021-11-10T02:45:22Z', 'elevation': 190.0, 'speed': 0.0, 'heading': 248, 'distance': 15.4511673097641 }, { 'latitude': 23.8455600738525, 'longitude': 120.698379516602, 'time': '2021-11-10T02:45:37Z', 'elevation': 191.0, 'speed': 0.0, 'heading': 248, 'distance': 0.422500587985655 }, { 'latitude': 23.8456764221191, 'longitude': 120.698501586914, 'time': '2021-11-10T02:48:24Z', 'elevation': 190.0, 'speed': 0.0, 'heading': 201, 'distance': 17.9081300958569 }, { 'latitude': 23.8456192016602, 'longitude': 120.698486328125, 'time': '2021-11-10T02:48:39Z', 'elevation': 190.0, 'speed': 0.0, 'heading': 181, 'distance': 6.52535910938016 }, { 'latitude': 23.8456192016602, 'longitude': 120.698570251465, 'time': '2021-11-10T02:51:25Z', 'elevation': 190.0, 'speed': 0.0, 'heading': 210, 'distance': 8.54950457547224 }, { 'latitude': 23.8456039428711, 'longitude': 120.698547363281, 'time': '2021-11-10T02:51:41Z', 'elevation': 189.0, 'speed': 0.0, 'heading': 180, 'distance': 2.87971684452914 }, { 'latitude': 23.8458938598633, 'longitude': 120.69856262207, 'time': '2021-11-10T02:54:28Z', 'elevation': 189.0, 'speed': 0.0, 'heading': 222, 'distance': 32.1476486015456 }, { 'latitude': 23.8457546234131, 'longitude': 120.698501586914, 'time': '2021-11-10T02:54:43Z', 'elevation': 188.0, 'speed': 0.0, 'heading': 242, 'distance': 16.6275736435246 }, { 'latitude': 23.8456115722656, 'longitude': 120.698554992676, 'time': '2021-11-10T02:57:30Z', 'elevation': 188.0, 'speed': 0.0, 'heading': 203, 'distance': 16.7518562569278 }, { 'latitude': 23.8456478118896, 'longitude': 120.698463439941, 'time': '2021-11-10T02:57:45Z', 'elevation': 188.0, 'speed': 0.0, 'heading': 220, 'distance': 10.1537261598961 }, { 'latitude': 23.8454666137695, 'longitude': 120.698463439941, 'time': '2021-11-10T03:00:31Z', 'elevation': 188.0, 'speed': 1.0, 'heading': 206, 'distance': 20.0687779368212 }, { 'latitude': 23.8454837799072, 'longitude': 120.698501586914, 'time': '2021-11-10T03:00:47Z', 'elevation': 188.0, 'speed': 0.0, 'heading': 221, 'distance': 4.32627201834454 }, { 'latitude': 23.8457183837891, 'longitude': 120.698738098145, 'time': '2021-11-10T03:03:33Z', 'elevation': 188.0, 'speed': 1.0, 'heading': 222, 'distance': 35.4355888963847 }, { 'latitude': 23.8456172943115, 'longitude': 120.698471069336, 'time': '2021-11-10T03:03:49Z', 'elevation': 188.0, 'speed': 0.0, 'heading': 190, 'distance': 29.4169567134517 }, { 'latitude': 23.8455429077148, 'longitude': 120.698394775391, 'time': '2021-11-10T03:06:36Z', 'elevation': 187.0, 'speed': 0.0, 'heading': 206, 'distance': 11.3263195790185 }, { 'latitude': 23.8456192016602, 'longitude': 120.698379516602, 'time': '2021-11-10T03:06:51Z', 'elevation': 187.0, 'speed': 0.0, 'heading': 226, 'distance': 8.59179807680363 }, { 'latitude': 23.8455715179443, 'longitude': 120.698364257812, 'time': '2021-11-10T03:09:38Z', 'elevation': 187.0, 'speed': 1.0, 'heading': 226, 'distance': 5.50526783394195 }, { 'latitude': 23.8456611633301, 'longitude': 120.698402404785, 'time': '2021-11-10T03:09:53Z', 'elevation': 187.0, 'speed': 0.0, 'heading': 165, 'distance': 10.6621849479836 }, { 'latitude': 23.8457679748535, 'longitude': 120.698417663574, 'time': '2021-11-10T03:12:39Z', 'elevation': 187.0, 'speed': 1.0, 'heading': 302, 'distance': 11.9317050480252 }, { 'latitude': 23.8456192016602, 'longitude': 120.698501586914, 'time': '2021-11-10T03:12:55Z', 'elevation': 187.0, 'speed': 0.0, 'heading': 219, 'distance': 18.5634780370117 }, { 'latitude': 23.8457851409912, 'longitude': 120.69889831543, 'time': '2021-11-10T03:15:42Z', 'elevation': 186.0, 'speed': 1.0, 'heading': 251, 'distance': 44.3983944827213 }, { 'latitude': 23.8457050323486, 'longitude': 120.698417663574, 'time': '2021-11-10T03:15:57Z', 'elevation': 185.0, 'speed': 0.0, 'heading': 254, 'distance': 49.7626546620976 }, { 'latitude': 23.8456859588623, 'longitude': 120.698463439941, 'time': '2021-11-10T03:18:43Z', 'elevation': 185.0, 'speed': 0.0, 'heading': 205, 'distance': 5.11950049192274 }, { 'latitude': 23.8456325531006, 'longitude': 120.698471069336, 'time': '2021-11-10T03:18:59Z', 'elevation': 185.0, 'speed': 0.0, 'heading': 208, 'distance': 5.96585252571591 }, { 'latitude': 23.8456802368164, 'longitude': 120.698600769043, 'time': '2021-11-10T03:21:46Z', 'elevation': 185.0, 'speed': 0.0, 'heading': 186, 'distance': 14.2292491921728 }, { 'latitude': 23.8456859588623, 'longitude': 120.698631286621, 'time': '2021-11-10T03:22:01Z', 'elevation': 184.0, 'speed': 0.0, 'heading': 199, 'distance': 3.17282285891795 }, { 'latitude': 23.8455600738525, 'longitude': 120.698471069336, 'time': '2021-11-10T03:24:48Z', 'elevation': 184.0, 'speed': 0.0, 'heading': 149, 'distance': 21.4661218005642 }, { 'latitude': 23.8455848693848, 'longitude': 120.698455810547, 'time': '2021-11-10T03:25:03Z', 'elevation': 184.0, 'speed': 0.0, 'heading': 156, 'distance': 3.15566242966064 }, { 'latitude': 23.8456230163574, 'longitude': 120.698425292969, 'time': '2021-11-10T03:27:49Z', 'elevation': 184.0, 'speed': 0.0, 'heading': 262, 'distance': 5.24555539045614 }, { 'latitude': 23.8456020355225, 'longitude': 120.698417663574, 'time': '2021-11-10T03:28:05Z', 'elevation': 184.0, 'speed': 0.0, 'heading': 138, 'distance': 2.45028623336407 }, { 'latitude': 23.845552444458, 'longitude': 120.698539733887, 'time': '2021-11-10T03:30:52Z', 'elevation': 183.0, 'speed': 0.0, 'heading': 214, 'distance': 13.5945929420799 }, { 'latitude': 23.8455562591553, 'longitude': 120.698524475098, 'time': '2021-11-10T03:31:07Z', 'elevation': 183.0, 'speed': 0.0, 'heading': 214, 'distance': 1.6108391289132 }, { 'latitude': 23.8455371856689, 'longitude': 120.698837280273, 'time': '2021-11-10T03:33:54Z', 'elevation': 183.0, 'speed': 0.0, 'heading': 212, 'distance': 31.936297827161 }, { 'latitude': 23.8456954956055, 'longitude': 120.698677062988, 'time': '2021-11-10T03:34:09Z', 'elevation': 183.0, 'speed': 0.0, 'heading': 236, 'distance': 23.9548285621429 }, { 'latitude': 23.8456764221191, 'longitude': 120.698822021484, 'time': '2021-11-10T03:36:55Z', 'elevation': 183.0, 'speed': 0.0, 'heading': 208, 'distance': 14.9176528037923 }, { 'latitude': 23.8456478118896, 'longitude': 120.698699951172, 'time': '2021-11-10T03:37:11Z', 'elevation': 183.0, 'speed': 0.0, 'heading': 241, 'distance': 12.833009010976 }, { 'latitude': 23.8456344604492, 'longitude': 120.698577880859, 'time': '2021-11-10T03:40:13Z', 'elevation': 182.0, 'speed': 0.0, 'heading': 132, 'distance': 12.5232532872199 }, { 'latitude': 23.8455581665039, 'longitude': 120.698486328125, 'time': '2021-11-10T03:43:00Z', 'elevation': 182.0, 'speed': 1.0, 'heading': 212, 'distance': 12.5853353064554 }, { 'latitude': 23.8456134796143, 'longitude': 120.698440551758, 'time': '2021-11-10T03:43:15Z', 'elevation': 181.0, 'speed': 0.0, 'heading': 179, 'distance': 7.69920105435558 }, { 'latitude': 23.8454685211182, 'longitude': 120.698455810547, 'time': '2021-11-10T03:46:01Z', 'elevation': 180.0, 'speed': 0.0, 'heading': 351, 'distance': 16.1300972723254 }, { 'latitude': 23.8455581665039, 'longitude': 120.698524475098, 'time': '2021-11-10T03:46:17Z', 'elevation': 181.0, 'speed': 0.0, 'heading': 317, 'distance': 12.1453848708381 }, { 'latitude': 23.8456401824951, 'longitude': 120.698356628418, 'time': '2021-11-10T03:49:04Z', 'elevation': 180.0, 'speed': 0.0, 'heading': 153, 'distance': 19.3621008256627 }, { 'latitude': 23.8456344604492, 'longitude': 120.698364257812, 'time': '2021-11-10T03:49:19Z', 'elevation': 180.0, 'speed': 0.0, 'heading': 159, 'distance': 1.00285263417989 }, { 'latitude': 23.8456802368164, 'longitude': 120.698402404785, 'time': '2021-11-10T03:52:06Z', 'elevation': 180.0, 'speed': 0.0, 'heading': 202, 'distance': 6.38801988626887 }, { 'latitude': 23.8456535339355, 'longitude': 120.698356628418, 'time': '2021-11-10T03:52:21Z', 'elevation': 180.0, 'speed': 0.0, 'heading': 151, 'distance': 5.52208808792583 }, { 'latitude': 23.8456230163574, 'longitude': 120.698379516602, 'time': '2021-11-10T03:55:07Z', 'elevation': 180.0, 'speed': 0.0, 'heading': 117, 'distance': 4.10622587489024 }, { 'latitude': 23.8455810546875, 'longitude': 120.698341369629, 'time': '2021-11-10T03:55:23Z', 'elevation': 179.0, 'speed': 0.0, 'heading': 117, 'distance': 6.05814784207587 }, { 'latitude': 23.8455028533936, 'longitude': 120.698333740234, 'time': '2021-11-10T03:58:10Z', 'elevation': 179.0, 'speed': 0.0, 'heading': 44, 'distance': 8.69606429498907 }, { 'latitude': 23.8455200195312, 'longitude': 120.698257446289, 'time': '2021-11-10T03:58:25Z', 'elevation': 179.0, 'speed': 0.0, 'heading': 44, 'distance': 8.00144670912547 }, { 'latitude': 23.8455429077148, 'longitude': 120.698234558105, 'time': '2021-11-10T04:01:13Z', 'elevation': 153.0, 'speed': 0.0, 'heading': 311, 'distance': 3.44425763302027 }, { 'latitude': 23.8455581665039, 'longitude': 120.698257446289, 'time': '2021-11-10T04:01:28Z', 'elevation': 155.0, 'speed': 0.0, 'heading': 274, 'distance': 2.87971772074245 }, { 'latitude': 23.8455085754395, 'longitude': 120.698341369629, 'time': '2021-11-10T04:04:15Z', 'elevation': 154.0, 'speed': 0.0, 'heading': 41, 'distance': 10.1617796050173 }, { 'latitude': 23.8455352783203, 'longitude': 120.698348999023, 'time': '2021-11-10T04:04:30Z', 'elevation': 154.0, 'speed': 0.0, 'heading': 99, 'distance': 3.05792491931239 }, { 'latitude': 23.8455429077148, 'longitude': 120.698417663574, 'time': '2021-11-10T04:07:17Z', 'elevation': 156.0, 'speed': 2.0, 'heading': 54, 'distance': 7.04585206862976 }, { 'latitude': 23.8455448150635, 'longitude': 120.69832611084, 'time': '2021-11-10T04:07:32Z', 'elevation': 155.0, 'speed': 0.0, 'heading': 243, 'distance': 9.32912975024955 }, { 'latitude': 23.8455638885498, 'longitude': 120.698280334473, 'time': '2021-11-10T04:10:19Z', 'elevation': 155.0, 'speed': 0.0, 'heading': 59, 'distance': 5.11950507506488 }, { 'latitude': 23.8455905914307, 'longitude': 120.698295593262, 'time': '2021-11-10T04:10:34Z', 'elevation': 155.0, 'speed': 0.0, 'heading': 59, 'distance': 3.34112641827315 }, { 'latitude': 23.8455867767334, 'longitude': 120.69841003418, 'time': '2021-11-10T04:13:21Z', 'elevation': 154.0, 'speed': 0.0, 'heading': 52, 'distance': 11.6660712483163 }, { 'latitude': 23.8455505371094, 'longitude': 120.698425292969, 'time': '2021-11-10T04:13:36Z', 'elevation': 155.0, 'speed': 0.0, 'heading': 150, 'distance': 4.3042455068421 }, { 'latitude': 23.8455677032471, 'longitude': 120.69832611084, 'time': '2021-11-10T04:16:23Z', 'elevation': 156.0, 'speed': 0.0, 'heading': 149, 'distance': 10.2812870023605 }, { 'latitude': 23.8455600738525, 'longitude': 120.698287963867, 'time': '2021-11-10T04:16:38Z', 'elevation': 157.0, 'speed': 0.0, 'heading': 285, 'distance': 3.97691770962916 }, { 'latitude': 23.845458984375, 'longitude': 120.698402404785, 'time': '2021-11-10T04:19:40Z', 'elevation': 156.0, 'speed': 0.0, 'heading': 322, 'distance': 16.1640105852651 }, { 'latitude': 23.8456592559814, 'longitude': 120.698112487793, 'time': '2021-11-10T04:22:41Z', 'elevation': 156.0, 'speed': 0.0, 'heading': 284, 'distance': 36.9365090961112 }, { 'latitude': 23.8455429077148, 'longitude': 120.698265075684, 'time': '2021-11-10T04:25:44Z', 'elevation': 182.0, 'speed': 0.0, 'heading': 16, 'distance': 20.191313042228 }, { 'latitude': 23.845573425293, 'longitude': 120.698265075684, 'time': '2021-11-10T04:28:30Z', 'elevation': 177.0, 'speed': 1.0, 'heading': 187, 'distance': 3.38000470600378 }, { 'latitude': 23.8453483581543, 'longitude': 120.69832611084, 'time': '2021-11-10T04:28:46Z', 'elevation': 177.0, 'speed': 0.0, 'heading': 191, 'distance': 25.6912973861139 }, { 'latitude': 23.8456497192383, 'longitude': 120.69815826416, 'time': '2021-11-10T04:31:32Z', 'elevation': 177.0, 'speed': 0.0, 'heading': 346, 'distance': 37.5024965052109 }, { 'latitude': 23.8455390930176, 'longitude': 120.698211669922, 'time': '2021-11-10T04:31:48Z', 'elevation': 177.0, 'speed': 0.0, 'heading': 132, 'distance': 13.4061099081733 }, { 'latitude': 23.8455924987793, 'longitude': 120.698318481445, 'time': '2021-11-10T04:34:35Z', 'elevation': 176.0, 'speed': 1.0, 'heading': 88, 'distance': 12.3849773488816 }, { 'latitude': 23.8455944061279, 'longitude': 120.698257446289, 'time': '2021-11-10T04:34:50Z', 'elevation': 176.0, 'speed': 0.0, 'heading': 75, 'distance': 6.22136147967788 }, { 'latitude': 23.8455772399902, 'longitude': 120.698219299316, 'time': '2021-11-10T04:37:37Z', 'elevation': 174.0, 'speed': 0.0, 'heading': 42, 'distance': 4.3262690682549 }, { 'latitude': 23.8455562591553, 'longitude': 120.698272705078, 'time': '2021-11-10T04:37:52Z', 'elevation': 175.0, 'speed': 0.0, 'heading': 55, 'distance': 5.91603320197795 }, { 'latitude': 23.845573425293, 'longitude': 120.698348999023, 'time': '2021-11-10T04:40:39Z', 'elevation': 174.0, 'speed': 1.0, 'heading': 208, 'distance': 8.00144362188878 }, { 'latitude': 23.8455181121826, 'longitude': 120.698211669922, 'time': '2021-11-10T04:40:54Z', 'elevation': 174.0, 'speed': 0.0, 'heading': 200, 'distance': 15.2726591346161 }, { 'latitude': 23.8455963134766, 'longitude': 120.698287963867, 'time': '2021-11-10T04:43:41Z', 'elevation': 174.0, 'speed': 0.0, 'heading': 154, 'distance': 11.6372593782984 }, { 'latitude': 23.8455772399902, 'longitude': 120.698257446289, 'time': '2021-11-10T04:43:56Z', 'elevation': 174.0, 'speed': 0.0, 'heading': 65, 'distance': 3.75870292686062 }, { 'latitude': 23.8455429077148, 'longitude': 120.698303222656, 'time': '2021-11-10T04:46:42Z', 'elevation': 174.0, 'speed': 0.0, 'heading': 92, 'distance': 6.01711792738827 }, { 'latitude': 23.8455600738525, 'longitude': 120.69832611084, 'time': '2021-11-10T04:46:58Z', 'elevation': 174.0, 'speed': 0.0, 'heading': 312, 'distance': 3.00855908115553 }, { 'latitude': 23.8455772399902, 'longitude': 120.698387145996, 'time': '2021-11-10T04:49:45Z', 'elevation': 173.0, 'speed': 1.0, 'heading': 142, 'distance': 6.50196034418319 }, { 'latitude': 23.8456001281738, 'longitude': 120.698333740234, 'time': '2021-11-10T04:50:00Z', 'elevation': 173.0, 'speed': 0.0, 'heading': 156, 'distance': 6.00215400664075 }, { 'latitude': 23.8456764221191, 'longitude': 120.698081970215, 'time': '2021-11-10T04:52:47Z', 'elevation': 173.0, 'speed': 1.0, 'heading': 227, 'distance': 27.0046063484464 }, { 'latitude': 23.8456974029541, 'longitude': 120.69815826416, 'time': '2021-11-10T04:53:02Z', 'elevation': 173.0, 'speed': 0.0, 'heading': 285, 'distance': 8.1122163740949 }, { 'latitude': 23.8458042144775, 'longitude': 120.698616027832, 'time': '2021-11-10T04:55:48Z', 'elevation': 173.0, 'speed': 0.0, 'heading': 67, 'distance': 48.1107396880572 }, { 'latitude': 23.8456611633301, 'longitude': 120.698425292969, 'time': '2021-11-10T04:56:04Z', 'elevation': 173.0, 'speed': 0.0, 'heading': 182, 'distance': 25.0714233124613 }, { 'latitude': 23.8455257415771, 'longitude': 120.698127746582, 'time': '2021-11-10T04:58:50Z', 'elevation': 173.0, 'speed': 1.0, 'heading': 265, 'distance': 33.8197213673939 }, { 'latitude': 23.8455696105957, 'longitude': 120.698371887207, 'time': '2021-11-10T04:59:06Z', 'elevation': 173.0, 'speed': 0.0, 'heading': 158, 'distance': 25.3414495440952 }, { 'latitude': 23.8455085754395, 'longitude': 120.698295593262, 'time': '2021-11-10T05:01:53Z', 'elevation': 174.0, 'speed': 0.0, 'heading': 173, 'distance': 10.3007810008977 }, { 'latitude': 23.8455333709717, 'longitude': 120.698371887207, 'time': '2021-11-10T05:02:08Z', 'elevation': 176.0, 'speed': 0.0, 'heading': 70, 'distance': 8.2431965283862 }, { 'latitude': 23.845588684082, 'longitude': 120.698066711426, 'time': '2021-11-10T05:04:54Z', 'elevation': 176.0, 'speed': 1.0, 'heading': 227, 'distance': 31.6869770396758 }, { 'latitude': 23.8456249237061, 'longitude': 120.698394775391, 'time': '2021-11-10T05:05:10Z', 'elevation': 176.0, 'speed': 0.0, 'heading': 295, 'distance': 33.6609520265328 }, { 'latitude': 23.845739364624, 'longitude': 120.69815826416, 'time': '2021-11-10T05:07:56Z', 'elevation': 176.0, 'speed': 1.0, 'heading': 75, 'distance': 27.2246058643085 }, { 'latitude': 23.8456020355225, 'longitude': 120.698165893555, 'time': '2021-11-10T05:08:12Z', 'elevation': 176.0, 'speed': 0.0, 'heading': 326, 'distance': 15.2298661789683 }, { 'latitude': 23.8456611633301, 'longitude': 120.698440551758, 'time': '2021-11-10T05:11:14Z', 'elevation': 172.0, 'speed': 0.0, 'heading': 89, 'distance': 28.7363447593021 }, { 'latitude': 23.845588684082, 'longitude': 120.6982421875, 'time': '2021-11-10T05:14:01Z', 'elevation': 172.0, 'speed': 0.0, 'heading': 119, 'distance': 21.7439860123367 }, { 'latitude': 23.8455753326416, 'longitude': 120.698226928711, 'time': '2021-11-10T05:14:16Z', 'elevation': 172.0, 'speed': 0.0, 'heading': 91, 'distance': 2.14546092763777 }, { 'latitude': 23.8455619812012, 'longitude': 120.698318481445, 'time': '2021-11-10T05:17:03Z', 'elevation': 172.0, 'speed': 0.0, 'heading': 281, 'distance': 9.44323619430168 }, { 'latitude': 23.8455142974854, 'longitude': 120.698341369629, 'time': '2021-11-10T05:17:18Z', 'elevation': 172.0, 'speed': 0.0, 'heading': 162, 'distance': 5.77307078806732 }, { 'latitude': 23.8455104827881, 'longitude': 120.6982421875, 'time': '2021-11-10T05:20:05Z', 'elevation': 172.0, 'speed': 0.0, 'heading': 287, 'distance': 10.1127978687155 }, { 'latitude': 23.8455352783203, 'longitude': 120.698425292969, 'time': '2021-11-10T05:20:20Z', 'elevation': 172.0, 'speed': 0.0, 'heading': 304, 'distance': 18.8545528462554 }, { 'latitude': 23.8456192016602, 'longitude': 120.698387145996, 'time': '2021-11-10T05:23:07Z', 'elevation': 172.0, 'speed': 0.0, 'heading': 157, 'distance': 10.074676688704 }, { 'latitude': 23.8456001281738, 'longitude': 120.698394775391, 'time': '2021-11-10T05:23:22Z', 'elevation': 172.0, 'speed': 0.0, 'heading': 310, 'distance': 2.2509425158227 }, { 'latitude': 23.8456287384033, 'longitude': 120.698249816895, 'time': '2021-11-10T05:26:08Z', 'elevation': 171.0, 'speed': 0.0, 'heading': 289, 'distance': 15.1034744429616 }, { 'latitude': 23.845630645752, 'longitude': 120.698181152344, 'time': '2021-11-10T05:26:24Z', 'elevation': 171.0, 'speed': 0.0, 'heading': 312, 'distance': 6.99818284286526 }, { 'latitude': 23.8455963134766, 'longitude': 120.698356628418, 'time': '2021-11-10T05:29:11Z', 'elevation': 171.0, 'speed': 0.0, 'heading': 241, 'distance': 18.2761844563476 }, { 'latitude': 23.8456001281738, 'longitude': 120.698341369629, 'time': '2021-11-10T05:29:26Z', 'elevation': 171.0, 'speed': 0.0, 'heading': 237, 'distance': 1.61083862462015 }, { 'latitude': 23.8455638885498, 'longitude': 120.698249816895, 'time': '2021-11-10T05:32:12Z', 'elevation': 171.0, 'speed': 0.0, 'heading': 298, 'distance': 10.1537292837873 }, { 'latitude': 23.8455219268799, 'longitude': 120.698272705078, 'time': '2021-11-10T05:32:28Z', 'elevation': 171.0, 'speed': 0.0, 'heading': 298, 'distance': 5.19961374960064 }, { 'latitude': 23.8456115722656, 'longitude': 120.698287963867, 'time': '2021-11-10T05:35:15Z', 'elevation': 171.0, 'speed': 0.0, 'heading': 253, 'distance': 10.0497087898756 }, { 'latitude': 23.8455810546875, 'longitude': 120.698287963867, 'time': '2021-11-10T05:35:30Z', 'elevation': 171.0, 'speed': 0.0, 'heading': 148, 'distance': 3.38000472217223 }, { 'latitude': 23.8454151153564, 'longitude': 120.698432922363, 'time': '2021-11-10T05:38:16Z', 'elevation': 170.0, 'speed': 0.0, 'heading': 112, 'distance': 23.5765500373936 }, { 'latitude': 23.8455181121826, 'longitude': 120.698341369629, 'time': '2021-11-10T05:38:32Z', 'elevation': 170.0, 'speed': 0.0, 'heading': 112, 'distance': 14.7349772263987 }, { 'latitude': 23.8455924987793, 'longitude': 120.69832611084, 'time': '2021-11-10T05:41:19Z', 'elevation': 170.0, 'speed': 0.0, 'heading': 273, 'distance': 8.38412108766753 }, { 'latitude': 23.8455562591553, 'longitude': 120.698348999023, 'time': '2021-11-10T05:41:34Z', 'elevation': 170.0, 'speed': 0.0, 'heading': 144, 'distance': 4.64186365617355 }, { 'latitude': 23.8454494476318, 'longitude': 120.698379516602, 'time': '2021-11-10T05:44:21Z', 'elevation': 170.0, 'speed': 1.0, 'heading': 212, 'distance': 12.2316997630236 }, { 'latitude': 23.8454456329346, 'longitude': 120.69832611084, 'time': '2021-11-10T05:44:36Z', 'elevation': 170.0, 'speed': 0.0, 'heading': 161, 'distance': 5.45693875857166 }, { 'latitude': 23.8454189300537, 'longitude': 120.698440551758, 'time': '2021-11-10T05:47:23Z', 'elevation': 169.0, 'speed': 0.0, 'heading': 9, 'distance': 12.0277125017493 }, { 'latitude': 23.8454933166504, 'longitude': 120.698402404785, 'time': '2021-11-10T05:47:38Z', 'elevation': 169.0, 'speed': 0.0, 'heading': 341, 'distance': 9.10928434015982 }, { 'latitude': 23.8454246520996, 'longitude': 120.698287963867, 'time': '2021-11-10T05:50:24Z', 'elevation': 169.0, 'speed': 0.0, 'heading': 206, 'distance': 13.9195964967511 }, { 'latitude': 23.8455104827881, 'longitude': 120.698318481445, 'time': '2021-11-10T05:50:40Z', 'elevation': 169.0, 'speed': 0.0, 'heading': 319, 'distance': 10.0017116144008 }, { 'latitude': 23.8452072143555, 'longitude': 120.698181152344, 'time': '2021-11-10T05:53:27Z', 'elevation': 169.0, 'speed': 0.0, 'heading': 153, 'distance': 36.3858605013061 }, { 'latitude': 23.8454933166504, 'longitude': 120.698341369629, 'time': '2021-11-10T05:53:42Z', 'elevation': 169.0, 'speed': 0.0, 'heading': 54, 'distance': 35.6441025568299 }, { 'latitude': 23.8457317352295, 'longitude': 120.698455810547, 'time': '2021-11-10T05:56:29Z', 'elevation': 169.0, 'speed': 0.0, 'heading': 166, 'distance': 28.865388483947 }, { 'latitude': 23.8454704284668, 'longitude': 120.698364257812, 'time': '2021-11-10T05:56:44Z', 'elevation': 169.0, 'speed': 0.0, 'heading': 166, 'distance': 30.407009914392 }, { 'latitude': 23.8454608917236, 'longitude': 120.698394775391, 'time': '2021-11-10T05:59:30Z', 'elevation': 169.0, 'speed': 0.0, 'heading': 99, 'distance': 3.28342261755454 }, { 'latitude': 23.8455791473389, 'longitude': 120.698348999023, 'time': '2021-11-10T05:59:46Z', 'elevation': 169.0, 'speed': 0.0, 'heading': 173, 'distance': 13.9029369981632 }, { 'latitude': 23.8455371856689, 'longitude': 120.698272705078, 'time': '2021-11-10T06:02:33Z', 'elevation': 168.0, 'speed': 0.0, 'heading': 104, 'distance': 9.05580813490489 }, { 'latitude': 23.8455600738525, 'longitude': 120.698265075684, 'time': '2021-11-10T06:02:48Z', 'elevation': 168.0, 'speed': 0.0, 'heading': 21, 'distance': 2.65147447930218 }, { 'latitude': 23.8456058502197, 'longitude': 120.698287963867, 'time': '2021-11-10T06:05:35Z', 'elevation': 168.0, 'speed': 0.0, 'heading': 129, 'distance': 5.58046908741988 }, { 'latitude': 23.8455905914307, 'longitude': 120.698310852051, 'time': '2021-11-10T06:05:50Z', 'elevation': 168.0, 'speed': 0.0, 'heading': 119, 'distance': 2.87971703627675 }, { 'latitude': 23.8456268310547, 'longitude': 120.69832611084, 'time': '2021-11-10T06:08:37Z', 'elevation': 167.0, 'speed': 0.0, 'heading': 190, 'distance': 4.30424535466518 }, { 'latitude': 23.8455944061279, 'longitude': 120.698318481445, 'time': '2021-11-10T06:08:52Z', 'elevation': 166.0, 'speed': 0.0, 'heading': 128, 'distance': 3.6743960211974 }, { 'latitude': 23.8455219268799, 'longitude': 120.698310852051, 'time': '2021-11-10T06:11:39Z', 'elevation': 166.0, 'speed': 0.0, 'heading': 117, 'distance': 8.0650486441363 }, { 'latitude': 23.8454914093018, 'longitude': 120.698348999023, 'time': '2021-11-10T06:11:54Z', 'elevation': 166.0, 'speed': 0.0, 'heading': 155, 'distance': 5.15036818044771 }, { 'latitude': 23.845703125, 'longitude': 120.698280334473, 'time': '2021-11-10T06:14:41Z', 'elevation': 165.0, 'speed': 0.0, 'heading': 355, 'distance': 24.4698870836593 }, { 'latitude': 23.845703125, 'longitude': 120.698272705078, 'time': '2021-11-10T06:14:56Z', 'elevation': 165.0, 'speed': 0.0, 'heading': 4, 'distance': 0.777221082579534 }, { 'latitude': 23.8455085754395, 'longitude': 120.698394775391, 'time': '2021-11-10T06:17:43Z', 'elevation': 165.0, 'speed': 0.0, 'heading': 71, 'distance': 24.878530978381 }, { 'latitude': 23.8455429077148, 'longitude': 120.698394775391, 'time': '2021-11-10T06:17:58Z', 'elevation': 164.0, 'speed': 0.0, 'heading': 28, 'distance': 3.80250527700584 }, { 'latitude': 23.8455657958984, 'longitude': 120.698379516602, 'time': '2021-11-10T06:20:45Z', 'elevation': 164.0, 'speed': 0.0, 'heading': 328, 'distance': 2.97364066927715 }, { 'latitude': 23.8455963134766, 'longitude': 120.698341369629, 'time': '2021-11-10T06:21:00Z', 'elevation': 164.0, 'speed': 0.0, 'heading': 13, 'distance': 5.15036652890314 }, { 'latitude': 23.8455829620361, 'longitude': 120.698417663574, 'time': '2021-11-10T06:23:47Z', 'elevation': 164.0, 'speed': 0.0, 'heading': 146, 'distance': 7.91170165308485 }, { 'latitude': 23.8455715179443, 'longitude': 120.698394775391, 'time': '2021-11-10T06:24:02Z', 'elevation': 164.0, 'speed': 0.0, 'heading': 192, 'distance': 2.6539074415343 }, { 'latitude': 23.8457164764404, 'longitude': 120.698219299316, 'time': '2021-11-10T06:26:48Z', 'elevation': 163.0, 'speed': 0.0, 'heading': 114, 'distance': 24.0275564776841 }, { 'latitude': 23.8455696105957, 'longitude': 120.69832611084, 'time': '2021-11-10T06:27:04Z', 'elevation': 162.0, 'speed': 0.0, 'heading': 205, 'distance': 19.5701771269565 }, { 'latitude': 23.8454933166504, 'longitude': 120.697914123535, 'time': '2021-11-10T06:29:50Z', 'elevation': 162.0, 'speed': 0.0, 'heading': 311, 'distance': 42.8125069033369 }, { 'latitude': 23.8451843261719, 'longitude': 120.698585510254, 'time': '2021-11-10T06:30:06Z', 'elevation': 0.0, 'speed': 0.0, 'heading': 131, 'distance': 76.4801977370688 }, { 'latitude': 23.8452396392822, 'longitude': 120.698631286621, 'time': '2021-11-10T06:32:53Z', 'elevation': 0.0, 'speed': 0.0, 'heading': 211, 'distance': 7.69920891595324 }, { 'latitude': 23.8451595306396, 'longitude': 120.698600769043, 'time': '2021-11-10T06:33:08Z', 'elevation': 0.0, 'speed': 0.0, 'heading': 241, 'distance': 9.40142034532373 }, { 'latitude': 23.8454246520996, 'longitude': 120.698524475098, 'time': '2021-11-10T06:35:54Z', 'elevation': 144.0, 'speed': 2.0, 'heading': 108, 'distance': 30.3750019990255 }, { 'latitude': 23.8455028533936, 'longitude': 120.698394775391, 'time': '2021-11-10T06:36:10Z', 'elevation': 157.0, 'speed': 1.0, 'heading': 137, 'distance': 15.7986653643621 }, { 'latitude': 23.8454532623291, 'longitude': 120.698364257812, 'time': '2021-11-10T06:38:57Z', 'elevation': 157.0, 'speed': 0.0, 'heading': 275, 'distance': 6.3113259089249 }, { 'latitude': 23.8455142974854, 'longitude': 120.698371887207, 'time': '2021-11-10T06:39:12Z', 'elevation': 157.0, 'speed': 0.0, 'heading': 15, 'distance': 6.80454267302043 }, { 'latitude': 23.8456363677979, 'longitude': 120.69841003418, 'time': '2021-11-10T06:41:59Z', 'elevation': 157.0, 'speed': 0.0, 'heading': 47, 'distance': 14.067435964796 }, { 'latitude': 23.8455619812012, 'longitude': 120.698417663574, 'time': '2021-11-10T06:42:14Z', 'elevation': 157.0, 'speed': 0.0, 'heading': 149, 'distance': 8.27534076951679 }, { 'latitude': 23.8456039428711, 'longitude': 120.69832611084, 'time': '2021-11-10T06:45:16Z', 'elevation': 156.0, 'speed': 0.0, 'heading': 57, 'distance': 10.4205229981477 }, { 'latitude': 23.8455410003662, 'longitude': 120.698356628418, 'time': '2021-11-10T06:48:03Z', 'elevation': 156.0, 'speed': 0.0, 'heading': 156, 'distance': 7.63306250261945 }, { 'latitude': 23.8455505371094, 'longitude': 120.698356628418, 'time': '2021-11-10T06:48:18Z', 'elevation': 156.0, 'speed': 0.0, 'heading': 140, 'distance': 1.05625146886818 }, { 'latitude': 23.8453807830811, 'longitude': 120.698364257812, 'time': '2021-11-10T06:51:05Z', 'elevation': 156.0, 'speed': 0.0, 'heading': 351, 'distance': 18.8173338208718 }, { 'latitude': 23.8455677032471, 'longitude': 120.698333740234, 'time': '2021-11-10T06:51:20Z', 'elevation': 155.0, 'speed': 0.0, 'heading': 354, 'distance': 20.9346575316625 }, { 'latitude': 23.8383293151855, 'longitude': 120.695182800293, 'time': '2021-11-10T07:00:24Z', 'elevation': 144.0, 'speed': 14.0, 'heading': 165, 'distance': 863.572620756643 }, { 'latitude': 23.8390197753906, 'longitude': 120.701354980469, 'time': '2021-11-10T07:06:33Z', 'elevation': 125.0, 'speed': 1.0, 'heading': 289, 'distance': 633.443712016948 }, { 'latitude': 23.8532199859619, 'longitude': 120.703620910645, 'time': '2021-11-10T07:09:34Z', 'elevation': 118.0, 'speed': 17.0, 'heading': 47, 'distance': 1589.60831873652 }, { 'latitude': 23.8937320709229, 'longitude': 120.711265563965, 'time': '2021-11-10T07:12:35Z', 'elevation': 133.0, 'speed': 26.0, 'heading': 8, 'distance': 4554.0272893909 }, { 'latitude': 23.9278755187988, 'longitude': 120.681129455566, 'time': '2021-11-10T07:15:38Z', 'elevation': 106.0, 'speed': 29.0, 'heading': 345, 'distance': 4869.95318564548 }, { 'latitude': 23.9673709869385, 'longitude': 120.654243469238, 'time': '2021-11-10T07:21:42Z', 'elevation': 83.0, 'speed': 16.0, 'heading': 349, 'distance': 5160.00206281482 }, { 'latitude': 24.0027828216553, 'longitude': 120.643760681152, 'time': '2021-11-10T07:27:46Z', 'elevation': 63.0, 'speed': 19.0, 'heading': 343, 'distance': 4064.6282112435 }],
    [{ 'latitude': 25.4006175994873, 'longitude': 121.990188598633, 'time': '2021-11-09T23:32:28Z', 'elevation': 95.0, 'speed': 21.0, 'heading': 192, 'distance': 0.0 }, { 'latitude': 25.3977699279785, 'longitude': 121.98885345459, 'time': '2021-11-09T23:32:43Z', 'elevation': 102.0, 'speed': 23.0, 'heading': 205, 'distance': 342.876818378165 }, { 'latitude': 25.394983291626, 'longitude': 121.988143920898, 'time': '2021-11-09T23:32:58Z', 'elevation': 116.0, 'speed': 19.0, 'heading': 236, 'distance': 316.848951234343 }, { 'latitude': 25.3925189971924, 'longitude': 121.986961364746, 'time': '2021-11-09T23:33:13Z', 'elevation': 142.0, 'speed': 20.0, 'heading': 215, 'distance': 297.799261023028 }, { 'latitude': 25.3897438049316, 'longitude': 121.986022949219, 'time': '2021-11-09T23:33:28Z', 'elevation': 174.0, 'speed': 21.0, 'heading': 174, 'distance': 321.608217036426 }, { 'latitude': 25.3874988555908, 'longitude': 121.986946105957, 'time': '2021-11-09T23:33:43Z', 'elevation': 200.0, 'speed': 20.0, 'heading': 179, 'distance': 265.476822543872 }, { 'latitude': 25.3847484588623, 'longitude': 121.985740661621, 'time': '2021-11-09T23:33:58Z', 'elevation': 216.0, 'speed': 22.0, 'heading': 187, 'distance': 327.945768566479 }, { 'latitude': 25.3818111419678, 'longitude': 121.985816955566, 'time': '2021-11-09T23:34:13Z', 'elevation': 220.0, 'speed': 23.0, 'heading': 207, 'distance': 325.482494547797 }, { 'latitude': 25.3788776397705, 'longitude': 121.98429107666, 'time': '2021-11-09T23:34:28Z', 'elevation': 218.0, 'speed': 23.0, 'heading': 199, 'distance': 359.424082762865 }, { 'latitude': 25.3428630828857, 'longitude': 121.969589233398, 'time': '2021-11-09T23:37:15Z', 'elevation': 272.0, 'speed': 28.0, 'heading': 200, 'distance': 4255.22358822314 }, { 'latitude': 25.3393592834473, 'longitude': 121.967895507812, 'time': '2021-11-09T23:37:30Z', 'elevation': 263.0, 'speed': 28.0, 'heading': 203, 'distance': 423.943604424197 }, { 'latitude': 25.298002243042, 'longitude': 121.95645904541, 'time': '2021-11-09T23:40:17Z', 'elevation': 195.0, 'speed': 26.0, 'heading': 205, 'distance': 4723.93313569686 }, { 'latitude': 25.2945880889893, 'longitude': 121.955024719238, 'time': '2021-11-09T23:40:32Z', 'elevation': 174.0, 'speed': 28.0, 'heading': 214, 'distance': 404.855688095864 }, { 'latitude': 25.2539863586426, 'longitude': 121.940399169922, 'time': '2021-11-09T23:43:19Z', 'elevation': 161.0, 'speed': 28.0, 'heading': 195, 'distance': 4732.84578570629 }, { 'latitude': 25.2504558563232, 'longitude': 121.93872833252, 'time': '2021-11-09T23:43:34Z', 'elevation': 157.0, 'speed': 28.0, 'heading': 203, 'distance': 425.782140701492 }, { 'latitude': 25.2110252380371, 'longitude': 121.921478271484, 'time': '2021-11-09T23:46:21Z', 'elevation': 119.0, 'speed': 24.0, 'heading': 213, 'distance': 4701.09937071023 }, { 'latitude': 25.208101272583, 'longitude': 121.919227600098, 'time': '2021-11-09T23:46:36Z', 'elevation': 102.0, 'speed': 27.0, 'heading': 215, 'distance': 395.425436807963 }, { 'latitude': 25.1786117553711, 'longitude': 121.893646240234, 'time': '2021-11-09T23:49:23Z', 'elevation': 115.0, 'speed': 24.0, 'heading': 205, 'distance': 4161.6765730644 }, { 'latitude': 25.1757106781006, 'longitude': 121.892250061035, 'time': '2021-11-09T23:49:38Z', 'elevation': 131.0, 'speed': 23.0, 'heading': 196, 'distance': 350.835918172397 }, { 'latitude': 25.1425476074219, 'longitude': 121.877670288086, 'time': '2021-11-09T23:52:25Z', 'elevation': 209.0, 'speed': 24.0, 'heading': 204, 'distance': 3956.81394629658 }, { 'latitude': 25.1398544311523, 'longitude': 121.875953674316, 'time': '2021-11-09T23:52:40Z', 'elevation': 223.0, 'speed': 23.0, 'heading': 211, 'distance': 344.914712197067 }, { 'latitude': 25.1223926544189, 'longitude': 121.84642791748, 'time': '2021-11-09T23:55:27Z', 'elevation': 308.0, 'speed': 26.0, 'heading': 234, 'distance': 3550.61456649008 }, { 'latitude': 25.1196804046631, 'longitude': 121.843376159668, 'time': '2021-11-09T23:55:42Z', 'elevation': 299.0, 'speed': 27.0, 'heading': 206, 'distance': 430.108628813548 }, { 'latitude': 25.1012840270996, 'longitude': 121.81224822998, 'time': '2021-11-09T23:58:29Z', 'elevation': 232.0, 'speed': 23.0, 'heading': 274, 'distance': 3742.94225810478 }, { 'latitude': 25.1011161804199, 'longitude': 121.808662414551, 'time': '2021-11-09T23:58:44Z', 'elevation': 229.0, 'speed': 23.0, 'heading': 263, 'distance': 362.168901946494 }, { 'latitude': 25.0999736785889, 'longitude': 121.769859313965, 'time': '2021-11-10T00:01:30Z', 'elevation': 165.0, 'speed': 16.0, 'heading': 301, 'distance': 3916.02835920818 }, { 'latitude': 25.0995235443115, 'longitude': 121.766387939453, 'time': '2021-11-10T00:01:46Z', 'elevation': 156.0, 'speed': 24.0, 'heading': 253, 'distance': 353.684680977567 }, { 'latitude': 25.0933113098145, 'longitude': 121.72868347168, 'time': '2021-11-10T00:04:33Z', 'elevation': 155.0, 'speed': 20.0, 'heading': 260, 'distance': 3865.04872279868 }, { 'latitude': 25.0925712585449, 'longitude': 121.725357055664, 'time': '2021-11-10T00:04:48Z', 'elevation': 144.0, 'speed': 24.0, 'heading': 246, 'distance': 345.417993972934 }, { 'latitude': 25.0814914703369, 'longitude': 121.688201904297, 'time': '2021-11-10T00:07:35Z', 'elevation': 114.0, 'speed': 23.0, 'heading': 253, 'distance': 3944.0046947779 }, { 'latitude': 25.0806140899658, 'longitude': 121.684852600098, 'time': '2021-11-10T00:07:50Z', 'elevation': 73.0, 'speed': 26.0, 'heading': 236, 'distance': 351.590700016535 }, { 'latitude': 25.0615711212158, 'longitude': 121.654075622559, 'time': '2021-11-10T00:10:36Z', 'elevation': 45.0, 'speed': 22.0, 'heading': 245, 'distance': 3753.90314093072 }, { 'latitude': 25.0598888397217, 'longitude': 121.650886535645, 'time': '2021-11-10T00:10:52Z', 'elevation': 71.0, 'speed': 22.0, 'heading': 240, 'distance': 371.846490858752 }, { 'latitude': 25.0452823638916, 'longitude': 121.616622924805, 'time': '2021-11-10T00:13:39Z', 'elevation': 66.0, 'speed': 25.0, 'heading': 237, 'distance': 3817.31106907779 }, { 'latitude': 25.0439853668213, 'longitude': 121.613525390625, 'time': '2021-11-10T00:13:54Z', 'elevation': 58.0, 'speed': 24.0, 'heading': 256, 'distance': 344.020691001301 }, { 'latitude': 25.0386810302734, 'longitude': 121.575508117676, 'time': '2021-11-10T00:16:40Z', 'elevation': 67.0, 'speed': 25.0, 'heading': 260, 'distance': 3881.29613743222 }, { 'latitude': 25.0377655029297, 'longitude': 121.572204589844, 'time': '2021-11-10T00:16:56Z', 'elevation': 75.0, 'speed': 22.0, 'heading': 244, 'distance': 348.472249846687 }, { 'latitude': 25.0251407623291, 'longitude': 121.534454345703, 'time': '2021-11-10T00:19:57Z', 'elevation': 46.0, 'speed': 23.0, 'heading': 249, 'distance': 4058.47862964228 }, { 'latitude': 25.0104007720947, 'longitude': 121.501365661621, 'time': '2021-11-10T00:22:43Z', 'elevation': 26.0, 'speed': 23.0, 'heading': 238, 'distance': 3717.58673998113 }, { 'latitude': 25.007963180542, 'longitude': 121.498733520508, 'time': '2021-11-10T00:22:59Z', 'elevation': 28.0, 'speed': 22.0, 'heading': 201, 'distance': 378.819704595462 }, { 'latitude': 24.9923629760742, 'longitude': 121.467323303223, 'time': '2021-11-10T00:25:46Z', 'elevation': 80.0, 'speed': 22.0, 'heading': 236, 'distance': 3611.178896109 }, { 'latitude': 24.9905452728271, 'longitude': 121.465255737305, 'time': '2021-11-10T00:26:01Z', 'elevation': 96.0, 'speed': 19.0, 'heading': 222, 'distance': 290.022576692978 }, { 'latitude': 24.9696063995361, 'longitude': 121.439636230469, 'time': '2021-11-10T00:28:48Z', 'elevation': 102.0, 'speed': 21.0, 'heading': 213, 'distance': 3474.32344055491 }, { 'latitude': 24.9674339294434, 'longitude': 121.437713623047, 'time': '2021-11-10T00:29:03Z', 'elevation': 104.0, 'speed': 20.0, 'heading': 207, 'distance': 309.194777738297 }, { 'latitude': 24.9486827850342, 'longitude': 121.411697387695, 'time': '2021-11-10T00:31:49Z', 'elevation': 177.0, 'speed': 20.0, 'heading': 218, 'distance': 3349.13728986112 }, { 'latitude': 24.9466457366943, 'longitude': 121.409553527832, 'time': '2021-11-10T00:32:05Z', 'elevation': 178.0, 'speed': 21.0, 'heading': 232, 'distance': 312.722847565003 }, { 'latitude': 24.9267406463623, 'longitude': 121.380714416504, 'time': '2021-11-10T00:34:52Z', 'elevation': 178.0, 'speed': 23.0, 'heading': 235, 'distance': 3653.23217895418 }, { 'latitude': 24.9249172210693, 'longitude': 121.378089904785, 'time': '2021-11-10T00:35:07Z', 'elevation': 191.0, 'speed': 22.0, 'heading': 240, 'distance': 333.282825251571 }, { 'latitude': 24.904125213623, 'longitude': 121.347297668457, 'time': '2021-11-10T00:37:54Z', 'elevation': 212.0, 'speed': 26.0, 'heading': 228, 'distance': 3870.47290920636 }, { 'latitude': 24.9026165008545, 'longitude': 121.344230651855, 'time': '2021-11-10T00:38:09Z', 'elevation': 213.0, 'speed': 23.0, 'heading': 234, 'distance': 352.053139911516 }, { 'latitude': 24.8844261169434, 'longitude': 121.311500549316, 'time': '2021-11-10T00:40:55Z', 'elevation': 207.0, 'speed': 23.0, 'heading': 229, 'distance': 3872.46994075016 }, { 'latitude': 24.8821105957031, 'longitude': 121.309310913086, 'time': '2021-11-10T00:41:11Z', 'elevation': 209.0, 'speed': 21.0, 'heading': 229, 'distance': 338.734763004041 }, { 'latitude': 24.8571453094482, 'longitude': 121.287376403809, 'time': '2021-11-10T00:43:58Z', 'elevation': 287.0, 'speed': 19.0, 'heading': 226, 'distance': 3544.15081439385 }, { 'latitude': 24.8551731109619, 'longitude': 121.285110473633, 'time': '2021-11-10T00:44:13Z', 'elevation': 291.0, 'speed': 22.0, 'heading': 218, 'distance': 316.499357814051 }, { 'latitude': 24.8296451568604, 'longitude': 121.261207580566, 'time': '2021-11-10T00:47:00Z', 'elevation': 329.0, 'speed': 22.0, 'heading': 224, 'distance': 3719.34506091385 }, { 'latitude': 24.8275718688965, 'longitude': 121.258888244629, 'time': '2021-11-10T00:47:15Z', 'elevation': 336.0, 'speed': 21.0, 'heading': 230, 'distance': 328.199776121719 }, { 'latitude': 24.8150367736816, 'longitude': 121.230560302734, 'time': '2021-11-10T00:50:02Z', 'elevation': 404.0, 'speed': 20.0, 'heading': 269, 'distance': 3182.68753736807 }, { 'latitude': 24.8146476745605, 'longitude': 121.22728729248, 'time': '2021-11-10T00:50:17Z', 'elevation': 402.0, 'speed': 25.0, 'heading': 246, 'distance': 333.699252708169 }, { 'latitude': 24.790319442749, 'longitude': 121.195617675781, 'time': '2021-11-10T00:53:04Z', 'elevation': 349.0, 'speed': 25.0, 'heading': 228, 'distance': 4185.19587968181 }, { 'latitude': 24.7877407073975, 'longitude': 121.193481445312, 'time': '2021-11-10T00:53:19Z', 'elevation': 334.0, 'speed': 23.0, 'heading': 216, 'distance': 358.131211684645 }, { 'latitude': 24.7685604095459, 'longitude': 121.163764953613, 'time': '2021-11-10T00:56:06Z', 'elevation': 351.0, 'speed': 20.0, 'heading': 255, 'distance': 3680.40842342656 }, { 'latitude': 24.7685775756836, 'longitude': 121.160690307617, 'time': '2021-11-10T00:56:21Z', 'elevation': 361.0, 'speed': 21.0, 'heading': 279, 'distance': 310.970470179085 }, { 'latitude': 24.7713851928711, 'longitude': 121.120582580566, 'time': '2021-11-10T00:59:08Z', 'elevation': 333.0, 'speed': 24.0, 'heading': 264, 'distance': 4068.28843457464 }, { 'latitude': 24.770938873291, 'longitude': 121.116767883301, 'time': '2021-11-10T00:59:23Z', 'elevation': 319.0, 'speed': 29.0, 'heading': 259, 'distance': 388.958954320743 }, { 'latitude': 24.7544536590576, 'longitude': 121.081161499023, 'time': '2021-11-10T01:02:10Z', 'elevation': 193.0, 'speed': 22.0, 'heading': 246, 'distance': 4037.83831520833 }, { 'latitude': 24.7530517578125, 'longitude': 121.078285217285, 'time': '2021-11-10T01:02:25Z', 'elevation': 186.0, 'speed': 22.0, 'heading': 243, 'distance': 329.785554176259 }, { 'latitude': 24.7380409240723, 'longitude': 121.04736328125, 'time': '2021-11-10T01:05:12Z', 'elevation': 219.0, 'speed': 24.0, 'heading': 240, 'distance': 3542.44150582208 }, { 'latitude': 24.7358646392822, 'longitude': 121.044853210449, 'time': '2021-11-10T01:05:27Z', 'elevation': 214.0, 'speed': 21.0, 'heading': 228, 'distance': 350.131464590235 }, { 'latitude': 24.712553024292, 'longitude': 121.016578674316, 'time': '2021-11-10T01:08:14Z', 'elevation': 227.0, 'speed': 24.0, 'heading': 239, 'distance': 3853.71291897804 }, { 'latitude': 24.7108573913574, 'longitude': 121.013465881348, 'time': '2021-11-10T01:08:29Z', 'elevation': 223.0, 'speed': 23.0, 'heading': 239, 'distance': 366.716538800574 }, { 'latitude': 24.6994857788086, 'longitude': 120.976188659668, 'time': '2021-11-10T01:11:16Z', 'elevation': 241.0, 'speed': 24.0, 'heading': 247, 'distance': 3976.82521186208 }, { 'latitude': 24.6980400085449, 'longitude': 120.972732543945, 'time': '2021-11-10T01:11:31Z', 'elevation': 243.0, 'speed': 26.0, 'heading': 251, 'distance': 384.662748011423 }, { 'latitude': 24.6720905303955, 'longitude': 120.939445495605, 'time': '2021-11-10T01:14:18Z', 'elevation': 214.0, 'speed': 25.0, 'heading': 231, 'distance': 4428.44946033681 }, { 'latitude': 24.6696338653564, 'longitude': 120.936782836914, 'time': '2021-11-10T01:14:33Z', 'elevation': 212.0, 'speed': 26.0, 'heading': 221, 'distance': 382.992693272511 }, { 'latitude': 24.6416778564453, 'longitude': 120.908180236816, 'time': '2021-11-10T01:17:19Z', 'elevation': 215.0, 'speed': 25.0, 'heading': 221, 'distance': 4239.41086337258 }, { 'latitude': 24.6389064788818, 'longitude': 120.90552520752, 'time': '2021-11-10T01:17:35Z', 'elevation': 213.0, 'speed': 26.0, 'heading': 224, 'distance': 408.031426303175 }, { 'latitude': 24.6132965087891, 'longitude': 120.870948791504, 'time': '2021-11-10T01:20:22Z', 'elevation': 246.0, 'speed': 28.0, 'heading': 240, 'distance': 4505.99723930064 }, { 'latitude': 24.6109104156494, 'longitude': 120.86743927002, 'time': '2021-11-10T01:20:37Z', 'elevation': 244.0, 'speed': 30.0, 'heading': 237, 'distance': 442.89662094942 }, { 'latitude': 24.5790119171143, 'longitude': 120.836761474609, 'time': '2021-11-10T01:23:24Z', 'elevation': 217.0, 'speed': 27.0, 'heading': 220, 'distance': 4705.06638331555 }, { 'latitude': 24.5761108398438, 'longitude': 120.834411621094, 'time': '2021-11-10T01:23:39Z', 'elevation': 224.0, 'speed': 26.0, 'heading': 216, 'distance': 399.894716279785 }, { 'latitude': 24.5422592163086, 'longitude': 120.813529968262, 'time': '2021-11-10T01:26:26Z', 'elevation': 261.0, 'speed': 26.0, 'heading': 209, 'distance': 4305.21140683373 }, { 'latitude': 24.5391407012939, 'longitude': 120.811553955078, 'time': '2021-11-10T01:26:41Z', 'elevation': 277.0, 'speed': 26.0, 'heading': 209, 'distance': 399.254958862217 }, { 'latitude': 24.5028629302979, 'longitude': 120.786460876465, 'time': '2021-11-10T01:29:28Z', 'elevation': 320.0, 'speed': 27.0, 'heading': 205, 'distance': 4755.3412920182 }, { 'latitude': 24.4995269775391, 'longitude': 120.78458404541, 'time': '2021-11-10T01:29:43Z', 'elevation': 320.0, 'speed': 28.0, 'heading': 210, 'distance': 415.598026435125 }, { 'latitude': 24.466625213623, 'longitude': 120.765663146973, 'time': '2021-11-10T01:32:30Z', 'elevation': 365.0, 'speed': 25.0, 'heading': 218, 'distance': 4118.26363731865 }, { 'latitude': 24.4636859893799, 'longitude': 120.763603210449, 'time': '2021-11-10T01:32:45Z', 'elevation': 384.0, 'speed': 24.0, 'heading': 212, 'distance': 386.789736915773 }, { 'latitude': 24.4392719268799, 'longitude': 120.724189758301, 'time': '2021-11-10T01:35:32Z', 'elevation': 394.0, 'speed': 27.0, 'heading': 248, 'distance': 4825.24606494067 }, { 'latitude': 24.4374885559082, 'longitude': 120.720458984375, 'time': '2021-11-10T01:35:47Z', 'elevation': 397.0, 'speed': 28.0, 'heading': 243, 'distance': 426.781809520286 }, { 'latitude': 24.4051551818848, 'longitude': 120.68335723877, 'time': '2021-11-10T01:38:34Z', 'elevation': 308.0, 'speed': 30.0, 'heading': 216, 'distance': 5194.68973304526 }, { 'latitude': 24.4018115997314, 'longitude': 120.680541992188, 'time': '2021-11-10T01:38:49Z', 'elevation': 306.0, 'speed': 32.0, 'heading': 218, 'distance': 467.654302830191 }, { 'latitude': 24.3639068603516, 'longitude': 120.655570983887, 'time': '2021-11-10T01:41:36Z', 'elevation': 329.0, 'speed': 27.0, 'heading': 211, 'distance': 4903.53242938029 }, { 'latitude': 24.3608055114746, 'longitude': 120.654106140137, 'time': '2021-11-10T01:41:51Z', 'elevation': 351.0, 'speed': 25.0, 'heading': 215, 'distance': 374.291726311207 }, { 'latitude': 24.3210697174072, 'longitude': 120.639205932617, 'time': '2021-11-10T01:44:38Z', 'elevation': 313.0, 'speed': 24.0, 'heading': 184, 'distance': 4653.76861561252 }, { 'latitude': 24.3176860809326, 'longitude': 120.638389587402, 'time': '2021-11-10T01:44:53Z', 'elevation': 312.0, 'speed': 24.0, 'heading': 185, 'distance': 383.831304348709 }, { 'latitude': 24.283634185791, 'longitude': 120.634407043457, 'time': '2021-11-10T01:47:40Z', 'elevation': 322.0, 'speed': 20.0, 'heading': 177, 'distance': 3793.28141706491 }, { 'latitude': 24.2808494567871, 'longitude': 120.63452911377, 'time': '2021-11-10T01:47:55Z', 'elevation': 319.0, 'speed': 20.0, 'heading': 164, 'distance': 308.691921576218 }, { 'latitude': 24.2448558807373, 'longitude': 120.634117126465, 'time': '2021-11-10T01:50:42Z', 'elevation': 271.0, 'speed': 25.0, 'heading': 184, 'distance': 3986.94107150272 }, { 'latitude': 24.2414417266846, 'longitude': 120.633201599121, 'time': '2021-11-10T01:50:57Z', 'elevation': 265.0, 'speed': 24.0, 'heading': 196, 'distance': 389.420874648965 }, { 'latitude': 24.2061614990234, 'longitude': 120.626983642578, 'time': '2021-11-10T01:53:43Z', 'elevation': 297.0, 'speed': 25.0, 'heading': 191, 'distance': 3958.40156372092 }, { 'latitude': 24.2027244567871, 'longitude': 120.626480102539, 'time': '2021-11-10T01:53:59Z', 'elevation': 282.0, 'speed': 24.0, 'heading': 190, 'distance': 384.112411964134 }, { 'latitude': 24.1652126312256, 'longitude': 120.626449584961, 'time': '2021-11-10T01:56:46Z', 'elevation': 178.0, 'speed': 27.0, 'heading': 180, 'distance': 4154.84410162968 }, { 'latitude': 24.1615982055664, 'longitude': 120.625587463379, 'time': '2021-11-10T01:57:01Z', 'elevation': 180.0, 'speed': 27.0, 'heading': 199, 'distance': 409.810406527872 }, { 'latitude': 24.1333847045898, 'longitude': 120.616004943848, 'time': '2021-11-10T01:59:47Z', 'elevation': 142.0, 'speed': 0.0, 'heading': 318, 'distance': 3273.18822667741 }, { 'latitude': 24.1335277557373, 'longitude': 120.615928649902, 'time': '2021-11-10T02:00:03Z', 'elevation': 75.0, 'speed': 0.0, 'heading': 266, 'distance': 17.640415261713 }, { 'latitude': 24.1334857940674, 'longitude': 120.61604309082, 'time': '2021-11-10T02:02:49Z', 'elevation': 72.0, 'speed': 0.0, 'heading': 292, 'distance': 12.5266316339238 }, { 'latitude': 24.1335048675537, 'longitude': 120.615898132324, 'time': '2021-11-10T02:03:04Z', 'elevation': 72.0, 'speed': 0.0, 'heading': 147, 'distance': 14.8852055562204 }, { 'latitude': 24.1334743499756, 'longitude': 120.615936279297, 'time': '2021-11-10T02:05:51Z', 'elevation': 71.0, 'speed': 0.0, 'heading': 238, 'distance': 5.14394028521606 }, { 'latitude': 24.1335105895996, 'longitude': 120.615951538086, 'time': '2021-11-10T02:06:07Z', 'elevation': 70.0, 'speed': 0.0, 'heading': 314, 'distance': 4.30314027911681 }, { 'latitude': 24.1335105895996, 'longitude': 120.61595916748, 'time': '2021-11-10T02:08:53Z', 'elevation': 70.0, 'speed': 0.0, 'heading': 352, 'distance': 0.775495388939327 }, { 'latitude': 24.1335411071777, 'longitude': 120.61597442627, 'time': '2021-11-10T02:09:08Z', 'elevation': 70.0, 'speed': 0.0, 'heading': 244, 'distance': 3.71898659212742 }, { 'latitude': 24.1335258483887, 'longitude': 120.616004943848, 'time': '2021-11-10T02:11:55Z', 'elevation': 70.0, 'speed': 1.0, 'heading': 187, 'distance': 3.53250739139644 }, { 'latitude': 24.1335220336914, 'longitude': 120.615989685059, 'time': '2021-11-10T02:12:11Z', 'elevation': 70.0, 'speed': 0.0, 'heading': 149, 'distance': 1.60751112778877 }, { 'latitude': 24.1335411071777, 'longitude': 120.615982055664, 'time': '2021-11-10T02:14:58Z', 'elevation': 70.0, 'speed': 0.0, 'heading': 207, 'distance': 2.25042142822804 }, { 'latitude': 24.1335124969482, 'longitude': 120.61595916748, 'time': '2021-11-10T02:15:13Z', 'elevation': 70.0, 'speed': 0.0, 'heading': 202, 'distance': 3.93119508825782 }, { 'latitude': 24.1336231231689, 'longitude': 120.616058349609, 'time': '2021-11-10T02:17:59Z', 'elevation': 70.0, 'speed': 1.0, 'heading': 237, 'distance': 15.8673366357721 }, { 'latitude': 24.1335525512695, 'longitude': 120.615913391113, 'time': '2021-11-10T02:18:14Z', 'elevation': 69.0, 'speed': 0.0, 'heading': 237, 'distance': 16.6794649213158 }, { 'latitude': 24.1335334777832, 'longitude': 120.616065979004, 'time': '2021-11-10T02:21:01Z', 'elevation': 71.0, 'speed': 1.0, 'heading': 233, 'distance': 15.6532382503735 }, { 'latitude': 24.1335430145264, 'longitude': 120.615982055664, 'time': '2021-11-10T02:21:17Z', 'elevation': 69.0, 'speed': 0.0, 'heading': 233, 'distance': 8.59566272445031 }, { 'latitude': 24.1335163116455, 'longitude': 120.615783691406, 'time': '2021-11-10T02:24:03Z', 'elevation': 68.0, 'speed': 6.0, 'heading': 279, 'distance': 20.3787985898379 }, { 'latitude': 24.1335010528564, 'longitude': 120.615951538086, 'time': '2021-11-10T02:24:19Z', 'elevation': 68.0, 'speed': 0.0, 'heading': 295, 'distance': 17.1445362507278 }, { 'latitude': 24.133617401123, 'longitude': 120.61595916748, 'time': '2021-11-10T02:27:06Z', 'elevation': 68.0, 'speed': 1.0, 'heading': 237, 'distance': 12.9100643561453 }, { 'latitude': 24.1335353851318, 'longitude': 120.615966796875, 'time': '2021-11-10T02:27:21Z', 'elevation': 67.0, 'speed': 0.0, 'heading': 275, 'distance': 9.11714494421789 }, { 'latitude': 24.1335468292236, 'longitude': 120.615936279297, 'time': '2021-11-10T02:30:07Z', 'elevation': 68.0, 'speed': 0.0, 'heading': 260, 'distance': 3.3509649797577 }, { 'latitude': 24.1335353851318, 'longitude': 120.615982055664, 'time': '2021-11-10T02:30:23Z', 'elevation': 67.0, 'speed': 0.0, 'heading': 246, 'distance': 4.8225327892833 }, { 'latitude': 24.1336059570312, 'longitude': 120.616180419922, 'time': '2021-11-10T02:33:10Z', 'elevation': 91.0, 'speed': 1.0, 'heading': 110, 'distance': 21.6251290555633 }, { 'latitude': 24.1335182189941, 'longitude': 120.615989685059, 'time': '2021-11-10T02:33:25Z', 'elevation': 70.0, 'speed': 0.0, 'heading': 281, 'distance': 21.6867101632205 }, { 'latitude': 24.1334934234619, 'longitude': 120.615859985352, 'time': '2021-11-10T02:36:11Z', 'elevation': 70.0, 'speed': 1.0, 'heading': 224, 'distance': 13.4665437678027 }, { 'latitude': 24.1335391998291, 'longitude': 120.615936279297, 'time': '2021-11-10T02:36:26Z', 'elevation': 70.0, 'speed': 0.0, 'heading': 275, 'distance': 9.26537329289334 }, { 'latitude': 24.1336078643799, 'longitude': 120.615982055664, 'time': '2021-11-10T02:39:13Z', 'elevation': 70.0, 'speed': 1.0, 'heading': 261, 'distance': 8.91575341163425 }, { 'latitude': 24.1335506439209, 'longitude': 120.615898132324, 'time': '2021-11-10T02:39:28Z', 'elevation': 69.0, 'speed': 0.0, 'heading': 351, 'distance': 10.6271658606654 }, { 'latitude': 24.1336154937744, 'longitude': 120.615997314453, 'time': '2021-11-10T02:42:16Z', 'elevation': 69.0, 'speed': 1.0, 'heading': 315, 'distance': 12.3785792907953 }, { 'latitude': 24.1334972381592, 'longitude': 120.615989685059, 'time': '2021-11-10T02:42:31Z', 'elevation': 69.0, 'speed': 0.0, 'heading': 246, 'distance': 13.1209472283607 }, { 'latitude': 24.1335716247559, 'longitude': 120.61597442627, 'time': '2021-11-10T02:45:17Z', 'elevation': 68.0, 'speed': 2.0, 'heading': 259, 'distance': 8.38378541502848 }, { 'latitude': 24.1336116790771, 'longitude': 120.61597442627, 'time': '2021-11-10T02:45:32Z', 'elevation': 71.0, 'speed': 0.0, 'heading': 259, 'distance': 4.43642273046903 }, { 'latitude': 24.133602142334, 'longitude': 120.615905761719, 'time': '2021-11-10T02:48:35Z', 'elevation': 61.0, 'speed': 1.0, 'heading': 258, 'distance': 7.0589318401259 }, { 'latitude': 24.1335544586182, 'longitude': 120.615821838379, 'time': '2021-11-10T02:51:21Z', 'elevation': 63.0, 'speed': 2.0, 'heading': 249, 'distance': 10.0331149157706 }, { 'latitude': 24.1335964202881, 'longitude': 120.61595916748, 'time': '2021-11-10T02:51:37Z', 'elevation': 66.0, 'speed': 0.0, 'heading': 176, 'distance': 14.7124144793942 }, { 'latitude': 24.1335487365723, 'longitude': 120.616271972656, 'time': '2021-11-10T02:54:23Z', 'elevation': 65.0, 'speed': 0.0, 'heading': 0, 'distance': 32.2312013389224 }, { 'latitude': 24.1335067749023, 'longitude': 120.615852355957, 'time': '2021-11-10T02:54:44Z', 'elevation': 65.0, 'speed': 0.0, 'heading': 256, 'distance': 42.9050452044346 }, { 'latitude': 24.1335372924805, 'longitude': 120.61595916748, 'time': '2021-11-10T02:57:30Z', 'elevation': 65.0, 'speed': 0.0, 'heading': 276, 'distance': 11.3710224396086 }, { 'latitude': 24.1335144042969, 'longitude': 120.615921020508, 'time': '2021-11-10T02:57:46Z', 'elevation': 65.0, 'speed': 0.0, 'heading': 17, 'distance': 4.6326611309999 }, { 'latitude': 24.1335716247559, 'longitude': 120.616073608398, 'time': '2021-11-10T03:00:32Z', 'elevation': 65.0, 'speed': 0.0, 'heading': 260, 'distance': 16.7549365106541 }, { 'latitude': 24.1335468292236, 'longitude': 120.615997314453, 'time': '2021-11-10T03:00:48Z', 'elevation': 66.0, 'speed': 0.0, 'heading': 260, 'distance': 8.22694822834861 }, { 'latitude': 24.1331615447998, 'longitude': 120.61498260498, 'time': '2021-11-10T03:03:34Z', 'elevation': 66.0, 'speed': 0.0, 'heading': 277, 'distance': 111.621315155364 }, { 'latitude': 24.1336231231689, 'longitude': 120.615859985352, 'time': '2021-11-10T03:03:50Z', 'elevation': 66.0, 'speed': 0.0, 'heading': 266, 'distance': 102.797254823627 }, { 'latitude': 24.1337776184082, 'longitude': 120.616790771484, 'time': '2021-11-10T03:06:51Z', 'elevation': 67.0, 'speed': 0.0, 'heading': 79, 'distance': 96.14606352862 }, { 'latitude': 24.1335468292236, 'longitude': 120.615898132324, 'time': '2021-11-10T03:09:39Z', 'elevation': 56.0, 'speed': 0.0, 'heading': 303, 'distance': 94.2656209970685 }, { 'latitude': 24.1335277557373, 'longitude': 120.615875244141, 'time': '2021-11-10T03:09:54Z', 'elevation': 58.0, 'speed': 0.0, 'heading': 303, 'distance': 3.14253708376815 }, { 'latitude': 24.1336345672607, 'longitude': 120.615882873535, 'time': '2021-11-10T03:12:41Z', 'elevation': 60.0, 'speed': 2.0, 'heading': 268, 'distance': 11.8558504721898 }, { 'latitude': 24.1335334777832, 'longitude': 120.616065979004, 'time': '2021-11-10T03:12:56Z', 'elevation': 60.0, 'speed': 1.0, 'heading': 249, 'distance': 21.7203406764977 }, { 'latitude': 24.133695602417, 'longitude': 120.615730285645, 'time': '2021-11-10T03:15:42Z', 'elevation': 60.0, 'speed': 3.0, 'heading': 251, 'distance': 38.5585958178252 }, { 'latitude': 24.1335906982422, 'longitude': 120.615821838379, 'time': '2021-11-10T03:15:58Z', 'elevation': 61.0, 'speed': 0.0, 'heading': 69, 'distance': 14.8864919374648 }, { 'latitude': 24.1334476470947, 'longitude': 120.615936279297, 'time': '2021-11-10T03:18:59Z', 'elevation': 61.0, 'speed': 0.0, 'heading': 278, 'distance': 19.6560294509606 }, { 'latitude': 24.1335220336914, 'longitude': 120.615692138672, 'time': '2021-11-10T03:21:46Z', 'elevation': 61.0, 'speed': 2.0, 'heading': 283, 'distance': 26.1480143548408 }, { 'latitude': 24.13352394104, 'longitude': 120.615966796875, 'time': '2021-11-10T03:22:01Z', 'elevation': 61.0, 'speed': 0.0, 'heading': 329, 'distance': 27.918847976709 }, { 'latitude': 24.1332416534424, 'longitude': 120.615386962891, 'time': '2021-11-10T03:24:47Z', 'elevation': 61.0, 'speed': 0.0, 'heading': 50, 'distance': 66.717942305452 }, { 'latitude': 24.1336288452148, 'longitude': 120.615760803223, 'time': '2021-11-10T03:25:03Z', 'elevation': 61.0, 'speed': 0.0, 'heading': 272, 'distance': 57.2985877366077 }, { 'latitude': 24.1335334777832, 'longitude': 120.616104125977, 'time': '2021-11-10T03:28:05Z', 'elevation': 57.0, 'speed': 1.0, 'heading': 260, 'distance': 36.4611265031718 }, { 'latitude': 24.1335506439209, 'longitude': 120.615875244141, 'time': '2021-11-10T03:30:51Z', 'elevation': 57.0, 'speed': 1.0, 'heading': 305, 'distance': 23.34260022301 }, { 'latitude': 24.1335506439209, 'longitude': 120.615928649902, 'time': '2021-11-10T03:31:07Z', 'elevation': 57.0, 'speed': 0.0, 'heading': 254, 'distance': 5.42846601896555 }, { 'latitude': 24.1336765289307, 'longitude': 120.615760803223, 'time': '2021-11-10T03:33:54Z', 'elevation': 57.0, 'speed': 1.0, 'heading': 4, 'distance': 22.0337643530666 }, { 'latitude': 24.1335849761963, 'longitude': 120.615989685059, 'time': '2021-11-10T03:34:09Z', 'elevation': 57.0, 'speed': 0.0, 'heading': 230, 'distance': 25.3789048936823 }, { 'latitude': 24.1328983306885, 'longitude': 120.615600585938, 'time': '2021-11-10T03:36:55Z', 'elevation': 57.0, 'speed': 2.0, 'heading': 287, 'distance': 85.7222649694571 }, { 'latitude': 24.1335964202881, 'longitude': 120.615928649902, 'time': '2021-11-10T03:37:11Z', 'elevation': 56.0, 'speed': 1.0, 'heading': 286, 'distance': 84.2048603353438 }, { 'latitude': 24.1336441040039, 'longitude': 120.615913391113, 'time': '2021-11-10T03:39:57Z', 'elevation': 56.0, 'speed': 1.0, 'heading': 331, 'distance': 5.50448381551372 }, { 'latitude': 24.1336269378662, 'longitude': 120.615997314453, 'time': '2021-11-10T03:40:13Z', 'elevation': 56.0, 'speed': 0.0, 'heading': 267, 'distance': 8.73982778783583 }, { 'latitude': 24.133508682251, 'longitude': 120.615684509277, 'time': '2021-11-10T03:43:14Z', 'elevation': 56.0, 'speed': 0.0, 'heading': 65, 'distance': 34.3877086367055 }, { 'latitude': 24.1335601806641, 'longitude': 120.615936279297, 'time': '2021-11-10T03:46:00Z', 'elevation': 65.0, 'speed': 0.0, 'heading': 292, 'distance': 26.2195029863216 }, { 'latitude': 24.1335983276367, 'longitude': 120.61595916748, 'time': '2021-11-10T03:46:16Z', 'elevation': 78.0, 'speed': 0.0, 'heading': 238, 'distance': 4.82333361130927 }, { 'latitude': 24.1335868835449, 'longitude': 120.616004943848, 'time': '2021-11-10T03:49:02Z', 'elevation': 78.0, 'speed': 2.0, 'heading': 205, 'distance': 4.82253099142635 }, { 'latitude': 24.1336212158203, 'longitude': 120.616027832031, 'time': '2021-11-10T03:49:18Z', 'elevation': 78.0, 'speed': 0.0, 'heading': 192, 'distance': 4.45787643034441 }, { 'latitude': 24.133674621582, 'longitude': 120.61595916748, 'time': '2021-11-10T03:52:04Z', 'elevation': 78.0, 'speed': 1.0, 'heading': 229, 'distance': 9.14891724633189 }, { 'latitude': 24.133617401123, 'longitude': 120.616142272949, 'time': '2021-11-10T03:52:20Z', 'elevation': 76.0, 'speed': 0.0, 'heading': 269, 'distance': 19.6614883420115 }, { 'latitude': 24.1335506439209, 'longitude': 120.615936279297, 'time': '2021-11-10T03:55:07Z', 'elevation': 76.0, 'speed': 0.0, 'heading': 269, 'distance': 22.2057130300572 }, { 'latitude': 24.1335735321045, 'longitude': 120.615966796875, 'time': '2021-11-10T03:55:22Z', 'elevation': 76.0, 'speed': 0.0, 'heading': 53, 'distance': 4.00612121713599 }, { 'latitude': 24.1334934234619, 'longitude': 120.615928649902, 'time': '2021-11-10T03:58:08Z', 'elevation': 76.0, 'speed': 1.0, 'heading': 335, 'distance': 9.68308873419319 }, { 'latitude': 24.1335697174072, 'longitude': 120.61604309082, 'time': '2021-11-10T03:58:24Z', 'elevation': 76.0, 'speed': 0.0, 'heading': 57, 'distance': 14.3778847328859 }, { 'latitude': 24.133358001709, 'longitude': 120.616035461426, 'time': '2021-11-10T04:01:25Z', 'elevation': 76.0, 'speed': 0.0, 'heading': 248, 'distance': 23.46248218324 }, { 'latitude': 24.1335296630859, 'longitude': 120.61597442627, 'time': '2021-11-10T04:04:26Z', 'elevation': 68.0, 'speed': 0.0, 'heading': 331, 'distance': 19.9998122451322 }, { 'latitude': 24.1333866119385, 'longitude': 120.615875244141, 'time': '2021-11-10T04:07:48Z', 'elevation': 69.0, 'speed': 0.0, 'heading': 263, 'distance': 18.7798043856225 }, { 'latitude': 24.1335906982422, 'longitude': 120.615951538086, 'time': '2021-11-10T04:10:36Z', 'elevation': 70.0, 'speed': 2.0, 'heading': 194, 'distance': 23.8978985520412 }, { 'latitude': 24.1335697174072, 'longitude': 120.615989685059, 'time': '2021-11-10T04:10:51Z', 'elevation': 71.0, 'speed': 0.0, 'heading': 186, 'distance': 4.52051387227991 }, { 'latitude': 24.1340351104736, 'longitude': 120.616256713867, 'time': '2021-11-10T04:13:39Z', 'elevation': 70.0, 'speed': 1.0, 'heading': 246, 'distance': 58.2564052101298 }, { 'latitude': 24.1337490081787, 'longitude': 120.616142272949, 'time': '2021-11-10T04:13:54Z', 'elevation': 69.0, 'speed': 1.0, 'heading': 233, 'distance': 33.7563428080769 }, { 'latitude': 24.1333656311035, 'longitude': 120.616065979004, 'time': '2021-11-10T04:16:40Z', 'elevation': 69.0, 'speed': 0.0, 'heading': 227, 'distance': 43.1652446010955 }, { 'latitude': 24.1334495544434, 'longitude': 120.616081237793, 'time': '2021-11-10T04:16:56Z', 'elevation': 69.0, 'speed': 0.0, 'heading': 204, 'distance': 9.42386996706483 }, { 'latitude': 24.1335716247559, 'longitude': 120.616027832031, 'time': '2021-11-10T04:22:58Z', 'elevation': 85.0, 'speed': 0.0, 'heading': 217, 'distance': 14.5695879293638 }, { 'latitude': 24.1334228515625, 'longitude': 120.616203308105, 'time': '2021-11-10T04:26:00Z', 'elevation': 83.0, 'speed': 0.0, 'heading': 92, 'distance': 24.2831446103357 }, { 'latitude': 24.1027278900146, 'longitude': 120.625823974609, 'time': '2021-11-10T04:40:54Z', 'elevation': 75.0, 'speed': 0.0, 'heading': 148, 'distance': 3537.65174367684 }, { 'latitude': 24.1025791168213, 'longitude': 120.625465393066, 'time': '2021-11-10T04:41:10Z', 'elevation': 111.0, 'speed': 0.0, 'heading': 171, 'distance': 40.0082766882944 }, { 'latitude': 24.1024932861328, 'longitude': 120.625259399414, 'time': '2021-11-10T04:44:12Z', 'elevation': 103.0, 'speed': 1.0, 'heading': 202, 'distance': 23.0001864122469 }, { 'latitude': 24.1023406982422, 'longitude': 120.625221252441, 'time': '2021-11-10T04:46:58Z', 'elevation': 104.0, 'speed': 1.0, 'heading': 204, 'distance': 17.3398963305615 }, { 'latitude': 24.1024703979492, 'longitude': 120.625259399414, 'time': '2021-11-10T04:47:14Z', 'elevation': 107.0, 'speed': 0.0, 'heading': 199, 'distance': 14.8798422888248 }, { 'latitude': 24.1020221710205, 'longitude': 120.625434875488, 'time': '2021-11-10T04:50:02Z', 'elevation': 80.0, 'speed': 1.0, 'heading': 255, 'distance': 52.7538636057273 }, { 'latitude': 24.1023979187012, 'longitude': 120.625343322754, 'time': '2021-11-10T04:50:17Z', 'elevation': 92.0, 'speed': 0.0, 'heading': 262, 'distance': 42.6459493740947 }, { 'latitude': 24.1024951934814, 'longitude': 120.62525177002, 'time': '2021-11-10T04:53:19Z', 'elevation': 91.0, 'speed': 0.0, 'heading': 15, 'distance': 14.2381724055535 }, { 'latitude': 24.0652732849121, 'longitude': 120.66291809082, 'time': '2021-11-10T06:18:20Z', 'elevation': 75.0, 'speed': 25.0, 'heading': 113, 'distance': 5627.28517387231 }, { 'latitude': 24.0091857910156, 'longitude': 120.64916229248, 'time': '2021-11-10T06:24:23Z', 'elevation': 89.0, 'speed': 10.0, 'heading': 335, 'distance': 6367.82234456291 }, { 'latitude': 24.0101547241211, 'longitude': 120.642143249512, 'time': '2021-11-10T06:27:25Z', 'elevation': 85.0, 'speed': 0.0, 'heading': 87, 'distance': 722.165162968151 }],
    [{ 'latitude': 25.4093894958496, 'longitude': 121.993362426758, 'time': '2021-11-09T23:31:28Z', 'elevation': 35.0, 'speed': 18.0, 'heading': 217, 'distance': 0.0 }, { 'latitude': 25.4071006774902, 'longitude': 121.992492675781, 'time': '2021-11-09T23:31:43Z', 'elevation': 62.0, 'speed': 20.0, 'heading': 207, 'distance': 268.229327061518 }, { 'latitude': 25.4047527313232, 'longitude': 121.991706848145, 'time': '2021-11-09T23:31:58Z', 'elevation': 86.0, 'speed': 20.0, 'heading': 221, 'distance': 271.855010822433 }, { 'latitude': 25.4019088745117, 'longitude': 121.990264892578, 'time': '2021-11-09T23:32:13Z', 'elevation': 102.0, 'speed': 23.0, 'heading': 199, 'distance': 346.842893417675 }, { 'latitude': 25.3993034362793, 'longitude': 121.988571166992, 'time': '2021-11-09T23:32:28Z', 'elevation': 116.0, 'speed': 22.0, 'heading': 190, 'distance': 335.186398482936 }, { 'latitude': 25.396333694458, 'longitude': 121.987274169922, 'time': '2021-11-09T23:32:43Z', 'elevation': 125.0, 'speed': 24.0, 'heading': 222, 'distance': 353.925111043899 }, { 'latitude': 25.3935222625732, 'longitude': 121.985229492188, 'time': '2021-11-09T23:32:58Z', 'elevation': 139.0, 'speed': 24.0, 'heading': 227, 'distance': 373.270102515883 }, { 'latitude': 25.390417098999, 'longitude': 121.983604431152, 'time': '2021-11-09T23:33:13Z', 'elevation': 143.0, 'speed': 27.0, 'heading': 200, 'distance': 380.876824968007 }, { 'latitude': 25.3872184753418, 'longitude': 121.982032775879, 'time': '2021-11-09T23:33:28Z', 'elevation': 152.0, 'speed': 24.0, 'heading': 215, 'distance': 388.033071145871 }, { 'latitude': 25.384162902832, 'longitude': 121.980316162109, 'time': '2021-11-09T23:33:43Z', 'elevation': 172.0, 'speed': 25.0, 'heading': 198, 'distance': 380.024559650406 }, { 'latitude': 25.380802154541, 'longitude': 121.979263305664, 'time': '2021-11-09T23:33:58Z', 'elevation': 178.0, 'speed': 25.0, 'heading': 201, 'distance': 387.082600135508 }, { 'latitude': 25.3778190612793, 'longitude': 121.977256774902, 'time': '2021-11-09T23:34:13Z', 'elevation': 171.0, 'speed': 26.0, 'heading': 204, 'distance': 387.275946048408 }, { 'latitude': 25.3742828369141, 'longitude': 121.97624206543, 'time': '2021-11-09T23:34:28Z', 'elevation': 168.0, 'speed': 27.0, 'heading': 199, 'distance': 404.829744046697 }, { 'latitude': 25.3391857147217, 'longitude': 121.957084655762, 'time': '2021-11-09T23:37:15Z', 'elevation': 198.0, 'speed': 27.0, 'heading': 201, 'distance': 4339.92410842895 }, { 'latitude': 25.3358840942383, 'longitude': 121.955345153809, 'time': '2021-11-09T23:37:30Z', 'elevation': 208.0, 'speed': 27.0, 'heading': 210, 'distance': 405.509188635101 }, { 'latitude': 25.2991428375244, 'longitude': 121.932235717773, 'time': '2021-11-09T23:40:17Z', 'elevation': 156.0, 'speed': 27.0, 'heading': 225, 'distance': 4688.29488337977 }, { 'latitude': 25.2964096069336, 'longitude': 121.929405212402, 'time': '2021-11-09T23:40:32Z', 'elevation': 156.0, 'speed': 29.0, 'heading': 218, 'distance': 415.845726212645 }, { 'latitude': 25.2589359283447, 'longitude': 121.910720825195, 'time': '2021-11-09T23:43:18Z', 'elevation': 98.0, 'speed': 28.0, 'heading': 201, 'distance': 4557.8845024879 }, { 'latitude': 25.2553482055664, 'longitude': 121.909233093262, 'time': '2021-11-09T23:43:34Z', 'elevation': 97.0, 'speed': 28.0, 'heading': 199, 'distance': 424.755601279799 }, { 'latitude': 25.215970993042, 'longitude': 121.898696899414, 'time': '2021-11-09T23:46:21Z', 'elevation': 146.0, 'speed': 23.0, 'heading': 216, 'distance': 4489.38730411473 }, { 'latitude': 25.212869644165, 'longitude': 121.896759033203, 'time': '2021-11-09T23:46:36Z', 'elevation': 151.0, 'speed': 26.0, 'heading': 202, 'distance': 395.179975694512 }, { 'latitude': 25.1777095794678, 'longitude': 121.878646850586, 'time': '2021-11-09T23:49:23Z', 'elevation': 181.0, 'speed': 23.0, 'heading': 185, 'distance': 4301.47282131008 }, { 'latitude': 25.1746368408203, 'longitude': 121.877304077148, 'time': '2021-11-09T23:49:38Z', 'elevation': 183.0, 'speed': 25.0, 'heading': 197, 'distance': 366.310681307838 }, { 'latitude': 25.1456489562988, 'longitude': 121.853759765625, 'time': '2021-11-09T23:52:25Z', 'elevation': 216.0, 'speed': 24.0, 'heading': 226, 'distance': 3993.23509634822 }, { 'latitude': 25.1429252624512, 'longitude': 121.85173034668, 'time': '2021-11-09T23:52:40Z', 'elevation': 239.0, 'speed': 24.0, 'heading': 214, 'distance': 364.563863352884 }, { 'latitude': 25.1185436248779, 'longitude': 121.822662353516, 'time': '2021-11-09T23:55:27Z', 'elevation': 213.0, 'speed': 23.0, 'heading': 241, 'distance': 3985.88150521732 }, { 'latitude': 25.1182327270508, 'longitude': 121.819465637207, 'time': '2021-11-09T23:55:42Z', 'elevation': 215.0, 'speed': 21.0, 'heading': 250, 'distance': 324.233134892882 }, { 'latitude': 25.102466583252, 'longitude': 121.787811279297, 'time': '2021-11-09T23:58:29Z', 'elevation': 168.0, 'speed': 24.0, 'heading': 245, 'distance': 3639.12536146952 }, { 'latitude': 25.1011371612549, 'longitude': 121.784553527832, 'time': '2021-11-09T23:58:44Z', 'elevation': 160.0, 'speed': 23.0, 'heading': 248, 'distance': 360.089470803429 }, { 'latitude': 25.0957889556885, 'longitude': 121.747100830078, 'time': '2021-11-10T00:01:31Z', 'elevation': 91.0, 'speed': 25.0, 'heading': 252, 'distance': 3824.00622122527 }, { 'latitude': 25.0949878692627, 'longitude': 121.743659973145, 'time': '2021-11-10T00:01:46Z', 'elevation': 95.0, 'speed': 23.0, 'heading': 249, 'distance': 358.250679310312 }, { 'latitude': 25.0875129699707, 'longitude': 121.7080078125, 'time': '2021-11-10T00:04:33Z', 'elevation': 95.0, 'speed': 23.0, 'heading': 255, 'distance': 3690.51600895474 }, { 'latitude': 25.086799621582, 'longitude': 121.704727172852, 'time': '2021-11-10T00:04:48Z', 'elevation': 96.0, 'speed': 22.0, 'heading': 249, 'distance': 340.250017835695 }, { 'latitude': 25.0715370178223, 'longitude': 121.671524047852, 'time': '2021-11-10T00:07:35Z', 'elevation': 80.0, 'speed': 22.0, 'heading': 219, 'distance': 3752.20054452654 }, { 'latitude': 25.0700263977051, 'longitude': 121.668449401855, 'time': '2021-11-10T00:07:50Z', 'elevation': 75.0, 'speed': 21.0, 'heading': 267, 'distance': 352.463647171367 }, { 'latitude': 25.0541915893555, 'longitude': 121.637763977051, 'time': '2021-11-10T00:10:37Z', 'elevation': 94.0, 'speed': 25.0, 'heading': 236, 'distance': 3558.49272790169 }, { 'latitude': 25.0526027679443, 'longitude': 121.634742736816, 'time': '2021-11-10T00:10:52Z', 'elevation': 99.0, 'speed': 22.0, 'heading': 247, 'distance': 352.018487193174 }, { 'latitude': 25.043628692627, 'longitude': 121.599159240723, 'time': '2021-11-10T00:13:39Z', 'elevation': 90.0, 'speed': 23.0, 'heading': 251, 'distance': 3725.82227312592 }, { 'latitude': 25.0429229736328, 'longitude': 121.595756530762, 'time': '2021-11-10T00:13:54Z', 'elevation': 82.0, 'speed': 23.0, 'heading': 252, 'distance': 352.169739601697 }, { 'latitude': 25.034351348877, 'longitude': 121.559844970703, 'time': '2021-11-10T00:16:40Z', 'elevation': 64.0, 'speed': 21.0, 'heading': 254, 'distance': 3746.45995861279 }, { 'latitude': 25.0322284698486, 'longitude': 121.557281494141, 'time': '2021-11-10T00:16:56Z', 'elevation': 56.0, 'speed': 22.0, 'heading': 222, 'distance': 349.617142051199 }, { 'latitude': 25.015588760376, 'longitude': 121.527931213379, 'time': '2021-11-10T00:19:43Z', 'elevation': 72.0, 'speed': 22.0, 'heading': 243, 'distance': 3488.97851602875 }, { 'latitude': 25.0144462585449, 'longitude': 121.524856567383, 'time': '2021-11-10T00:19:58Z', 'elevation': 67.0, 'speed': 21.0, 'heading': 247, 'distance': 335.161094363965 }, { 'latitude': 25.00168800354, 'longitude': 121.491638183594, 'time': '2021-11-10T00:22:44Z', 'elevation': 68.0, 'speed': 24.0, 'heading': 251, 'distance': 3638.83880202566 }, { 'latitude': 25.0000305175781, 'longitude': 121.488700866699, 'time': '2021-11-10T00:23:00Z', 'elevation': 60.0, 'speed': 23.0, 'heading': 244, 'distance': 348.761998992509 }, { 'latitude': 24.9829196929932, 'longitude': 121.45728302002, 'time': '2021-11-10T00:25:47Z', 'elevation': 76.0, 'speed': 19.0, 'heading': 227, 'distance': 3695.02968112567 }, { 'latitude': 24.9810523986816, 'longitude': 121.454795837402, 'time': '2021-11-10T00:26:02Z', 'elevation': 74.0, 'speed': 20.0, 'heading': 238, 'distance': 325.338418578931 }, { 'latitude': 24.9606227874756, 'longitude': 121.424789428711, 'time': '2021-11-10T00:28:49Z', 'elevation': 64.0, 'speed': 22.0, 'heading': 223, 'distance': 3781.7216715086 }, { 'latitude': 24.9586238861084, 'longitude': 121.421989440918, 'time': '2021-11-10T00:29:04Z', 'elevation': 56.0, 'speed': 26.0, 'heading': 248, 'distance': 359.13283902351 }, { 'latitude': 24.942533493042, 'longitude': 121.388282775879, 'time': '2021-11-10T00:31:51Z', 'elevation': 44.0, 'speed': 25.0, 'heading': 232, 'distance': 3842.44645804791 }, { 'latitude': 24.9405250549316, 'longitude': 121.385650634766, 'time': '2021-11-10T00:32:06Z', 'elevation': 49.0, 'speed': 22.0, 'heading': 228, 'distance': 346.652498719315 }, { 'latitude': 24.9346599578857, 'longitude': 121.351654052734, 'time': '2021-11-10T00:34:53Z', 'elevation': 110.0, 'speed': 23.0, 'heading': 271, 'distance': 3494.61278518653 }, { 'latitude': 24.9345779418945, 'longitude': 121.348335266113, 'time': '2021-11-10T00:35:08Z', 'elevation': 116.0, 'speed': 24.0, 'heading': 260, 'distance': 335.33196909372 }, { 'latitude': 24.917797088623, 'longitude': 121.313621520996, 'time': '2021-11-10T00:37:55Z', 'elevation': 114.0, 'speed': 25.0, 'heading': 232, 'distance': 3968.68633645495 }, { 'latitude': 24.9160118103027, 'longitude': 121.310340881348, 'time': '2021-11-10T00:38:10Z', 'elevation': 107.0, 'speed': 25.0, 'heading': 239, 'distance': 385.922831298422 }, { 'latitude': 24.8923530578613, 'longitude': 121.281967163086, 'time': '2021-11-10T00:40:57Z', 'elevation': 170.0, 'speed': 24.0, 'heading': 219, 'distance': 3883.97157611989 }, { 'latitude': 24.8903007507324, 'longitude': 121.279472351074, 'time': '2021-11-10T00:41:12Z', 'elevation': 198.0, 'speed': 22.0, 'heading': 229, 'distance': 339.444454859952 }, { 'latitude': 24.8654499053955, 'longitude': 121.256202697754, 'time': '2021-11-10T00:43:59Z', 'elevation': 277.0, 'speed': 22.0, 'heading': 228, 'distance': 3620.31688217239 }, { 'latitude': 24.8633766174316, 'longitude': 121.253807067871, 'time': '2021-11-10T00:44:14Z', 'elevation': 310.0, 'speed': 23.0, 'heading': 228, 'distance': 333.703327909722 }, { 'latitude': 24.8354682922363, 'longitude': 121.231307983398, 'time': '2021-11-10T00:47:01Z', 'elevation': 333.0, 'speed': 21.0, 'heading': 207, 'distance': 3837.73081017722 }, { 'latitude': 24.8332786560059, 'longitude': 121.229339599609, 'time': '2021-11-10T00:47:16Z', 'elevation': 346.0, 'speed': 20.0, 'heading': 225, 'distance': 313.719135887457 }, { 'latitude': 24.806640625, 'longitude': 121.204246520996, 'time': '2021-11-10T00:50:03Z', 'elevation': 342.0, 'speed': 27.0, 'heading': 206, 'distance': 3891.28839018262 }, { 'latitude': 24.8033885955811, 'longitude': 121.202827453613, 'time': '2021-11-10T00:50:18Z', 'elevation': 339.0, 'speed': 26.0, 'heading': 209, 'distance': 387.750258009447 }, { 'latitude': 24.7752723693848, 'longitude': 121.181587219238, 'time': '2021-11-10T00:53:05Z', 'elevation': 320.0, 'speed': 23.0, 'heading': 215, 'distance': 3783.23909217134 }, { 'latitude': 24.7732486724854, 'longitude': 121.179100036621, 'time': '2021-11-10T00:53:20Z', 'elevation': 318.0, 'speed': 22.0, 'heading': 233, 'distance': 336.928631931519 }, { 'latitude': 24.7455081939697, 'longitude': 121.159492492676, 'time': '2021-11-10T00:56:07Z', 'elevation': 310.0, 'speed': 21.0, 'heading': 221, 'distance': 3657.21567794976 }, { 'latitude': 24.7437419891357, 'longitude': 121.157173156738, 'time': '2021-11-10T00:56:22Z', 'elevation': 323.0, 'speed': 20.0, 'heading': 238, 'distance': 305.485428777403 }, { 'latitude': 24.7257328033447, 'longitude': 121.123191833496, 'time': '2021-11-10T00:59:09Z', 'elevation': 336.0, 'speed': 27.0, 'heading': 247, 'distance': 3974.61421435514 }, { 'latitude': 24.7242774963379, 'longitude': 121.119583129883, 'time': '2021-11-10T00:59:24Z', 'elevation': 332.0, 'speed': 27.0, 'heading': 246, 'distance': 399.109486379523 }, { 'latitude': 24.706937789917, 'longitude': 121.083442687988, 'time': '2021-11-10T01:02:11Z', 'elevation': 308.0, 'speed': 24.0, 'heading': 239, 'distance': 4130.46926424968 }, { 'latitude': 24.705696105957, 'longitude': 121.079849243164, 'time': '2021-11-10T01:02:26Z', 'elevation': 290.0, 'speed': 26.0, 'heading': 249, 'distance': 388.75928283235 }, { 'latitude': 24.6910781860352, 'longitude': 121.040473937988, 'time': '2021-11-10T01:05:13Z', 'elevation': 225.0, 'speed': 27.0, 'heading': 253, 'distance': 4301.01986437138 }, { 'latitude': 24.6896419525146, 'longitude': 121.036605834961, 'time': '2021-11-10T01:05:28Z', 'elevation': 201.0, 'speed': 27.0, 'heading': 248, 'distance': 422.550504203903 }, { 'latitude': 24.6759643554688, 'longitude': 120.999801635742, 'time': '2021-11-10T01:08:15Z', 'elevation': 201.0, 'speed': 25.0, 'heading': 246, 'distance': 4021.19420045831 }, { 'latitude': 24.6747131347656, 'longitude': 120.996421813965, 'time': '2021-11-10T01:08:30Z', 'elevation': 203.0, 'speed': 25.0, 'heading': 246, 'distance': 369.094023880127 }, { 'latitude': 24.6572380065918, 'longitude': 120.95930480957, 'time': '2021-11-10T01:11:17Z', 'elevation': 185.0, 'speed': 25.0, 'heading': 224, 'distance': 4226.36445690147 }, { 'latitude': 24.6551551818848, 'longitude': 120.956474304199, 'time': '2021-11-10T01:11:32Z', 'elevation': 188.0, 'speed': 25.0, 'heading': 246, 'distance': 367.867303797745 }, { 'latitude': 24.6334800720215, 'longitude': 120.920799255371, 'time': '2021-11-10T01:14:19Z', 'elevation': 181.0, 'speed': 25.0, 'heading': 226, 'distance': 4336.89789249682 }, { 'latitude': 24.6312198638916, 'longitude': 120.917770385742, 'time': '2021-11-10T01:14:34Z', 'elevation': 184.0, 'speed': 26.0, 'heading': 224, 'distance': 395.884156403358 }, { 'latitude': 24.6054916381836, 'longitude': 120.882354736328, 'time': '2021-11-10T01:17:21Z', 'elevation': 239.0, 'speed': 28.0, 'heading': 218, 'distance': 4580.64203663602 }, { 'latitude': 24.60276222229, 'longitude': 120.879776000977, 'time': '2021-11-10T01:17:36Z', 'elevation': 261.0, 'speed': 27.0, 'heading': 225, 'distance': 399.503541775584 }, { 'latitude': 24.5694255828857, 'longitude': 120.847747802734, 'time': '2021-11-10T01:20:23Z', 'elevation': 258.0, 'speed': 30.0, 'heading': 228, 'distance': 4915.15487304332 }, { 'latitude': 24.5668449401855, 'longitude': 120.844192504883, 'time': '2021-11-10T01:20:38Z', 'elevation': 259.0, 'speed': 30.0, 'heading': 230, 'distance': 459.803172385792 }, { 'latitude': 24.5361824035645, 'longitude': 120.807739257812, 'time': '2021-11-10T01:23:25Z', 'elevation': 316.0, 'speed': 31.0, 'heading': 225, 'distance': 5017.48080761228 }, { 'latitude': 24.5330505371094, 'longitude': 120.804588317871, 'time': '2021-11-10T01:23:40Z', 'elevation': 331.0, 'speed': 32.0, 'heading': 224, 'distance': 471.465111548118 }, { 'latitude': 24.4970664978027, 'longitude': 120.770156860352, 'time': '2021-11-10T01:26:27Z', 'elevation': 376.0, 'speed': 27.0, 'heading': 214, 'distance': 5297.38966771909 }, { 'latitude': 24.4937133789062, 'longitude': 120.768112182617, 'time': '2021-11-10T01:26:42Z', 'elevation': 383.0, 'speed': 29.0, 'heading': 208, 'distance': 425.318462911949 }, { 'latitude': 24.4562892913818, 'longitude': 120.754974365234, 'time': '2021-11-10T01:29:29Z', 'elevation': 409.0, 'speed': 28.0, 'heading': 207, 'distance': 4353.98513462672 }, { 'latitude': 24.4529266357422, 'longitude': 120.752006530762, 'time': '2021-11-10T01:29:44Z', 'elevation': 373.0, 'speed': 34.0, 'heading': 225, 'distance': 478.829327152294 }, { 'latitude': 24.4182910919189, 'longitude': 120.722358703613, 'time': '2021-11-10T01:32:31Z', 'elevation': 310.0, 'speed': 25.0, 'heading': 208, 'distance': 4874.09478357994 }, { 'latitude': 24.4151020050049, 'longitude': 120.719772338867, 'time': '2021-11-10T01:32:46Z', 'elevation': 283.0, 'speed': 28.0, 'heading': 214, 'distance': 439.982226722155 }, { 'latitude': 24.3790302276611, 'longitude': 120.692794799805, 'time': '2021-11-10T01:35:33Z', 'elevation': 238.0, 'speed': 26.0, 'heading': 204, 'distance': 4842.74901296223 }, { 'latitude': 24.3758411407471, 'longitude': 120.69123840332, 'time': '2021-11-10T01:35:48Z', 'elevation': 247.0, 'speed': 24.0, 'heading': 198, 'distance': 386.920764728606 }, { 'latitude': 24.339750289917, 'longitude': 120.676139831543, 'time': '2021-11-10T01:38:35Z', 'elevation': 254.0, 'speed': 26.0, 'heading': 192, 'distance': 4281.06132602911 }, { 'latitude': 24.3364181518555, 'longitude': 120.675079345703, 'time': '2021-11-10T01:38:50Z', 'elevation': 244.0, 'speed': 25.0, 'heading': 191, 'distance': 384.449223804558 }, { 'latitude': 24.3012504577637, 'longitude': 120.665061950684, 'time': '2021-11-10T01:41:37Z', 'elevation': 227.0, 'speed': 27.0, 'heading': 197, 'distance': 4025.7870245859 }, { 'latitude': 24.2979164123535, 'longitude': 120.663566589355, 'time': '2021-11-10T01:41:52Z', 'elevation': 216.0, 'speed': 27.0, 'heading': 207, 'distance': 399.270402738505 }, { 'latitude': 24.2628421783447, 'longitude': 120.651519775391, 'time': '2021-11-10T01:44:39Z', 'elevation': 225.0, 'speed': 23.0, 'heading': 198, 'distance': 4072.89512984867 }, { 'latitude': 24.2598915100098, 'longitude': 120.650329589844, 'time': '2021-11-10T01:44:54Z', 'elevation': 230.0, 'speed': 22.0, 'heading': 185, 'distance': 348.452521640917 }, { 'latitude': 24.2238464355469, 'longitude': 120.635589599609, 'time': '2021-11-10T01:47:41Z', 'elevation': 218.0, 'speed': 27.0, 'heading': 203, 'distance': 4263.84738626795 }, { 'latitude': 24.2204761505127, 'longitude': 120.634719848633, 'time': '2021-11-10T01:47:56Z', 'elevation': 219.0, 'speed': 25.0, 'heading': 204, 'distance': 383.609369611524 }, { 'latitude': 24.1850833892822, 'longitude': 120.635047912598, 'time': '2021-11-10T01:50:43Z', 'elevation': 217.0, 'speed': 22.0, 'heading': 178, 'distance': 3920.2848553725 }, { 'latitude': 24.1822319030762, 'longitude': 120.635673522949, 'time': '2021-11-10T01:50:58Z', 'elevation': 240.0, 'speed': 20.0, 'heading': 155, 'distance': 322.166467762254 }, { 'latitude': 24.1474914550781, 'longitude': 120.638229370117, 'time': '2021-11-10T01:53:45Z', 'elevation': 227.0, 'speed': 25.0, 'heading': 181, 'distance': 3856.62892823767 }, { 'latitude': 24.1439952850342, 'longitude': 120.638244628906, 'time': '2021-11-10T01:54:00Z', 'elevation': 204.0, 'speed': 24.0, 'heading': 181, 'distance': 387.240048641487 }, { 'latitude': 24.1071624755859, 'longitude': 120.639434814453, 'time': '2021-11-10T01:56:47Z', 'elevation': 125.0, 'speed': 24.0, 'heading': 173, 'distance': 4081.39690535432 }, { 'latitude': 24.1039257049561, 'longitude': 120.639427185059, 'time': '2021-11-10T01:57:02Z', 'elevation': 105.0, 'speed': 24.0, 'heading': 182, 'distance': 358.504731419278 }, { 'latitude': 24.0681991577148, 'longitude': 120.63695526123, 'time': '2021-11-10T01:59:49Z', 'elevation': 113.0, 'speed': 22.0, 'heading': 188, 'distance': 3965.02830867785 }, { 'latitude': 24.0650863647461, 'longitude': 120.636817932129, 'time': '2021-11-10T02:00:04Z', 'elevation': 112.0, 'speed': 23.0, 'heading': 188, 'distance': 345.053167910773 }, { 'latitude': 24.0304279327393, 'longitude': 120.644325256348, 'time': '2021-11-10T02:02:51Z', 'elevation': 116.0, 'speed': 24.0, 'heading': 146, 'distance': 3913.94124137692 }, { 'latitude': 24.0274124145508, 'longitude': 120.645820617676, 'time': '2021-11-10T02:03:06Z', 'elevation': 116.0, 'speed': 24.0, 'heading': 162, 'distance': 367.006053910677 }, { 'latitude': 23.9936180114746, 'longitude': 120.652770996094, 'time': '2021-11-10T02:05:53Z', 'elevation': 115.0, 'speed': 22.0, 'heading': 176, 'distance': 3809.22773539177 }, { 'latitude': 23.9905529022217, 'longitude': 120.652770996094, 'time': '2021-11-10T02:06:08Z', 'elevation': 114.0, 'speed': 22.0, 'heading': 172, 'distance': 339.485691882211 }, { 'latitude': 23.9582538604736, 'longitude': 120.65714263916, 'time': '2021-11-10T02:08:55Z', 'elevation': 146.0, 'speed': 20.0, 'heading': 157, 'distance': 3604.93253431805 }, { 'latitude': 23.9555625915527, 'longitude': 120.658226013184, 'time': '2021-11-10T02:09:10Z', 'elevation': 151.0, 'speed': 21.0, 'heading': 156, 'distance': 317.821761661191 }, { 'latitude': 23.9274883270264, 'longitude': 120.675415039062, 'time': '2021-11-10T02:11:57Z', 'elevation': 158.0, 'speed': 21.0, 'heading': 155, 'distance': 3567.96548712067 }, { 'latitude': 23.9247589111328, 'longitude': 120.676483154297, 'time': '2021-11-10T02:12:12Z', 'elevation': 164.0, 'speed': 21.0, 'heading': 170, 'distance': 321.266374616175 }, { 'latitude': 23.9010334014893, 'longitude': 120.684989929199, 'time': '2021-11-10T02:14:59Z', 'elevation': 147.0, 'speed': 11.0, 'heading': 340, 'distance': 2766.83679711888 }, { 'latitude': 23.9011707305908, 'longitude': 120.684875488281, 'time': '2021-11-10T02:15:14Z', 'elevation': 136.0, 'speed': 10.0, 'heading': 290, 'distance': 19.1611828461871 }, { 'latitude': 23.9014492034912, 'longitude': 120.685073852539, 'time': '2021-11-10T02:18:01Z', 'elevation': 197.0, 'speed': 0.0, 'heading': 262, 'distance': 36.8685100392185 }, { 'latitude': 23.901575088501, 'longitude': 120.68489074707, 'time': '2021-11-10T02:18:17Z', 'elevation': 118.0, 'speed': 0.0, 'heading': 241, 'distance': 23.2819622588555 }, { 'latitude': 23.9015960693359, 'longitude': 120.685012817383, 'time': '2021-11-10T02:21:03Z', 'elevation': 117.0, 'speed': 0.0, 'heading': 216, 'distance': 12.6456403285481 }, { 'latitude': 23.9015731811523, 'longitude': 120.684959411621, 'time': '2021-11-10T02:21:19Z', 'elevation': 117.0, 'speed': 0.0, 'heading': 316, 'distance': 6.00004124959732 }, { 'latitude': 23.9015674591064, 'longitude': 120.684898376465, 'time': '2021-11-10T02:24:06Z', 'elevation': 116.0, 'speed': 0.0, 'heading': 298, 'distance': 6.24732958613259 }, { 'latitude': 23.9015998840332, 'longitude': 120.684928894043, 'time': '2021-11-10T02:24:21Z', 'elevation': 116.0, 'speed': 0.0, 'heading': 313, 'distance': 4.74912290865108 }, { 'latitude': 23.9015941619873, 'longitude': 120.684844970703, 'time': '2021-11-10T02:27:08Z', 'elevation': 115.0, 'speed': 0.0, 'heading': 283, 'distance': 8.56929652858146 }, { 'latitude': 23.9015693664551, 'longitude': 120.684913635254, 'time': '2021-11-10T02:27:23Z', 'elevation': 116.0, 'speed': 0.0, 'heading': 283, 'distance': 7.51198487620977 }, { 'latitude': 23.9015483856201, 'longitude': 120.68489074707, 'time': '2021-11-10T02:30:10Z', 'elevation': 115.0, 'speed': 0.0, 'heading': 254, 'distance': 3.29118490917148 }, { 'latitude': 23.9015121459961, 'longitude': 120.684875488281, 'time': '2021-11-10T02:30:25Z', 'elevation': 116.0, 'speed': 0.0, 'heading': 278, 'distance': 4.30403150220183 }, { 'latitude': 23.9013404846191, 'longitude': 120.684852600098, 'time': '2021-11-10T02:33:31Z', 'elevation': 116.0, 'speed': 0.0, 'heading': 163, 'distance': 19.1549839358891 }, { 'latitude': 23.8919010162354, 'longitude': 120.688613891602, 'time': '2021-11-10T02:36:18Z', 'elevation': 111.0, 'speed': 17.0, 'heading': 168, 'distance': 1113.43831811009 }, { 'latitude': 23.8901348114014, 'longitude': 120.689376831055, 'time': '2021-11-10T02:36:34Z', 'elevation': 108.0, 'speed': 3.0, 'heading': 153, 'distance': 210.483687677414 }, { 'latitude': 23.8903427124023, 'longitude': 120.689514160156, 'time': '2021-11-10T02:39:21Z', 'elevation': 110.0, 'speed': 0.0, 'heading': 19, 'distance': 26.9407607403921 }, { 'latitude': 23.8902606964111, 'longitude': 120.689613342285, 'time': '2021-11-10T02:39:36Z', 'elevation': 109.0, 'speed': 1.0, 'heading': 26, 'distance': 13.5843907900466 }, { 'latitude': 23.890344619751, 'longitude': 120.689506530762, 'time': '2021-11-10T02:42:23Z', 'elevation': 109.0, 'speed': 0.0, 'heading': 353, 'distance': 14.3079448861033 }, { 'latitude': 23.8903198242188, 'longitude': 120.689567565918, 'time': '2021-11-10T02:42:38Z', 'elevation': 108.0, 'speed': 1.0, 'heading': 111, 'distance': 6.79530389672693 }, { 'latitude': 23.8908615112305, 'longitude': 120.689109802246, 'time': '2021-11-10T06:23:48Z', 'elevation': 70.0, 'speed': 10.0, 'heading': 332, 'distance': 75.9779504750704 }, { 'latitude': 23.9045925140381, 'longitude': 120.681030273438, 'time': '2021-11-10T06:26:35Z', 'elevation': 89.0, 'speed': 17.0, 'heading': 327, 'distance': 1729.09271281058 }, { 'latitude': 23.9062805175781, 'longitude': 120.680076599121, 'time': '2021-11-10T06:26:50Z', 'elevation': 97.0, 'speed': 7.0, 'heading': 346, 'distance': 210.673692604014 }, { 'latitude': 23.9302635192871, 'longitude': 120.66796875, 'time': '2021-11-10T06:32:38Z', 'elevation': 94.0, 'speed': 1.0, 'heading': 351, 'distance': 2928.40970144249 }, { 'latitude': 23.9315090179443, 'longitude': 120.667152404785, 'time': '2021-11-10T06:32:54Z', 'elevation': 109.0, 'speed': 11.0, 'heading': 343, 'distance': 161.048836415778 }, { 'latitude': 23.9498443603516, 'longitude': 120.659141540527, 'time': '2021-11-10T06:35:41Z', 'elevation': 74.0, 'speed': 10.0, 'heading': 305, 'distance': 2188.39492688028 }, { 'latitude': 23.9507369995117, 'longitude': 120.657745361328, 'time': '2021-11-10T06:35:56Z', 'elevation': 71.0, 'speed': 12.0, 'heading': 310, 'distance': 173.124727180433 }, { 'latitude': 23.9696292877197, 'longitude': 120.645202636719, 'time': '2021-11-10T06:38:58Z', 'elevation': 51.0, 'speed': 14.0, 'heading': 348, 'distance': 2451.16559117875 }, { 'latitude': 23.9732322692871, 'longitude': 120.652877807617, 'time': '2021-11-10T06:41:45Z', 'elevation': 43.0, 'speed': 9.0, 'heading': 346, 'distance': 877.165176367768 }, { 'latitude': 23.9756488800049, 'longitude': 120.652030944824, 'time': '2021-11-10T06:42:00Z', 'elevation': 39.0, 'speed': 19.0, 'heading': 1, 'distance': 281.192629508113 }, { 'latitude': 23.9974346160889, 'longitude': 120.645668029785, 'time': '2021-11-10T06:44:47Z', 'elevation': 44.0, 'speed': 19.0, 'heading': 339, 'distance': 2498.31283355712 }, { 'latitude': 24.0002288818359, 'longitude': 120.644645690918, 'time': '2021-11-10T06:45:02Z', 'elevation': 41.0, 'speed': 22.0, 'heading': 340, 'distance': 326.50280616886 }]
];

console.log(test_demo_data.length);

////functions for solo route analysis

///set source data
const demo_singleRoute = test_demo_data[0];
console.log(demo_singleRoute.length);

///draw path in map
let div_smallMap_head = document.getElementById('Map_showPaths');
div_smallMap_head.setAttribute('style', 'width:40%;height:40%;');
// div_smallMap.setAttribute('style', 'width:800px;height:400px;');
div_smallMap_head.style.left = "50%";
div_smallMap_head.style.top = "5%";
div_smallMap_head.style.position = "absolute";
div_smallMap_head.style.zIndex = "1";
let map_handler = L.map('Map_showPaths', { preferCanvas: true }).setView([0, 0], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    // attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map_handler);

showInMap(demo_singleRoute);

function showInMap(path) {

    var path_normalize = [];
    for (var i = 0; i < path.length; i++) {
        var cell = [];
        cell.push(path[i]['latitude']);
        cell.push(path[i]['longitude']);
        path_normalize.push(cell);
    }
    console.log(path_normalize.length);
    for (var i = 0; i < path_normalize.length; i++) {
        if (i == 0) {
            map_handler.setView(path_normalize[Math.floor(path_normalize.length / 2)], 9)
                // map_handler.setView(path_normalize[0], 10)
        }
        drawPath(path_normalize);
    }
    var baseLine = [path_normalize[0], path_normalize[path_normalize.length - 1]];
    console.log(baseLine.length);
    L.polyline(baseLine, { color: 'blue', weight: '1' }).addTo(map_handler);

    function drawPath(pathLine_origin) {
        // let pathName = '{{ pathName|safe }}';
        // let pathLine_origin = '{{ pathLine_origin|safe }}'

        console.log(typeof(pathLine_origin));
        // console.log(pathLine_origin);
        var pathLine_origin_normalized = pathLine_origin;
        // console.log(typeof (pathLine_origin_normalized));
        // console.log(pathLine_origin_normalized);

        var polyline_origin = L.polyline(pathLine_origin_normalized, { color: 'red', weight: '1' }).addTo(map_handler);
        // var polyline_filtered = L.polyline(pathLine_filter_normalized, { color: 'yellow' }).addTo(map_handler);
        // var polygon = L.polygon(pathPolygon_normalized).addTo(map_handler);

    }
}

//draw a point in map
let soloRoute_routeAccuracy_realTime_movingPoint = L.circle([0, 0], { radius: 1600 }).addTo(map_handler);;

function showInMap_movepoint(point) {
    soloRoute_routeAccuracy_realTime_movingPoint.setLatLng(L.latLng(point[0], point[1]));
    map_handler.setView(point);
}

func_createTable_soloRoute_summary();

function func_createTable_soloRoute_summary() {
<<<<<<< HEAD
    //get summarys:total distance,routeEffciency,speed/min,elevation/mean
    var totalDistance = 0; // km
    var elevation_mean = 0;
    var speed = 0;
    for (var i = 0; i < demo_singleRoute.length; i++) {
        totalDistance += demo_singleRoute[i]['distance'] / 1000;
        elevation_mean += demo_singleRoute[i]['elevation'];
        speed += demo_singleRoute[i]['speed'] * 60 / 1000;
    }
    elevation_mean = elevation_mean / demo_singleRoute.length;

    var routeEffciency;
    var startPoint = turf.point([demo_singleRoute[0]['latitude'], demo_singleRoute[0]['longitude']]);
    var endPoint = turf.point([demo_singleRoute[demo_singleRoute.length - 1]['latitude'], demo_singleRoute[demo_singleRoute.length - 1]['longitude']]);
    var beeLineDistance = turf.distance(startPoint, endPoint, { units: 'kilometers' });
    routeEffciency = beeLineDistance / totalDistance;


    var date_start = new Date(demo_singleRoute[0]['time']);
    var date_end = new Date(demo_singleRoute[demo_singleRoute.length - 1]['time']);
    var time_total = date_end.getTime() - date_start.getTime();
    console.log(date_start, date_end, time_total);
    var total_hour = (time_total / 1000) / 3600;
    var speed_mean = speed / total_hour;


    var tbl = document.createElement('table');
    tbl.style.width = '40%';
    tbl.style.border = '1px solid black';
    tbl.style.left = "5%";
    tbl.style.top = "5%";
    tbl.style.position = "absolute";
    tbl.setAttribute("border", "2");
    document.body.appendChild(tbl);

    var data_table = [{ 'distance/km': totalDistance }, { 'route effciency': routeEffciency }, { 'mean speed': speed_mean }, { 'mean elevation': elevation_mean }];


    // Creating and adding data to first row of the table
    // 總距離，路徑效率，平均速度，平均海拔
    function func_init_table_result_head() {
        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "總距離(km)";
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = "路徑效率";
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = "平均速度(km/h)";
        let heading_4 = document.createElement('th');
        heading_4.innerHTML = "平均海拔(m)";

        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        row_1.appendChild(heading_3);
        row_1.appendChild(heading_4);
        tbl.appendChild(row_1);
    }
    func_init_table_result_head();

    function func_table_result_addData(distance, routeEff, speed_mean, elevation_mean) {
        var row = document.createElement('tr');
        var row_data_1 = document.createElement('td');
        row_data_1.innerHTML = distance.toString();
        row_data_1.style.textAlign = "center";
        var row_data_2 = document.createElement('td');
        row_data_2.innerHTML = routeEff.toString();
        row_data_2.style.textAlign = "center";
        var row_data_3 = document.createElement('td');
        row_data_3.innerHTML = speed_mean.toString();
        row_data_3.style.textAlign = "center";
        var row_data_4 = document.createElement('td');
        row_data_4.innerHTML = elevation_mean.toString();
        row_data_4.style.textAlign = "center";

        row.appendChild(row_data_1);
        row.appendChild(row_data_2);
        row.appendChild(row_data_3);
        row.appendChild(row_data_4);
        tbl.appendChild(row);
    }
    func_table_result_addData(totalDistance.toFixed(2), routeEffciency.toFixed(3), speed_mean.toFixed(2), elevation_mean.toFixed(2));
=======
  //get summarys:total distance,routeEffciency,speed/min,elevation/mean
  var totalDistance = 0; // km
  var elevation_mean = 0;
  var speed = 0;
  for (var i = 0; i < demo_singleRoute.length; i++) {
    totalDistance += demo_singleRoute[i]['distance'] / 1000;
    elevation_mean += demo_singleRoute[i]['elevation'];
    speed += demo_singleRoute[i]['speed'] * 60 / 1000;
  }
  elevation_mean = elevation_mean / demo_singleRoute.length;

  var routeEffciency;
  var startPoint = turf.point([demo_singleRoute[0]['latitude'], demo_singleRoute[0]['longitude']]);
  var endPoint = turf.point([demo_singleRoute[demo_singleRoute.length - 1]['latitude'], demo_singleRoute[demo_singleRoute.length - 1]['longitude']]);
  var beeLineDistance = turf.distance(startPoint, endPoint, { units: 'kilometers' });
  routeEffciency = beeLineDistance / totalDistance;


  var date_start = new Date(demo_singleRoute[0]['time']);
  var date_end = new Date(demo_singleRoute[demo_singleRoute.length - 1]['time']);
  var time_total = date_end.getTime() - date_start.getTime();
  console.log(date_start, date_end, time_total);
  var total_hour = (time_total / 1000) / 3600;
  var speed_mean = speed / total_hour;


  var tbl = document.createElement('table');
  tbl.style.width = '40%';
  tbl.style.border = '1px solid black';
  tbl.style.left = "5%";
  tbl.style.top = "5%";
  tbl.style.position = "absolute";
  tbl.setAttribute("border", "2");
  document.body.appendChild(tbl);

  var data_table = [{ 'distance/km': totalDistance }, { 'route effciency': routeEffciency }, { 'mean speed': speed_mean }, { 'mean elevation': elevation_mean }];


  // Creating and adding data to first row of the table
  // 總距離，路徑效率，平均速度，平均海拔
  function func_init_table_result_head() {
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "實際飛行距離(km)";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "實際飛行時間(h)";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "平均速度(km/h)";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "平均海拔(m)";
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "路徑效率";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    tbl.appendChild(row_1);
  }
  func_init_table_result_head();

  function func_table_result_addData(distance, total_time, speed_mean, elevation_mean, routeEff) {
    var row = document.createElement('tr');
    var row_data_1 = document.createElement('td');
    row_data_1.innerHTML = distance.toString();
    row_data_1.style.textAlign = "center";
    var row_data_2 = document.createElement('td');
    row_data_2.innerHTML = total_time.toString();
    row_data_2.style.textAlign = "center";
    var row_data_3 = document.createElement('td');
    row_data_3.innerHTML = speed_mean.toString();
    row_data_3.style.textAlign = "center";
    var row_data_4 = document.createElement('td');
    row_data_4.innerHTML = elevation_mean.toString();
    row_data_4.style.textAlign = "center";
    var row_data_5 = document.createElement('td');
    row_data_5.innerHTML = routeEff.toString();
    row_data_5.style.textAlign = "center";

    row.appendChild(row_data_1);
    row.appendChild(row_data_2);
    row.appendChild(row_data_3);
    row.appendChild(row_data_4);
    row.appendChild(row_data_5);
    tbl.appendChild(row);
  }
  func_table_result_addData(totalDistance.toFixed(2), total_hour.toFixed(2), speed_mean.toFixed(2), elevation_mean.toFixed(2), routeEffciency.toFixed(3));
>>>>>>> 2112186da9c918834af115fb11f7011b68369c17

}

let label_routeEffciency_realTime = null;
func_label_routeEffciency_realTime();
//draw a label for route accuracy
function func_label_routeEffciency_realTime() {
<<<<<<< HEAD
    const newLabel = document.createElement("label");
    newLabel.style.width = '100%';
    newLabel.style.height = '5%';
    newLabel.style.left = "0%";
    newLabel.style.top = "45%";
    newLabel.style.backgroundColor = "rgba(106,90,205,0.5)";
    newLabel.style.position = "absolute";
    newLabel.style.zIndex = "1";
    newLabel.innerHTML = "即時路徑效率";
    newLabel.style.textAlign = "left";
    // newLabel.style.fontSize = '150%';

    document.body.appendChild(newLabel);
=======
  var newLabel = document.createElement("label");
  label_routeEffciency_realTime = newLabel;
  newLabel.style.width = '100%';
  newLabel.style.height = '48px';
  newLabel.style.left = "0%";
  newLabel.style.top = '50%';
  newLabel.style.backgroundColor = "rgba(106,90,205,0.5)";
  newLabel.style.position = "absolute";
  newLabel.style.zIndex = "1";
  newLabel.innerHTML = "即時路徑偏移量";
  newLabel.style.textAlign = "left";
  newLabel.style.fontSize = '36px';

  document.body.appendChild(newLabel);

  var dialog = document.getElementById('dialog_routeEfficiency_realtime');
  newLabel.addEventListener('click', () => {
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      alert("Sorry, the <dialog> API is not supported by this browser.");
    }
  });
>>>>>>> 2112186da9c918834af115fb11f7011b68369c17
}


func_solo_route_routeAccuracy_byDistanceToBaseLine();
///functions for solo route's solo figure analysis
<<<<<<< HEAD
// 即時路徑效率圖：
// 做法1：切線距離/實際距離
// 計算切線距離的方法：使用勾股定理：投影距離 = square root（square（實際距離）- square（點到線的距離））；
// step1：計算當前點與起始點的直線距離；
// step2：計算當前點到baseline的距離；
// step3：投影距離 = square root（square（實際距離）- square（點到線的距離））；
// 計算當前路徑效率：
// step4：計算實際距離；
// step5：當前的路徑效率 = 投影距離/實際距離；

// 即時路徑效率 = D起點到終點/（D已飛行+D當前點到終點）；
// 做法1-3：即時路徑效率 = D當前點到終點/（D全部距離-D已飛行）；
function func_solo_route_routeAccuracy_byProjectionDistance() {
    var data_normalized = []

    for (var i = 0; i < demo_singleRoute.length; i++) {
        data_normalized.push([demo_singleRoute[i]['latitude'], demo_singleRoute[i]['longitude']]);
    }

    if (data_normalized.length < 1) {
        console.log("no data");
        //todo: raise a warning;
        return;
    }
    // var startPoint = data_normalized[0];
    // var endPoint = data_normalized[data_normalized.length - 1];
    // var make_baseline = turf.lineString([startPoint, endPoint]);
    // var routeEff_list = [];
    // var total_distance = 0;
    // for (var i = 0; i < data_normalized.length; i++) {
    //     var pt = turf.point(data_normalized[i]);
    //     //distance to start point
    //     var distance_toStartPoint = turf.distance(startPoint, pt, { units: 'kilometers' });
    //     //distance to line 
    //     var distance_toMakebaseline = turf.pointToLineDistance(pt, make_baseline, { units: 'kilometers' });
    //     //distance of line 
    //     var distance_atMakebaseline = Math.sqrt(Math.pow(distance_toStartPoint, 2) - Math.pow(distance_toMakebaseline, 2));
    //     //actual distance 
    //     total_distance += (demo_singleRoute[i]['distance'] / 1000);
    //     //cur route efficiency
    //     var cur_routeEff = distance_atMakebaseline / total_distance;

    //     // console.log(distance_toStartPoint,distance_toMakebaseline,distance_atMakebaseline,total_distance);

    //     routeEff_list.push(cur_routeEff);
    // }
    var startPoint = turf.point(data_normalized[0]);
    var endPoint = turf.point(data_normalized[data_normalized.length - 1]);
    // var make_baseline = turf.lineString([startPoint, endPoint]);
    var baseLine_lenth = turf.distance(startPoint, endPoint, { units: 'kilometers' });
    var routeEff_list_realtime = [];
    var total_distance = 0;
    for (var i = 0; i < data_normalized.length; i++) {
        var pt = turf.point(data_normalized[i]);
        //distance to end point
        var distance_toEndPoint = turf.distance(pt, endPoint, { units: 'kilometers' });
        //actual distance 
        total_distance += (demo_singleRoute[i]['distance'] / 1000);
        //cur route efficiency
        var cur_routeEff = baseLine_lenth / (total_distance + distance_toEndPoint);

        // console.log(distance_toStartPoint,distance_toMakebaseline,distance_atMakebaseline,total_distance);

        routeEff_list_realtime.push(cur_routeEff.toFixed(3));
    }

    var routeEff_list_realtime_1_3 = [];
    total_distance = 0;
    var wholeDistance = 0;
    for (var i = 0; i < demo_singleRoute.length; i++) {
        wholeDistance += (demo_singleRoute[i]['distance'] / 1000);
    }
    console.log(wholeDistance);

    for (var i = 0; i < data_normalized.length; i++) {
        var pt = turf.point(data_normalized[i]);
        //distance to end point
        var distance_toEndPoint = turf.distance(pt, endPoint, { units: 'kilometers' });
        //actual distance 
        total_distance += (demo_singleRoute[i]['distance'] / 1000);
        //cur route efficiency
        if (wholeDistance - total_distance == 0) {
            routeEff_list_realtime_1_3.push(routeEff_list_realtime_1_3[routeEff_list_realtime_1_3.length - 1]);
            continue;
        }
        var cur_routeEff = distance_toEndPoint / (wholeDistance - total_distance);

        // console.log(distance_toStartPoint,distance_toMakebaseline,distance_atMakebaseline,total_distance);
        console.log(distance_toEndPoint, total_distance, wholeDistance, cur_routeEff);
        routeEff_list_realtime_1_3.push(cur_routeEff.toFixed(3));
    }

    var routeEff_list_realtime_1_4 = [];
    var last_point = turf.point(data_normalized[0]);
    for (var i = 1; i < data_normalized.length; i++) {
        var pt = turf.point(data_normalized[i]);
        //distance from last point 
        // var distance_fromLastPoint =  turf.distance(last_point, pt, { units: 'kilometers' })
        //distance to end point
        var distance_toEndPoint = turf.distance(pt, endPoint, { units: 'kilometers' });
        //last point to end point
        var distance_lastPointToEndPoint = turf.distance(last_point, endPoint, { units: 'kilometers' });
        //actual distance 
        var section_distance = (demo_singleRoute[i]['distance'] / 1000);
        //normalize
        if (((section_distance == 0) || (distance_toEndPoint == 0))) {
            routeEff_list_realtime_1_4.push(routeEff_list_realtime_1_4[routeEff_list_realtime_1_4.length - 1]);
        }
        //cur route efficiency
        var cur_routeEff = distance_lastPointToEndPoint / (section_distance + distance_toEndPoint);

        // console.log(distance_toStartPoint,distance_toMakebaseline,distance_atMakebaseline,total_distance);
        console.log(distance_lastPointToEndPoint, section_distance, distance_toEndPoint);
        routeEff_list_realtime_1_4.push(cur_routeEff.toFixed(3));
        //reset last point 
        last_point = pt;
    }

    var routeEff_list_realtime_1_5 = [];
    var start_point = turf.point(data_normalized[0]);
    var beeLineDistance = turf.distance(start_point, endPoint, { units: 'kilometers' });
    for (var i = 0; i < data_normalized.length; i++) {
        var pt = turf.point(data_normalized[i]);
        //distance from last point 
        // var distance_fromLastPoint =  turf.distance(last_point, pt, { units: 'kilometers' })
        //distance to end point
        var distance_toEndPoint = turf.distance(pt, endPoint, { units: 'kilometers' });
        //last point to end point
        var distance_ToStart_point = turf.distance(start_point, pt, { units: 'kilometers' });
        //cur route efficiency
        var cur_routeEff = beeLineDistance / (distance_ToStart_point + distance_toEndPoint);

        // console.log(distance_toStartPoint,distance_toMakebaseline,distance_atMakebaseline,total_distance);
        // console.log(distance_lastPointToEndPoint, section_distance, distance_toEndPoint);
        routeEff_list_realtime_1_5.push(cur_routeEff.toFixed(3));
        //reset last point 
        // last_point = pt;
    }


    //draw in plot
    func_draw_line();

    function func_draw_line() {
        //set chart
        var canvas_soloRoute_routeEff_realtime_line = document.createElement('div');
        canvas_soloRoute_routeEff_realtime_line.style.width = '50%';
        canvas_soloRoute_routeEff_realtime_line.style.height = '50%';
        canvas_soloRoute_routeEff_realtime_line.setAttribute("id", "canvas_soloRoute_routeEff_realtime_line");
        canvas_soloRoute_routeEff_realtime_line.style.left = "30%";
        // console.log((250+(i-1)*50).toString(10));
        canvas_soloRoute_routeEff_realtime_line.style.top = "50%";
        canvas_soloRoute_routeEff_realtime_line.style.position = "absolute";
        document.body.appendChild(canvas_soloRoute_routeEff_realtime_line);

        //set options
        var options = {
            series: [
                // {
                //   name: "即時路徑效率1-2",
                //   data: routeEff_list_realtime
                // }, 
                {
                    name: "即時路徑效率1-3",
                    data: routeEff_list_realtime_1_3
                },
                // {
                //   name: "即時路徑效率1-4",
                //   data: routeEff_list_realtime_1_4
                // }
                // {
                //   name: "即時路徑效率1-5",
                //   data: routeEff_list_realtime_1_5
                // }
            ],
            chart: {
                // height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
                events: {
                    mouseMove: function(event, chartContext, config) {
                        // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts.
                        // console.log(config['dataPointIndex']);
                        // console.log(test_set_bearing_from_lastPoint[config['dataPointIndex']],
                        //     test_set_bearing_to_endPoint[config['dataPointIndex']],
                        //     test_set_includedAngle[config['dataPointIndex']],
                        //     test_set_cosine_radian[config['dataPointIndex']],
                        //     test_set_di[config['dataPointIndex']],
                        //     test_set_distance_flown[config['dataPointIndex']]
                        // );
                        try {
                            showInMap_movepoint(data_normalized[config['dataPointIndex']]);
                        } catch (e) {
                            console.log(e); // Error: hi
                        }
                    }
                },
                toolbar: {
                    show: false
                },
            },
            colors: ['#77B6EA', '#545454', '#7CFC00'],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            title: {
                text: '即時路徑效率',
                align: 'middle'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            // xaxis: {
            //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            // }
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
            }
        };
=======
//即時路徑偏移量 : 偏離距離=D點到直線；
function func_solo_route_routeAccuracy_byDistanceToBaseLine() {
  var data_normalized = []

  for (var i = 0; i < demo_singleRoute.length; i++) {
    data_normalized.push([demo_singleRoute[i]['latitude'], demo_singleRoute[i]['longitude']]);
  }

  if (data_normalized.length < 1) {
    console.log("no data");
    //todo: raise a warning;
    return;
  }
  var startPoint = turf.point(data_normalized[0]);
  var endPoint = turf.point(data_normalized[data_normalized.length - 1]);
  // var make_baseline = turf.lineString([startPoint, endPoint]);
  var baseLine_lenth = turf.distance(startPoint, endPoint, { units: 'kilometers' });
  var baseLine = turf.lineString([data_normalized[0], data_normalized[data_normalized.length - 1]]);
  var routeEff_list_realtime = [];
  var total_distance = 0;
  for (var i = 0; i < data_normalized.length; i++) {
    var pt = turf.point(data_normalized[i]);
    //distance to baseline
    var distanceToLine = turf.pointToLineDistance(pt, baseLine, { units: 'kilometers' });
    console.log(distanceToLine);
    routeEff_list_realtime.push(distanceToLine.toFixed(3));
  }

  var routeEff_list_realtime_1_3 = [];
  total_distance = 0;
  var wholeDistance = 0;
  for (var i = 0; i < demo_singleRoute.length; i++) {
    wholeDistance += (demo_singleRoute[i]['distance'] / 1000);
  }
  console.log(wholeDistance);

  for (var i = 0; i < data_normalized.length; i++) {
    var pt = turf.point(data_normalized[i]);
    //distance to end point
    var distance_toEndPoint = turf.distance(pt, endPoint, { units: 'kilometers' });
    //actual distance 
    total_distance += (demo_singleRoute[i]['distance'] / 1000);
    //cur route efficiency
    if (wholeDistance - total_distance == 0) {
      routeEff_list_realtime_1_3.push(routeEff_list_realtime_1_3[routeEff_list_realtime_1_3.length - 1]);
      continue;
    }
    var cur_routeEff = distance_toEndPoint / (wholeDistance - total_distance);

    // console.log(distance_toStartPoint,distance_toMakebaseline,distance_atMakebaseline,total_distance);
    // console.log(distance_toEndPoint, total_distance, wholeDistance, cur_routeEff);
    routeEff_list_realtime_1_3.push(cur_routeEff.toFixed(3));
  }

  var routeEff_list_realtime_1_4 = [];
  var last_point = turf.point(data_normalized[0]);
  for (var i = 1; i < data_normalized.length; i++) {
    var pt = turf.point(data_normalized[i]);
    //distance from last point 
    // var distance_fromLastPoint =  turf.distance(last_point, pt, { units: 'kilometers' })
    //distance to end point
    var distance_toEndPoint = turf.distance(pt, endPoint, { units: 'kilometers' });
    //last point to end point
    var distance_lastPointToEndPoint = turf.distance(last_point, endPoint, { units: 'kilometers' });
    //actual distance 
    var section_distance = (demo_singleRoute[i]['distance'] / 1000);
    //normalize
    if (((section_distance == 0) || (distance_toEndPoint == 0))) {
      routeEff_list_realtime_1_4.push(routeEff_list_realtime_1_4[routeEff_list_realtime_1_4.length - 1]);
    }
    //cur route efficiency
    var cur_routeEff = distance_lastPointToEndPoint / (section_distance + distance_toEndPoint);

    // console.log(distance_toStartPoint,distance_toMakebaseline,distance_atMakebaseline,total_distance);
    // console.log(distance_lastPointToEndPoint, section_distance, distance_toEndPoint);
    routeEff_list_realtime_1_4.push(cur_routeEff.toFixed(3));
    //reset last point 
    last_point = pt;
  }

  var routeEff_list_realtime_1_5 = [];
  var start_point = turf.point(data_normalized[0]);
  var beeLineDistance = turf.distance(start_point, endPoint, { units: 'kilometers' });
  for (var i = 0; i < data_normalized.length; i++) {
    var pt = turf.point(data_normalized[i]);
    //distance from last point 
    // var distance_fromLastPoint =  turf.distance(last_point, pt, { units: 'kilometers' })
    //distance to end point
    var distance_toEndPoint = turf.distance(pt, endPoint, { units: 'kilometers' });
    //last point to end point
    var distance_ToStart_point = turf.distance(start_point, pt, { units: 'kilometers' });
    //cur route efficiency
    var cur_routeEff = beeLineDistance / (distance_ToStart_point + distance_toEndPoint);

    // console.log(distance_toStartPoint,distance_toMakebaseline,distance_atMakebaseline,total_distance);
    // console.log(distance_lastPointToEndPoint, section_distance, distance_toEndPoint);
    routeEff_list_realtime_1_5.push(cur_routeEff.toFixed(3));
    //reset last point 
    // last_point = pt;
  }

  //draw labels
  function drawLabels() {
    //draw average elevation
    console.log(routeEff_list_realtime);
    var sum_routeEff = 0;
    for (var i = 0; i < routeEff_list_realtime.length; i++) {
      sum_routeEff += parseFloat(routeEff_list_realtime[i]);
    }
    console.log(sum_routeEff);
    var average_routeEff = sum_routeEff / routeEff_list_realtime.length;
    console.log(average_routeEff);
    var btn_average_routeEff = document.createElement("button");
    btn_average_routeEff.innerHTML = average_routeEff.toFixed(3).toString() + "<br>" + "Average" + "</br>";
    btn_average_routeEff.style.width = '8%';
    btn_average_routeEff.style.height = '8%';
    btn_average_routeEff.style.background = 'transparent';
    btn_average_routeEff.style.border = 'transparent';
    btn_average_routeEff.style.color = 'black';
    btn_average_routeEff.setAttribute("id", "btn_average_routeEff");
    btn_average_routeEff.style.left = "0%";
    btn_average_routeEff.style.top = "70%";
    btn_average_routeEff.style.position = "absolute";
    document.body.appendChild(btn_average_routeEff);

    //draw quartile routeEff
    var normalized_routeEff_realtime = [];
    for (var i = 0; i < routeEff_list_realtime.length; i++) {
      normalized_routeEff_realtime.push(parseFloat(routeEff_list_realtime[i]));
    }
    var sorted_routeEff = normalized_routeEff_realtime.sort(function (a, b) { return a - b });
    console.log(sorted_routeEff);
    var index = Math.floor(sorted_routeEff.length / 4);
    var btn_quartile_routeEff_1 = document.createElement("button");
    btn_quartile_routeEff_1.innerHTML = sorted_routeEff[index].toFixed(3).toString() + "<br>" + "25% Quartile" + "</br>";
    btn_quartile_routeEff_1.style.width = '8%';
    btn_quartile_routeEff_1.style.height = '8%';
    btn_quartile_routeEff_1.style.background = 'transparent';
    btn_quartile_routeEff_1.style.border = 'transparent';
    btn_quartile_routeEff_1.style.color = 'black';
    btn_quartile_routeEff_1.setAttribute("id", "btn_quartile_routeEff_1");
    btn_quartile_routeEff_1.style.left = "0%";
    btn_quartile_routeEff_1.style.top = "80%";
    btn_quartile_routeEff_1.style.position = "absolute";
    document.body.appendChild(btn_quartile_routeEff_1);

    index = Math.floor(sorted_routeEff.length / 2);
    var btn_quartile_routeEff_2 = document.createElement("button");
    btn_quartile_routeEff_2.innerHTML = sorted_routeEff[index].toFixed(3).toString() + "<br>" + "50% Quartile" + "</br>";
    btn_quartile_routeEff_2.style.width = '8%';
    btn_quartile_routeEff_2.style.height = '8%';
    btn_quartile_routeEff_2.style.background = 'transparent';
    btn_quartile_routeEff_2.style.border = 'transparent';
    btn_quartile_routeEff_2.style.color = 'black';
    btn_quartile_routeEff_2.setAttribute("id", "btn_quartile_routeEff_2");
    btn_quartile_routeEff_2.style.left = "8%";
    btn_quartile_routeEff_2.style.top = "80%";
    btn_quartile_routeEff_2.style.position = "absolute";
    document.body.appendChild(btn_quartile_routeEff_2);

    index = Math.floor((sorted_routeEff.length * 3) / 4);
    var btn_quartile_routeEff_3 = document.createElement("button");
    btn_quartile_routeEff_3.innerHTML = sorted_routeEff[index].toFixed(3).toString() + "<br>" + "75% Quartile" + "</br>";
    btn_quartile_routeEff_3.style.width = '8%';
    btn_quartile_routeEff_3.style.height = '8%';
    btn_quartile_routeEff_3.style.background = 'transparent';
    btn_quartile_routeEff_3.style.border = 'transparent';
    btn_quartile_routeEff_3.style.color = 'black';
    btn_quartile_routeEff_3.setAttribute("id", "btn_quartile_routeEff_3");
    btn_quartile_routeEff_3.style.left = "16%";
    btn_quartile_routeEff_3.style.top = "80%";
    btn_quartile_routeEff_3.style.position = "absolute";
    document.body.appendChild(btn_quartile_routeEff_3);

  }
  drawLabels();

  //draw in plot
  func_draw_line();

  function func_draw_line() {
    //set chart
    var canvas_soloRoute_routeEff_realtime_line = document.createElement('div');
    canvas_soloRoute_routeEff_realtime_line.style.width = '50%';
    canvas_soloRoute_routeEff_realtime_line.style.height = '40%';
    canvas_soloRoute_routeEff_realtime_line.setAttribute("id", "canvas_soloRoute_routeEff_realtime_line");
    canvas_soloRoute_routeEff_realtime_line.style.left = "30%";
    // console.log((250+(i-1)*50).toString(10));
    canvas_soloRoute_routeEff_realtime_line.style.top = "60%";
    canvas_soloRoute_routeEff_realtime_line.style.position = "absolute";
    document.body.appendChild(canvas_soloRoute_routeEff_realtime_line);

    //set options
    var options = {
      series: [
        {
          name: "即時路徑偏移量",
          data: routeEff_list_realtime
        },
      ],
      chart: {
        // height: 350,
        type: 'line',
        zoom: {
          enabled: false
        },
        events: {
          mouseMove: function (event, chartContext, config) {
            // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts.
            // console.log(config['dataPointIndex']);
            // console.log(test_set_bearing_from_lastPoint[config['dataPointIndex']],
            //     test_set_bearing_to_endPoint[config['dataPointIndex']],
            //     test_set_includedAngle[config['dataPointIndex']],
            //     test_set_cosine_radian[config['dataPointIndex']],
            //     test_set_di[config['dataPointIndex']],
            //     test_set_distance_flown[config['dataPointIndex']]
            // );
            try {
              showInMap_movepoint(data_normalized[config['dataPointIndex']]);
            } catch (e) {
              console.log(e); // Error: hi
            }
          }
        },
        toolbar: {
          show: false
        },
      },
      colors: ['#77B6EA', '#545454', '#7CFC00'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: '即時路徑偏移量(km)',
        align: 'middle'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      // xaxis: {
      //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      // }
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };
>>>>>>> 2112186da9c918834af115fb11f7011b68369c17

        var chart = new ApexCharts(canvas_soloRoute_routeEff_realtime_line, options);
        chart.render();
    }
}

// func_solo_route_routeAccuracy();

// 算法：
// step1：計算θ：根據（上一次的點，當前點）計算飛行方向的bearing和（當前點，終點）的bearing計算θ；
// step2：計算cosine（θ），計算d*cosine(θ); 
// step3：計算實際的距離sum（D），並計算最終結果；
// step4：按照point的個數，進行循環計算。

// 2-1:公式中的D參數都不要，直接使用n
function func_solo_route_routeAccuracy() {
    var data_normalized = []

    for (var i = 0; i < demo_singleRoute.length; i++) {
        data_normalized.push([demo_singleRoute[i]['latitude'], demo_singleRoute[i]['longitude']]);
    }

    if (data_normalized.length < 1) {
        console.log("no data");
        //todo: raise a warning;
        return;
    }
    // var startPoint = data_normalized[0];
    var endPoint = turf.point(data_normalized[data_normalized.length - 1]);
    // var make_baseline = turf.lineString([startPoint, endPoint]);
    var routeAccuracy_list = [];
    var total_distance = 0;
    var sum_accuracy_distance = 0;
    var count_point_good = 0; //if distance =0 ,then kick out this point 
    var last_point = turf.point(data_normalized[0]);
    var test_set_bearing_from_lastPoint = [];
    var test_set_bearing_to_endPoint = [];
    var test_set_includedAngle = [];
    var test_set_cosine_radian = [];
    var test_set_di = [];
    var test_set_distance_flown = [];

    for (var i = 0; i < data_normalized.length; i++) {
        var pt = turf.point(data_normalized[i]);
        var bearing_from_lastPoint = turf.bearing(last_point, pt);
        var bearing_to_endPoint = turf.bearing(pt, endPoint);
        //reset last point
        last_point = pt;
        //calculate included angle
        var includedAngle = bearing_to_endPoint - bearing_from_lastPoint;
        //normalize angle to (0~180)
        // var normalized_includedAngle = includedAngle+360;
        //convert bearing to angle of degree
        var normalized_includedAngle_degree = turf.bearingToAzimuth(includedAngle);
        //convert degree to Radian
        var normalized_includedAngle_Radian = turf.degreesToRadians(normalized_includedAngle_degree);
        //calculate cosine of angle
        var cosine_radian = Math.cos(normalized_includedAngle_Radian);

        // console.log(bearing_from_lastPoint, bearing_from_lastPoint, includedAngle, normalized_includedAngle_degree, normalized_includedAngle_Radian, cosine_radian);
        //distance of point 
        if (demo_singleRoute[i]['distance'] == 0) {
            continue;
        }
        count_point_good++;
        var distance_point = demo_singleRoute[i]['distance'];
        //sum accuracy distance 
        sum_accuracy_distance += distance_point * cosine_radian;
        //actual distance 
        total_distance += (demo_singleRoute[i]['distance']);

        // console.log(sum_accuracy_distance, total_distance);
        //cur route accuracy
        var cur_routeAccuracy = sum_accuracy_distance / total_distance;

        // console.log(distance_toStartPoint,distance_toMakebaseline,distance_atMakebaseline,total_distance);

        // routeAccuracy_list.push(cur_routeAccuracy.toFixed(3));
        routeAccuracy_list.push(cur_routeAccuracy.toFixed(3));
        test_set_bearing_from_lastPoint.push(bearing_from_lastPoint);
        test_set_bearing_to_endPoint.push(bearing_to_endPoint);
        test_set_includedAngle.push(includedAngle);
        test_set_cosine_radian.push(cosine_radian);
        test_set_di.push(sum_accuracy_distance);
        test_set_distance_flown.push(total_distance);
    }

    //2-1
    var route_accuracy_list_2_1 = [];
    var sun_accuracy_list_2_1 = 0;
    last_point = turf.point(data_normalized[0]);
    for (var i = 1; i < data_normalized.length; i++) {
        var pt = turf.point(data_normalized[i]);
        var bearing_from_lastPoint = turf.bearing(last_point, pt);
        var bearing_to_endPoint = turf.bearing(pt, endPoint);
        //reset last point
        last_point = pt;
        //calculate included angle
        var includedAngle = bearing_to_endPoint - bearing_from_lastPoint;
        //normalize angle to (0~180)
        // var normalized_includedAngle = includedAngle+360;
        //convert bearing to angle of degree
        var normalized_includedAngle_degree = turf.bearingToAzimuth(includedAngle);
        //convert degree to Radian
        var normalized_includedAngle_Radian = turf.degreesToRadians(normalized_includedAngle_degree);
        //calculate cosine of angle
        var cosine_radian = Math.cos(normalized_includedAngle_Radian);

        // console.log(bearing_from_lastPoint, bearing_from_lastPoint, includedAngle, normalized_includedAngle_degree, normalized_includedAngle_Radian, cosine_radian);
        //distance of point 

        //sum accuracy distance 
        sun_accuracy_list_2_1 += cosine_radian;
        // console.log(sum_accuracy_distance, total_distance);
        //cur route accuracy
        var cur_routeAccuracy = sun_accuracy_list_2_1 / (route_accuracy_list_2_1.length + 1);
        // console.log(distance_toStartPoint,distance_toMakebaseline,distance_atMakebaseline,total_distance);
        // routeAccuracy_list.push(cur_routeAccuracy.toFixed(3));
        route_accuracy_list_2_1.push(cur_routeAccuracy.toFixed(3));
    }
    console.log(route_accuracy_list_2_1);

    //2-2
    var route_accuracy_list_2_2 = [];
    var sum_accuracy_list_2_2 = 0;
    var start_point = turf.point(data_normalized[0]);
    for (var i = 0; i < data_normalized.length; i++) {
        var pt = turf.point(data_normalized[i]);
        var bearing_from_headPoint = turf.bearing(start_point, pt);
        // var heading = demo_singleRoute[i]['heading'];
        var bearing_to_endPoint = turf.bearing(pt, endPoint);
        //calculate included angle
        var includedAngle = bearing_from_headPoint - bearing_to_endPoint;
        //normalize angle to (0~180)
        // var normalized_includedAngle = includedAngle+360;
        //convert bearing to angle of degree
        var normalized_includedAngle_degree = turf.bearingToAzimuth(includedAngle);
        //convert degree to Radian
        var normalized_includedAngle_Radian = turf.degreesToRadians(normalized_includedAngle_degree);
        //calculate cosine of angle
        var cosine_radian = Math.cos(normalized_includedAngle_Radian);

        // console.log(bearing_from_lastPoint, bearing_from_lastPoint, includedAngle, normalized_includedAngle_degree, normalized_includedAngle_Radian, cosine_radian);
        //sum accuracy distance 
        sum_accuracy_list_2_2 += cosine_radian;
        // console.log(sum_accuracy_distance, total_distance);
        //cur route accuracy
        var cur_routeAccuracy = sum_accuracy_list_2_2 / (route_accuracy_list_2_2.length + 1);

        // console.log(distance_toStartPoint,distance_toMakebaseline,distance_atMakebaseline,total_distance);

        // routeAccuracy_list.push(cur_routeAccuracy.toFixed(3));
        route_accuracy_list_2_2.push(cur_routeAccuracy.toFixed(3));
    }
    console.log(route_accuracy_list_2_2);
    //2-3
    var routeAccuracy_list_2_3 = [];
    sum_accuracy_distance = 0;
    var wholeDistance = 0;
    for (var i = 0; i < demo_singleRoute.length; i++) {
        wholeDistance += demo_singleRoute[i]['distance'];
    }
    // console.log(wholeDistance);
    last_point = data_normalized[0];
    for (var i = 0; i < data_normalized.length; i++) {
        var pt = turf.point(data_normalized[i]);
        var bearing_from_lastPoint = turf.bearing(last_point, pt);
        var bearing_to_endPoint = turf.bearing(pt, endPoint);
        //reset last point
        last_point = pt;
        //calculate included angle
        var includedAngle = bearing_to_endPoint - bearing_from_lastPoint;
        //normalize angle to (0~180)
        // var normalized_includedAngle = includedAngle+360;
        //convert bearing to angle of degree
        var normalized_includedAngle_degree = turf.bearingToAzimuth(includedAngle);
        //convert degree to Radian
        var normalized_includedAngle_Radian = turf.degreesToRadians(normalized_includedAngle_degree);
        //calculate cosine of angle
        var cosine_radian = Math.cos(normalized_includedAngle_Radian);

        // console.log(bearing_from_lastPoint, bearing_from_lastPoint, includedAngle, normalized_includedAngle_degree, normalized_includedAngle_Radian, cosine_radian);
        //distance of point 
        if (demo_singleRoute[i]['distance'] == 0) {
            continue;
        }
        count_point_good++;
        var distance_point = demo_singleRoute[i]['distance'];
        //sum accuracy distance 
        sum_accuracy_distance += distance_point * cosine_radian;
        //actual distance 
        // total_distance += (demo_singleRoute[i]['distance']);

        console.log(sum_accuracy_distance, wholeDistance);
        //cur route accuracy
        var cur_routeAccuracy = sum_accuracy_distance / wholeDistance;

        // console.log(distance_toStartPoint,distance_toMakebaseline,distance_atMakebaseline,total_distance);

<<<<<<< HEAD
        // routeAccuracy_list.push(cur_routeAccuracy.toFixed(3));
        routeAccuracy_list_2_3.push(cur_routeAccuracy.toFixed(3));
    }

    //draw in plot
    func_draw_line();

    function func_draw_line() {
        //set chart
        var canvas_soloRoute_routeAccuracy_realtime_line = document.createElement('div');
        canvas_soloRoute_routeAccuracy_realtime_line.style.width = '50%';
        canvas_soloRoute_routeAccuracy_realtime_line.style.height = '50%';
        canvas_soloRoute_routeAccuracy_realtime_line.setAttribute("id", "canvas_soloRoute_routeAccuracy_realtime_line");
        canvas_soloRoute_routeAccuracy_realtime_line.style.left = "50%";
        // console.log((250+(i-1)*50).toString(10));
        canvas_soloRoute_routeAccuracy_realtime_line.style.top = "50%";
        canvas_soloRoute_routeAccuracy_realtime_line.style.position = "absolute";
        document.body.appendChild(canvas_soloRoute_routeAccuracy_realtime_line);

        //set options
        var options = {
            series: [{
                    name: "路徑準確度",
                    data: routeAccuracy_list
                }, {
                    name: "路徑準確度2-1",
                    data: route_accuracy_list_2_1
                },
                // {
                //   name: "路徑準確度2-2",
                //   data: route_accuracy_list_2_2
                // }
                // {
                //   name: "路徑準確度2-3",
                //   data: routeAccuracy_list_2_3
                // },
            ],
            chart: {
                // height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
                events: {
                    mouseMove: function(event, chartContext, config) {
                        // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts.
                        // console.log(config['dataPointIndex']);
                        try {
                            console.log(test_set_bearing_from_lastPoint[config['dataPointIndex']],
                                test_set_bearing_to_endPoint[config['dataPointIndex']],
                                test_set_includedAngle[config['dataPointIndex']],
                                test_set_cosine_radian[config['dataPointIndex']],
                                test_set_di[config['dataPointIndex']],
                                test_set_distance_flown[config['dataPointIndex']]
                            );
                            showInMap_movepoint(data_normalized[config['dataPointIndex'] + 1]);
                        } catch (e) {
                            console.log(e); // Error: hi
                        }
                    }
                }
            },
            colors: ['#77B6EA', '#545454', '#7CFC00'],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: '路徑準確度',
                align: 'middle'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            // xaxis: {
            //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            // }
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
=======
    //set options
    var options = {
      series: [{
        name: "路徑準確度",
        data: routeAccuracy_list
      }, {
        name: "路徑準確度2-1",
        data: route_accuracy_list_2_1
      },
        // {
        //   name: "路徑準確度2-2",
        //   data: route_accuracy_list_2_2
        // }
        // {
        //   name: "路徑準確度2-3",
        //   data: routeAccuracy_list_2_3
        // },
      ],
      chart: {
        // height: 350,
        type: 'line',
        zoom: {
          enabled: false
        },
        events: {
          mouseMove: function (event, chartContext, config) {
            // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts.
            // console.log(config['dataPointIndex']);
            try {
              console.log(test_set_bearing_from_lastPoint[config['dataPointIndex']],
                test_set_bearing_to_endPoint[config['dataPointIndex']],
                test_set_includedAngle[config['dataPointIndex']],
                test_set_cosine_radian[config['dataPointIndex']],
                test_set_di[config['dataPointIndex']],
                test_set_distance_flown[config['dataPointIndex']]
              );
              showInMap_movepoint(data_normalized[config['dataPointIndex'] + 1]);
            } catch (e) {
              console.log(e); // Error: hi
>>>>>>> 2112186da9c918834af115fb11f7011b68369c17
            }
        };

        var chart = new ApexCharts(canvas_soloRoute_routeAccuracy_realtime_line, options);
        chart.render();
    }
}


func_label_solo_route_elevation();
//draw a label for route accuracy
function func_label_solo_route_elevation() {
<<<<<<< HEAD
    const newLabel = document.createElement("label");
    newLabel.style.width = '100%';
    newLabel.style.height = '5%';
    newLabel.style.left = "0%";
    newLabel.style.top = "180%";
    newLabel.style.backgroundColor = "rgba(106,90,205,0.5)";
    newLabel.style.position = "absolute";
    newLabel.style.zIndex = "1";
    newLabel.innerHTML = "海拔區域柱狀圖";
    newLabel.style.textAlign = "left";
    // newLabel.style.fontSize = '150%';

    document.body.appendChild(newLabel);
=======
  const newLabel = document.createElement("label");
  newLabel.style.width = '100%';
  newLabel.style.height = '48px';
  newLabel.style.left = "0%";
  newLabel.style.top = "250%";
  newLabel.style.backgroundColor = "rgba(106,90,205,0.5)";
  newLabel.style.position = "absolute";
  newLabel.style.zIndex = "1";
  newLabel.innerHTML = "海拔區域柱狀圖";
  newLabel.style.textAlign = "left";
  newLabel.style.fontSize = '36px';

  document.body.appendChild(newLabel);

  var dialog = document.getElementById('dialog_elevationZoneBar');
  newLabel.addEventListener('click', () => {
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      alert("Sorry, the <dialog> API is not supported by this browser.");
    }
  });
>>>>>>> 2112186da9c918834af115fb11f7011b68369c17
}

func_solo_route_elevation();
///functions for elevation as bar chart and splited by zone
// quatile做法：按照從小到大的方式排列成有序的list，然後25%是指位置在25%的數值，50%就是指中位數，75%是位置在75%的值；
// 圖表做法：
// step1：設定zone；
// step2：計算每個zone的數量；（elevate中使用的是時間）
// ascent計算: 上升了多少，只要有上升的部分，就累加；
// desent計算與ascent計算相同；
function func_solo_route_elevation() {
    //set zone
    var zone = [];
    var zone_count = [];
    for (var i = 0; i < 17; i++) {
        zone.push([0 + i * 100, 100 + i * 100]);
        zone_count.push(0);
    }

    var data_normalized = [];
    for (var i = 0; i < demo_singleRoute.length; i++) {
        data_normalized.push(demo_singleRoute[i]['elevation']);
    }

    //calculate count in zones
    for (var i = 0; i < data_normalized.length; i++) {
        for (var j = 0; j < zone.length; j++) {
            if (zone[j][0] <= data_normalized[i] && zone[j][1] > data_normalized[i]) {
                zone_count[j]++;
                break;
            }
        }
    }
    console.log(zone_count);
    //calculate ascent and descent
    var sum_ascent = 0;
    var sum_descent = 0;
    var last_elevation = data_normalized[0];
    for (var i = 1; i < data_normalized.length; i++) {
        var cur_elevation = data_normalized[i];

        if (cur_elevation > last_elevation) {
            sum_ascent += cur_elevation - last_elevation;
        } else if (cur_elevation < last_elevation) {
            sum_descent += last_elevation - cur_elevation;
        }

        last_elevation = cur_elevation;
    }
    console.log(sum_ascent, sum_descent);


    //draw labels
    function drawLabels() {
        //draw average elevation
        var sum_ele = 0;
        for (var i = 0; i < data_normalized.length; i++) {
            sum_ele += data_normalized[i];
        }
        var average_ele = sum_ele / data_normalized.length;
        var btn_average_elevation = document.createElement("button");
        btn_average_elevation.innerHTML = average_ele.toFixed(1).toString() + " M" + '\n' + "Average";
        btn_average_elevation.style.width = '8%';
        btn_average_elevation.style.height = '8%';
        btn_average_elevation.style.background = 'transparent';
        btn_average_elevation.style.border = 'transparent';
        btn_average_elevation.style.color = 'black';
        btn_average_elevation.setAttribute("id", "btn_average_elevation");
        btn_average_elevation.style.left = "0%";
        btn_average_elevation.style.top = "200%";
        btn_average_elevation.style.position = "absolute";
        document.body.appendChild(btn_average_elevation);

        //draw ascent and descent 
        var btn_ascent_elevation = document.createElement("button");
        btn_ascent_elevation.innerHTML = sum_ascent.toFixed(1).toString() + " M" + '\n' + "Ascent";
        btn_ascent_elevation.style.width = '8%';
        btn_ascent_elevation.style.height = '8%';
        btn_ascent_elevation.style.background = 'transparent';
        btn_ascent_elevation.style.border = 'transparent';
        btn_ascent_elevation.style.color = 'black';
        btn_ascent_elevation.setAttribute("id", "btn_ascent_elevation");
        btn_ascent_elevation.style.left = "8%";
        btn_ascent_elevation.style.top = "200%";
        btn_ascent_elevation.style.position = "absolute";
        document.body.appendChild(btn_ascent_elevation);

        var btn_descent_elevation = document.createElement("button");
        btn_descent_elevation.innerHTML = sum_descent.toFixed(1).toString() + " M" + '\n' + "Descent";
        btn_descent_elevation.style.width = '8%';
        btn_descent_elevation.style.height = '8%';
        btn_descent_elevation.style.background = 'transparent';
        btn_descent_elevation.style.border = 'transparent';
        btn_descent_elevation.style.color = 'black';
        btn_descent_elevation.setAttribute("id", "btn_descent_elevation");
        btn_descent_elevation.style.left = "16%";
        btn_descent_elevation.style.top = "200%";
        btn_descent_elevation.style.position = "absolute";
        document.body.appendChild(btn_descent_elevation);

        //draw quartile elevation
        var sorted_elevation = data_normalized.sort(function(a, b) { return a - b });
        console.log(sorted_elevation);
        var index = Math.floor(sorted_elevation.length / 4);
        var btn_quartile_elevation_1 = document.createElement("button");
        btn_quartile_elevation_1.innerHTML = sorted_elevation[index].toFixed(1).toString() + " M" + '\n' + "25% Quartile";
        btn_quartile_elevation_1.style.width = '8%';
        btn_quartile_elevation_1.style.height = '8%';
        btn_quartile_elevation_1.style.background = 'transparent';
        btn_quartile_elevation_1.style.border = 'transparent';
        btn_quartile_elevation_1.style.color = 'black';
        btn_quartile_elevation_1.setAttribute("id", "btn_quartile_elevation_1");
        btn_quartile_elevation_1.style.left = "0%";
        btn_quartile_elevation_1.style.top = "210%";
        btn_quartile_elevation_1.style.position = "absolute";
        document.body.appendChild(btn_quartile_elevation_1);

        index = Math.floor(sorted_elevation.length / 2);
        var btn_quartile_elevation_2 = document.createElement("button");
        btn_quartile_elevation_2.innerHTML = sorted_elevation[index].toFixed(1).toString() + " M" + '\n' + "50% Quartile";
        btn_quartile_elevation_2.style.width = '8%';
        btn_quartile_elevation_2.style.height = '8%';
        btn_quartile_elevation_2.style.background = 'transparent';
        btn_quartile_elevation_2.style.border = 'transparent';
        btn_quartile_elevation_2.style.color = 'black';
        btn_quartile_elevation_2.setAttribute("id", "btn_quartile_elevation_2");
        btn_quartile_elevation_2.style.left = "8%";
        btn_quartile_elevation_2.style.top = "210%";
        btn_quartile_elevation_2.style.position = "absolute";
        document.body.appendChild(btn_quartile_elevation_2);

        index = Math.floor((sorted_elevation.length * 3) / 4);
        var btn_quartile_elevation_3 = document.createElement("button");
        btn_quartile_elevation_3.innerHTML = sorted_elevation[index].toFixed(1).toString() + " M" + '\n' + "75% Quartile";
        btn_quartile_elevation_3.style.width = '8%';
        btn_quartile_elevation_3.style.height = '8%';
        btn_quartile_elevation_3.style.background = 'transparent';
        btn_quartile_elevation_3.style.border = 'transparent';
        btn_quartile_elevation_3.style.color = 'black';
        btn_quartile_elevation_3.setAttribute("id", "btn_quartile_elevation_3");
        btn_quartile_elevation_3.style.left = "16%";
        btn_quartile_elevation_3.style.top = "210%";
        btn_quartile_elevation_3.style.position = "absolute";
        document.body.appendChild(btn_quartile_elevation_3);

    }
<<<<<<< HEAD
    drawLabels();

    //draw in chart
    let canvas_bar_elevation = document.createElement('canvas');
    canvas_bar_elevation.setAttribute("width", window.innerWidth / 2);
    canvas_bar_elevation.setAttribute("height", window.innerHeight / 2);
    canvas_bar_elevation.setAttribute("id", "canvas_bar_elevation");
    canvas_bar_elevation.style.left = "30%";
    canvas_bar_elevation.style.top = "190%";
    canvas_bar_elevation.style.position = "absolute";
    // canvas.style['margin-left'] = '-200px';
    // canvas.style.border   = "1px solid";
    // canvas.style.backgroundColor = 'transparent';
    document.body.appendChild(canvas_bar_elevation);

    const myChart_elevation = new Chart(canvas_bar_elevation, {
        type: 'bar',
        data: {
            labels: zone,
            datasets: [
                //route accuracy 
                {
                    type: 'bar',
                    label: '海拔區域柱狀圖',
                    data: zone_count,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                },
            ]
=======
    var average_ele = sum_ele / data_normalized.length;
    var btn_average_elevation = document.createElement("button");
    btn_average_elevation.innerHTML = average_ele.toFixed(1).toString() + " M" + '\n' + "Average";
    btn_average_elevation.style.width = '8%';
    btn_average_elevation.style.height = '8%';
    btn_average_elevation.style.background = 'transparent';
    btn_average_elevation.style.border = 'transparent';
    btn_average_elevation.style.color = 'black';
    btn_average_elevation.setAttribute("id", "btn_average_elevation");
    btn_average_elevation.style.left = "0%";
    btn_average_elevation.style.top = "280%";
    btn_average_elevation.style.position = "absolute";
    document.body.appendChild(btn_average_elevation);

    //draw ascent and descent 
    var btn_ascent_elevation = document.createElement("button");
    btn_ascent_elevation.innerHTML = sum_ascent.toFixed(1).toString() + " M" + '\n' + "Ascent";
    btn_ascent_elevation.style.width = '8%';
    btn_ascent_elevation.style.height = '8%';
    btn_ascent_elevation.style.background = 'transparent';
    btn_ascent_elevation.style.border = 'transparent';
    btn_ascent_elevation.style.color = 'black';
    btn_ascent_elevation.setAttribute("id", "btn_ascent_elevation");
    btn_ascent_elevation.style.left = "8%";
    btn_ascent_elevation.style.top = "280%";
    btn_ascent_elevation.style.position = "absolute";
    document.body.appendChild(btn_ascent_elevation);

    var btn_descent_elevation = document.createElement("button");
    btn_descent_elevation.innerHTML = sum_descent.toFixed(1).toString() + " M" + '\n' + "Descent";
    btn_descent_elevation.style.width = '8%';
    btn_descent_elevation.style.height = '8%';
    btn_descent_elevation.style.background = 'transparent';
    btn_descent_elevation.style.border = 'transparent';
    btn_descent_elevation.style.color = 'black';
    btn_descent_elevation.setAttribute("id", "btn_descent_elevation");
    btn_descent_elevation.style.left = "16%";
    btn_descent_elevation.style.top = "280%";
    btn_descent_elevation.style.position = "absolute";
    document.body.appendChild(btn_descent_elevation);

    //draw quartile elevation
    var sorted_elevation = data_normalized.sort(function (a, b) { return a - b });
    console.log(sorted_elevation);
    var index = Math.floor(sorted_elevation.length / 4);
    var btn_quartile_elevation_1 = document.createElement("button");
    btn_quartile_elevation_1.innerHTML = sorted_elevation[index].toFixed(1).toString() + " M" + '\n' + "25% Quartile";
    btn_quartile_elevation_1.style.width = '8%';
    btn_quartile_elevation_1.style.height = '8%';
    btn_quartile_elevation_1.style.background = 'transparent';
    btn_quartile_elevation_1.style.border = 'transparent';
    btn_quartile_elevation_1.style.color = 'black';
    btn_quartile_elevation_1.setAttribute("id", "btn_quartile_elevation_1");
    btn_quartile_elevation_1.style.left = "0%";
    btn_quartile_elevation_1.style.top = "290%";
    btn_quartile_elevation_1.style.position = "absolute";
    document.body.appendChild(btn_quartile_elevation_1);

    index = Math.floor(sorted_elevation.length / 2);
    var btn_quartile_elevation_2 = document.createElement("button");
    btn_quartile_elevation_2.innerHTML = sorted_elevation[index].toFixed(1).toString() + " M" + '\n' + "50% Quartile";
    btn_quartile_elevation_2.style.width = '8%';
    btn_quartile_elevation_2.style.height = '8%';
    btn_quartile_elevation_2.style.background = 'transparent';
    btn_quartile_elevation_2.style.border = 'transparent';
    btn_quartile_elevation_2.style.color = 'black';
    btn_quartile_elevation_2.setAttribute("id", "btn_quartile_elevation_2");
    btn_quartile_elevation_2.style.left = "8%";
    btn_quartile_elevation_2.style.top = "290%";
    btn_quartile_elevation_2.style.position = "absolute";
    document.body.appendChild(btn_quartile_elevation_2);

    index = Math.floor((sorted_elevation.length * 3) / 4);
    var btn_quartile_elevation_3 = document.createElement("button");
    btn_quartile_elevation_3.innerHTML = sorted_elevation[index].toFixed(1).toString() + " M" + '\n' + "75% Quartile";
    btn_quartile_elevation_3.style.width = '8%';
    btn_quartile_elevation_3.style.height = '8%';
    btn_quartile_elevation_3.style.background = 'transparent';
    btn_quartile_elevation_3.style.border = 'transparent';
    btn_quartile_elevation_3.style.color = 'black';
    btn_quartile_elevation_3.setAttribute("id", "btn_quartile_elevation_3");
    btn_quartile_elevation_3.style.left = "16%";
    btn_quartile_elevation_3.style.top = "290%";
    btn_quartile_elevation_3.style.position = "absolute";
    document.body.appendChild(btn_quartile_elevation_3);

  }
  drawLabels();

  //draw in chart
  let canvas_bar_elevation = document.createElement('canvas');
  canvas_bar_elevation.setAttribute("width", window.innerWidth / 2);
  canvas_bar_elevation.setAttribute("height", window.innerHeight / 2);
  canvas_bar_elevation.setAttribute("id", "canvas_bar_elevation");
  canvas_bar_elevation.style.left = "30%";
  canvas_bar_elevation.style.top = "270%";
  canvas_bar_elevation.style.position = "absolute";
  // canvas.style['margin-left'] = '-200px';
  // canvas.style.border   = "1px solid";
  // canvas.style.backgroundColor = 'transparent';
  document.body.appendChild(canvas_bar_elevation);

  const myChart_elevation = new Chart(canvas_bar_elevation, {
    type: 'bar',
    data: {
      labels: zone,
      datasets: [
        //route accuracy 
        {
          type: 'bar',
          label: '海拔區域柱狀圖',
          data: zone_count,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
>>>>>>> 2112186da9c918834af115fb11f7011b68369c17
        },
        options: {
            responsive: false,
            legend: { display: true },
            elements: {
                point: {
                    radius: 0
                }
            },
            scales: {
                // yAxes: [{
                //   beginAtZero: true,
                //   fontSize: 0,
                //   padding: 1,
                //   gridLines: {
                //     display: false
                //   },
                // }],
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    padding: 1,
                }],
            },
        }
    });
}



func_label_solo_route_routeAccuracySpeedElevation();
//draw a label for route accuracy
function func_label_solo_route_routeAccuracySpeedElevation() {
<<<<<<< HEAD
    const newLabel = document.createElement("label");
    newLabel.style.width = '100%';
    newLabel.style.height = '5%';
    newLabel.style.left = "0%";
    newLabel.style.top = "115%";
    newLabel.style.backgroundColor = "rgba(106,90,205,0.5)";
    newLabel.style.position = "absolute";
    newLabel.style.zIndex = "1";
    newLabel.innerHTML = "即時路徑效率.速度.海拔.地面海拔的對比圖";
    newLabel.style.textAlign = "left";
    // newLabel.style.fontSize = '100%';

    document.body.appendChild(newLabel);
=======
  const newLabel = document.createElement("label");
  newLabel.style.width = '100%';
  newLabel.style.height = '48px';
  newLabel.style.left = "0%";
  newLabel.style.top = "150%";
  newLabel.style.backgroundColor = "rgba(106,90,205,0.5)";
  newLabel.style.position = "absolute";
  newLabel.style.zIndex = "1";
  newLabel.innerHTML = "速度.海拔.地面海拔的對比圖";
  newLabel.style.textAlign = "left";
  newLabel.style.fontSize = '36px';

  document.body.appendChild(newLabel);

  var dialog = document.getElementById('dialog_altitudeFromEarth');
  newLabel.addEventListener('click', () => {
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      alert("Sorry, the <dialog> API is not supported by this browser.");
    }
  });
>>>>>>> 2112186da9c918834af115fb11f7011b68369c17
}


///functions for solo route's figures analysis
function func_solo_route_routeAccuracySpeedElevation() {
    var data_normalized = []

    for (var i = 0; i < demo_singleRoute.length; i++) {
        data_normalized.push([demo_singleRoute[i]['latitude'], demo_singleRoute[i]['longitude']]);
    }

<<<<<<< HEAD
    if (data_normalized.length < 1) {
        console.log("no data");
        //todo: raise a warning;
        return;
=======
  function makeYData_elevation() {
    var result = []
    for (var i = 0; i < demo_singleRoute.length; i++) {
      result.push(demo_singleRoute[i]['elevation'] / 1000)
    }
    return result;
  }
  var dataY_elevation = makeYData_elevation();
  //draw in plot
  //set chart
  var canvas_routeEff_speed_elevation = document.createElement('div');
  canvas_routeEff_speed_elevation.style.width = '50%';
  canvas_routeEff_speed_elevation.style.height = '50%';
  canvas_routeEff_speed_elevation.setAttribute("id", "canvas_routeEff_speed_elevation");
  canvas_routeEff_speed_elevation.style.left = "25%";
  // console.log((250+(i-1)*50).toString(10));
  canvas_routeEff_speed_elevation.style.top = "170%";
  canvas_routeEff_speed_elevation.style.position = "absolute";
  document.body.appendChild(canvas_routeEff_speed_elevation);

  //set options
  var options = {
    series: [
      // {
      //   name:"test",
      //   data:[0],
      // },
      // {
      //   name: '即時路徑效率',
      //   data: routeEff_list_realtime_1_3,
      // },
      {
        name: '速度(km/min)',
        data: dataY_speed,
      },
      {
        name: '海拔(km)',
        data: dataY_elevation,
      },
    ],
    chart: {
      // height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    colors: ['#77B6EA', '#545454', '#7CFC00', '#b84644', '#4576b5'],
    // colors: ['#545454', '#7CFC00','#b84644', '#4576b5'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: '速度.海拔.地面海拔的對比圖',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
>>>>>>> 2112186da9c918834af115fb11f7011b68369c17
    }
    // var startPoint = data_normalized[0];
    var endPoint = data_normalized[data_normalized.length - 1];
    // var make_baseline = turf.lineString([startPoint, endPoint]);
    var routeEff_list_realtime_1_3 = [];
    var total_distance = 0;
    var wholeDistance = 0;
    for (var i = 0; i < demo_singleRoute.length; i++) {
        wholeDistance += (demo_singleRoute[i]['distance'] / 1000);
    }
    console.log(wholeDistance);

    for (var i = 0; i < data_normalized.length; i++) {
        var pt = turf.point(data_normalized[i]);
        //distance to end point
        var distance_toEndPoint = turf.distance(pt, endPoint, { units: 'kilometers' });
        //actual distance 
        total_distance += (demo_singleRoute[i]['distance'] / 1000);
        //cur route efficiency
        if (wholeDistance - total_distance == 0) {
            console.log("arrive endPoint");
            var last_value = routeEff_list_realtime_1_3[routeEff_list_realtime_1_3.length - 1];
            routeEff_list_realtime_1_3.push(last_value);
            continue;
        }
        var cur_routeEff = distance_toEndPoint / (wholeDistance - total_distance);

        // console.log(distance_toStartPoint,distance_toMakebaseline,distance_atMakebaseline,total_distance);
        // console.log(wholeDistance, total_distance);
        routeEff_list_realtime_1_3.push(cur_routeEff.toFixed(3));
    }
    console.log(routeEff_list_realtime_1_3);

    function makeYData_speed() {
        var result = []
        for (var i = 0; i < demo_singleRoute.length; i++) {
            result.push(demo_singleRoute[i]['speed'] * 60 / 1000);
        }
        return result;
    }
    var dataY_speed = makeYData_speed();

    function makeYData_elevation() {
        var result = []
        for (var i = 0; i < demo_singleRoute.length; i++) {
            result.push(demo_singleRoute[i]['elevation'] / 1000)
        }
        return result;
    }
    var dataY_elevation = makeYData_elevation();

    // //draw in chart
    // let canvas_routeEff_speed_elevation = document.createElement('canvas');
    // canvas_routeEff_speed_elevation.setAttribute("width", window.innerWidth / 2);
    // canvas_routeEff_speed_elevation.setAttribute("height", window.innerHeight / 2);
    // canvas_routeEff_speed_elevation.setAttribute("id", "canvas_routeEff_speed_elevation");
    // canvas_routeEff_speed_elevation.style.left = "10%";
    // canvas_routeEff_speed_elevation.style.top = "120%";
    // canvas_routeEff_speed_elevation.style.position = "absolute";
    // // canvas.style['margin-left'] = '-200px';
    // // canvas.style.border   = "1px solid";
    // // canvas.style.backgroundColor = 'transparent';
    // document.body.appendChild(canvas_routeEff_speed_elevation);

    // var make_x = []
    // for (var i = 0; i < data_normalized.length; i++) {
    //   make_x.push(i);
    // }

    // const myChart_RoutePlot = new Chart(canvas_routeEff_speed_elevation, {
    //   type: 'line',
    //   data: {
    //     labels: make_x,
    //     datasets: [
    //       //route accuracy 
    //       {
    //         type: 'line',
    //         label: '即時路徑效率',
    //         data: routeEff_list,
    //         // backgroundColor: 'transparent',
    //         fill: false,
    //         borderColor: 'rgb(75, 192, 192)',
    //       },
    //       {
    //         type: 'line',
    //         label: '速度(km/min)',
    //         data: dataY_speed,
    //         // backgroundColor: 'transparent',
    //         fill: false,
    //         borderColor: 'blue',
    //       },
    //       {
    //         type: 'line',
    //         label: '海拔(km)',
    //         data: dataY_elevation,
    //         // backgroundColor: 'transparent',
    //         fill: false,
    //         borderColor: 'red',
    //       },
    //     ]
    //   },
    //   options: {
    //     responsive: false,
    //     legend: { display: true },
    //     elements: {
    //       point: {
    //         radius: 0
    //       }
    //     },
    //     scales: {
    //       yAxes: [{
    //         beginAtZero: true,
    //         fontSize: 0,
    //         padding: 1,
    //         gridLines: {
    //           display: false
    //         },
    //       }],
    //       xAxes: [{
    //         // beginAtZero: true,
    //         // fontSize: 0,
    //         // ticks: {
    //         //   fontColor: "#000",
    //         //   fontSize: 0
    //         // },
    //         gridLines: {
    //           display: false
    //         },
    //         padding: 1,
    //         // display:false,
    //         // position:'bottom',
    //       }],
    //     },
    //   }
    // });

    //draw in plot

    //set chart
    var canvas_routeEff_speed_elevation = document.createElement('div');
    canvas_routeEff_speed_elevation.style.width = '50%';
    canvas_routeEff_speed_elevation.style.height = '50%';
    canvas_routeEff_speed_elevation.setAttribute("id", "canvas_routeEff_speed_elevation");
    canvas_routeEff_speed_elevation.style.left = "25%";
    // console.log((250+(i-1)*50).toString(10));
    canvas_routeEff_speed_elevation.style.top = "120%";
    canvas_routeEff_speed_elevation.style.position = "absolute";
    document.body.appendChild(canvas_routeEff_speed_elevation);

    //set options
    var options = {
        series: [
            // {
            //   name:"test",
            //   data:[0],
            // },
            {
                name: '即時路徑效率',
                data: routeEff_list_realtime_1_3,
            },
            {
                name: '速度(km/min)',
                data: dataY_speed,
            },
            {
                name: '海拔(km)',
                data: dataY_elevation,
            },
        ],
        chart: {
            // height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        colors: ['#77B6EA', '#545454', '#7CFC00', '#b84644', '#4576b5'],
        // colors: ['#545454', '#7CFC00','#b84644', '#4576b5'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: '即時路徑效率.速度.海拔.地面海拔的對比圖',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    };

    var chart = new ApexCharts(canvas_routeEff_speed_elevation, options);
    chart.render();


    // function draw_earthElevation(elevations) {
    //   var normalized_elevations = [];
    //   for (var i = 0; i < elevations.length; i++) {
    //     normalized_elevations.push(elevations[i] / 1000);
    //   }
    //   var make_data = {
    //     name: '地面海拔(km)',
    //     data: normalized_elevations,
    //     // backgroundColor: 'transparent',
    //     fill: false,
    //     borderColor: 'green',
    //   }
    //   myChart_RoutePlot.data.datasets.push(make_data);
    //   myChart_RoutePlot.update();
    // }
    function draw_earthElevation(elevations) {
        var normalized_elevations = [];
        for (var i = 0; i < elevations.length; i++) {
            normalized_elevations.push(elevations[i] / 1000);
        }
        var make_data = {
            name: '地面海拔(km)',
            data: normalized_elevations,
        }
        console.log(chart);
        chart.opts.series.push(make_data);
        // chart.opts.colors.push();
        chart.update();
    }

    function draw_elevationFromEarth(elevations) {
        var normalized_elevations = [];
        for (var i = 0; i < elevations.length; i++) {
            normalized_elevations.push(dataY_elevation[i] - elevations[i] / 1000);
        }
        var make_data = {
            type: 'line',
            label: '離地高度(km)',
            data: normalized_elevations,
            // backgroundColor: 'transparent',
            fill: false,
            borderColor: 'green',
        }
        myChart_RoutePlot.data.datasets.push(make_data);
        myChart_RoutePlot.update();
    }

    makeYData_earthElevation();

    function makeYData_earthElevation() {
        var result = [];
        var dataToSend = "";
        var dataToSend_json = [];
        for (var i_earthEle = 0; i_earthEle < data_normalized.length; i_earthEle++) {
            var lat = data_normalized[i_earthEle][0];
            var lon = data_normalized[i_earthEle][1];

            dataToSend_json.push({ "latitude": lat, "longitude": lon });
        }

        const url = 'https://api.open-elevation.com/api/v1/lookup?';
        var oReq = new XMLHttpRequest();

        function reqListener() {
            // console.log(typeof (this.responseText), typeof (this.response));
            // console.log(this);

            var response = JSON.parse(this.responseText);
            console.log(response.results);
            for (var i_res = 0; i_res < response.results.length; i_res++) {
                result.push(response.results[i_res]['elevation']);
            }
            console.log(result);
            //todo draw in chart
            draw_earthElevation(result);
            // draw_elevationFromEarth(result);
        }

        oReq.addEventListener("load", reqListener);
        // oReq.open("GET", 'decodePathLine_toPolygon' + '/' + pathname + '/' + str_paths);
        oReq.open("post", url);
        // oReq.setRequestHeader("X-CSRFToken", '{{ csrf_token|safe }}');
        oReq.setRequestHeader("Accept", "application/json");
        oReq.setRequestHeader("Content-Type", "application/json");
        oReq.send(JSON.stringify({ "locations": dataToSend_json }));
    }

}

func_solo_route_routeAccuracySpeedElevation();

///functions for multi routes analysis
let demo_data_multiroutes = [];

func_label_multiRoutes_realTimeDistance();
//draw a label for route accuracy
<<<<<<< HEAD
function func_label_multiRoutes_routeSimilarity() {
    const newLabel = document.createElement("label");
    newLabel.style.width = '100%';
    newLabel.style.height = '5%';
    newLabel.style.left = "0%";
    newLabel.style.top = "245%";
    newLabel.style.backgroundColor = "rgba(106,90,205,0.5)";
    newLabel.style.position = "absolute";
    newLabel.style.zIndex = "1";
    newLabel.innerHTML = "路徑相似度對比圖";
    newLabel.style.textAlign = "left";
    // newLabel.style.fontSize = '150%';

    document.body.appendChild(newLabel);
=======
function func_label_multiRoutes_realTimeDistance() {
  const newLabel = document.createElement("label");
  newLabel.style.width = '100%';
  newLabel.style.height = '48px';
  newLabel.style.left = "0%";
  newLabel.style.top = "350%";
  newLabel.style.backgroundColor = "rgba(106,90,205,0.5)";
  newLabel.style.position = "absolute";
  newLabel.style.zIndex = "1";
  newLabel.innerHTML = "即時距離";
  newLabel.style.textAlign = "left";
  newLabel.style.fontSize = '36px';

  document.body.appendChild(newLabel);

  var dialog = document.getElementById('dialog_realTimeDistance');
  newLabel.addEventListener('click', () => {
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      alert("Sorry, the <dialog> API is not supported by this browser.");
    }
  });
>>>>>>> 2112186da9c918834af115fb11f7011b68369c17
}

func_multiRoutes_realTimeDistance();

<<<<<<< HEAD
function func_multiRoutes_routeSimilarity() {
    //normalize routes
    var normalized_multiroutes = [];
    for (var i = 0; i < test_demo_data.length; i++) {
        var normalized_route = [];
        for (var j = 0; j < test_demo_data[i].length; j++) {
            normalized_route.push([test_demo_data[i][j]['latitude'], test_demo_data[i][j]['longitude']]);
        }
        normalized_multiroutes.push(normalized_route);
=======
// 論文中用這個公式來判斷鴿子是否是pair飛行的，可以作為pair飛行的驗證工具；
// 即時距離 = D點到點的距離（timestap）；

function func_multiRoutes_realTimeDistance() {
  //normalize routes
  var normalized_multiroutes = [];
  for (var i = 0; i < test_demo_data.length; i++) {
    var normalized_route = [];
    for (var j = 0; j < test_demo_data[i].length; j++) {
      normalized_route.push([test_demo_data[i][j]['latitude'], test_demo_data[i][j]['longitude']]);
    }
    normalized_multiroutes.push(normalized_route);
  }

  func_multiRoutes_realTimeDistance_map_twolines();

  function func_multiRoutes_realTimeDistance_map_twolines() {
    //make two lines
    var two_routes = [normalized_multiroutes[0], normalized_multiroutes[1]];
    ///draw path in map
    let div_smallMap = document.getElementById('Map_showPaths_routeSimilarity');
    div_smallMap.setAttribute('style', 'width:40%;height:40%;');
    // div_smallMap.setAttribute('style', 'width:800px;height:400px;');
    // canvas.setAttribute("width", 400);
    // canvas.setAttribute("height", 100);
    div_smallMap.style.left = "5%";
    div_smallMap.style.top = "370%";
    div_smallMap.style.position = "absolute";
    div_smallMap.style.zIndex = "1";
    var map_handler = L.map('Map_showPaths_routeSimilarity', { preferCanvas: true }).setView([0, 0], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      // attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map_handler);

    var colors = ['purple', 'blue'];
    for (var i = 0; i < two_routes.length; i++) {
      showInMap(two_routes[i], colors[i]);
>>>>>>> 2112186da9c918834af115fb11f7011b68369c17
    }


<<<<<<< HEAD
    func_multiRoutes_routeSimilarity_map_twolines();

    function func_multiRoutes_routeSimilarity_map_twolines() {
        //make two lines
        var two_routes = [normalized_multiroutes[0], normalized_multiroutes[1]];
        ///draw path in map
        let div_smallMap = document.getElementById('Map_showPaths_routeSimilarity');
        div_smallMap.setAttribute('style', 'width:50%;height:50%;');
        // div_smallMap.setAttribute('style', 'width:800px;height:400px;');
        // canvas.setAttribute("width", 400);
        // canvas.setAttribute("height", 100);
        div_smallMap.style.left = "0%";
        div_smallMap.style.top = "250%";
        div_smallMap.style.position = "absolute";
        div_smallMap.style.zIndex = "1";
        var map_handler = L.map('Map_showPaths_routeSimilarity', { preferCanvas: true }).setView([0, 0], 11);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
            // attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        }).addTo(map_handler);

        var colors = ['purple', 'blue'];
        for (var i = 0; i < two_routes.length; i++) {
            showInMap(two_routes[i], colors[i]);
        }
=======
      var baseLine = [path_normalize[0], path_normalize[path_normalize.length - 1]];
      console.log(baseLine.length);
      L.polyline(baseLine, { color: 'green', weight: '1' }).addTo(map_handler);
      var polyline_origin = L.polyline(path_normalize, { color: color, weight: '1' }).addTo(map_handler);
    }
  }

  func_multiRoutes_realTimeDistance_twolines();

  //   step1：採集所有路徑的時間點；
  // step2：計算每個時間點中，所有時間點的路徑之間的距離；
  function func_multiRoutes_realTimeDistance_twolines() {
    //get timestamp of first two routes
    var index_sameTime = [];
    func_getTimeStamps();
    //same time < 3 s
    function func_getTimeStamps() {

      for (var i = 0; i < test_demo_data[0].length; i++) {
        var date_first = new Date(test_demo_data[0][i]['time']);
        var date_second = new Date(test_demo_data[1][i]['time']);
        var time_diff = date_first.getTime() - date_second.getTime();
        if (time_diff < 3) {
          index_sameTime.push(i);
        }
        // console.log(test_demo_data[0][i]['time'],test_demo_data[1][i]['time']);
      }
    }

    var distances_byTimeStamp = [];
    func_distancesAtSameTime();
    function func_distancesAtSameTime() {
      for (var i = 0; i < index_sameTime.length; i++) {
        var index = index_sameTime[i];
        var point_first = turf.point(normalized_multiroutes[0][index]);
        var point_sencod = turf.point(normalized_multiroutes[1][index])
        var dis = turf.distance(point_first, point_sencod, { units: 'kilometers' });
        distances_byTimeStamp.push(dis.toFixed(3));
      }
    }

    func_draw_line();

    function func_draw_line() {
      //set chart
      var canvas_routeSimilarity_similaritylineplot = document.createElement('div');
      canvas_routeSimilarity_similaritylineplot.style.width = '50%';
      canvas_routeSimilarity_similaritylineplot.style.height = '50%';
      canvas_routeSimilarity_similaritylineplot.setAttribute("id", "canvas_routeSimilarity_similaritylineplot");
      canvas_routeSimilarity_similaritylineplot.style.left = "50%";
      // console.log((250+(i-1)*50).toString(10));
      canvas_routeSimilarity_similaritylineplot.style.top = "370%";
      canvas_routeSimilarity_similaritylineplot.style.position = "absolute";
      document.body.appendChild(canvas_routeSimilarity_similaritylineplot);

      //set options
      var options = {
        series: [{
          name: "即時距離(km)",
          data: distances_byTimeStamp
        }],
        chart: {
          // height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: '即時距離(km)',
          align: 'middle'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        // xaxis: {
        //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        // }
      };

      var chart = new ApexCharts(canvas_routeSimilarity_similaritylineplot, options);
      chart.render();
    }
    //set baseline 
    var baseLine = turf.lineString(normalized_multiroutes[0]);
    for (var i = 1; i < 2; i++) {
      var point_distances = [];
      for (var j = 0; j < normalized_multiroutes[i].length; j++) {
        var pt = turf.point(normalized_multiroutes[i][j]);
        var distance = turf.pointToLineDistance(pt, baseLine, { units: 'kilometers' });
        point_distances.push(distance.toFixed(4));
      }
      // console.log(baseLine);
      console.log(point_distances);
      //draw in plot
      // func_draw_line();

      function func_draw_line() {
        //set chart
        var canvas_routeSimilarity_similaritylineplot = document.createElement('div');
        canvas_routeSimilarity_similaritylineplot.style.width = '50%';
        canvas_routeSimilarity_similaritylineplot.style.height = '50%';
        canvas_routeSimilarity_similaritylineplot.setAttribute("id", "canvas_routeSimilarity_similaritylineplot");
        canvas_routeSimilarity_similaritylineplot.style.left = "50%";
        // console.log((250+(i-1)*50).toString(10));
        canvas_routeSimilarity_similaritylineplot.style.top = "370%";
        canvas_routeSimilarity_similaritylineplot.style.position = "absolute";
        document.body.appendChild(canvas_routeSimilarity_similaritylineplot);
>>>>>>> 2112186da9c918834af115fb11f7011b68369c17

        function showInMap(path, color) {
            var path_normalize = [];
            for (var i = 0; i < path.length; i++) {
                var cell = [];
                cell.push(path[i][0]);
                cell.push(path[i][1]);
                path_normalize.push(cell);
            }
            console.log(path_normalize.length);

            map_handler.setView(path_normalize[Math.floor(path_normalize.length / 2)], 9)
                // map_handler.setView(path_normalize[0], 10)

            var baseLine = [path_normalize[0], path_normalize[path_normalize.length - 1]];
            console.log(baseLine.length);
            L.polyline(baseLine, { color: 'green', weight: '1' }).addTo(map_handler);
            var polyline_origin = L.polyline(path_normalize, { color: color, weight: '1' }).addTo(map_handler);
        }
    }
<<<<<<< HEAD

    func_multiRoutes_routeSimilarity_similaritylineplot();

    function func_multiRoutes_routeSimilarity_similaritylineplot() {
        //set baseline 
        var baseLine = turf.lineString(normalized_multiroutes[0]);
        for (var i = 1; i < 2; i++) {
            var point_distances = [];
            for (var j = 0; j < normalized_multiroutes[i].length; j++) {
                var pt = turf.point(normalized_multiroutes[i][j]);
                var distance = turf.pointToLineDistance(pt, baseLine, { units: 'kilometers' });
                point_distances.push(distance.toFixed(4));
            }
            // console.log(baseLine);
            console.log(point_distances);
            //draw in plot
            func_draw_line();

            function func_draw_line() {
                //set chart
                var canvas_routeSimilarity_similaritylineplot = document.createElement('div');
                canvas_routeSimilarity_similaritylineplot.style.width = '50%';
                canvas_routeSimilarity_similaritylineplot.style.height = '50%';
                canvas_routeSimilarity_similaritylineplot.setAttribute("id", "canvas_routeSimilarity_similaritylineplot");
                canvas_routeSimilarity_similaritylineplot.style.left = "50%";
                // console.log((250+(i-1)*50).toString(10));
                canvas_routeSimilarity_similaritylineplot.style.top = "250%";
                canvas_routeSimilarity_similaritylineplot.style.position = "absolute";
                document.body.appendChild(canvas_routeSimilarity_similaritylineplot);

                //set options
                var options = {
                    series: [{
                        name: "路徑相似度(km)",
                        data: point_distances
                    }],
                    chart: {
                        // height: 350,
                        type: 'line',
                        zoom: {
                            enabled: false
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'straight'
                    },
                    title: {
                        text: '路徑相似度(km)',
                        align: 'middle'
                    },
                    grid: {
                        row: {
                            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0.5
                        },
                    },
                    // xaxis: {
                    //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    // }
                };

                var chart = new ApexCharts(canvas_routeSimilarity_similaritylineplot, options);
                chart.render();
            }

=======
  }

}

func_label_multiRoutes_routeSimilarity();
//draw a label for route accuracy
function func_label_multiRoutes_routeSimilarity() {
  const newLabel = document.createElement("label");
  newLabel.style.width = '100%';
  newLabel.style.height = '48px';
  newLabel.style.left = "0%";
  newLabel.style.top = "450%";
  newLabel.style.backgroundColor = "rgba(106,90,205,0.5)";
  newLabel.style.position = "absolute";
  newLabel.style.zIndex = "1";
  newLabel.innerHTML = "路徑相似度對比圖";
  newLabel.style.textAlign = "left";
  newLabel.style.fontSize = '36px';

  document.body.appendChild(newLabel);

  var dialog = document.getElementById('dialog_routeSimilarity');
  newLabel.addEventListener('click', () => {
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      alert("Sorry, the <dialog> API is not supported by this browser.");
    }
  });
}

// 路徑相似度公式：計算所有點到參考路線的距離（點到線的距離的算法是：到最近的點的距離），然後計算平均距離，平均距離越小，相似度越高；
// 算法：平均路徑距離：
// step1：計算每個點與基準線的距離的和；
// step2：step1的和/點的個數；
// 
func_multiRoutes_routeSimilarity();

function func_multiRoutes_routeSimilarity() {
  //normalize routes
  var normalized_multiroutes = [];
  for (var i = 0; i < test_demo_data.length; i++) {
    var normalized_route = [];
    for (var j = 0; j < test_demo_data[i].length; j++) {
      normalized_route.push([test_demo_data[i][j]['latitude'], test_demo_data[i][j]['longitude']]);
    }
    normalized_multiroutes.push(normalized_route);
  }

  func_multiRoutes_routeSimilarity_averageSimilarity();
  /// multi routes 
  //  用法2：計算多條路徑的，平均路徑距離：
  // step1：計算相鄰兩條的距離的和；
  // step2：step1的和/點的個數；
  function func_multiRoutes_routeSimilarity_averageSimilarity() {
    //set baseline 
    var baseLine = turf.lineString(normalized_multiroutes[0]);
    //calculate distances 
    var multi_routes_distances = [];
    for (var i = 1; i < normalized_multiroutes.length; i++) {
      var point_distances = [];
      for (var j = 0; j < normalized_multiroutes[i].length; j++) {
        var pt = turf.point(normalized_multiroutes[i][j]);
        var distance = turf.pointToLineDistance(pt, baseLine, { units: 'kilometers' });
        point_distances.push((distance * 1000).toFixed(1));
      }
      multi_routes_distances.push(point_distances);
      //reset baseLine 
      baseLine = turf.lineString(normalized_multiroutes[i]);
    }
    // console.log(baseLine);
    console.log(multi_routes_distances[5]);

    //sort distances
    var multi_routes_distances_sorted = [];
    for (var i = 0; i < multi_routes_distances.length; i++) {
      multi_routes_distances_sorted.push(multi_routes_distances[i].sort(function (a, b) { return a - b }));
    }
    console.log(multi_routes_distances_sorted);
    //draw in plot
    func_draw_boxplot();

    function func_draw_boxplot() {
      //set chart
      var canvas_routeSimilarity_averageSimilaritybarplot = document.createElement('div');
      canvas_routeSimilarity_averageSimilaritybarplot.style.width = '50%';
      canvas_routeSimilarity_averageSimilaritybarplot.style.height = '40%';
      canvas_routeSimilarity_averageSimilaritybarplot.setAttribute("id", "canvas_routeSimilarity_averageSimilaritybarplot");
      canvas_routeSimilarity_averageSimilaritybarplot.style.left = "30%";
      // console.log((250+(i-1)*50).toString(10));
      canvas_routeSimilarity_averageSimilaritybarplot.style.top = "470%";
      canvas_routeSimilarity_averageSimilaritybarplot.style.position = "absolute";
      document.body.appendChild(canvas_routeSimilarity_averageSimilaritybarplot);

      //set options
      var options = {
        series: [{
          name: 'box',
          type: 'boxPlot',
          data: [
            // {
            //   x: new Date('2017-01-01').getTime(),
            //   y: [54, 66, 69, 75, 88]
            // },
          ]
        },],
        chart: {
          type: 'boxPlot',
          // height: 800,
        },
        colors: ['#008FFB', '#FEB019'],
        title: {
          text: '平均路徑距離',
          align: 'middle'
        },
        tooltip: {
          shared: false,
          intersect: true
        },
        yaxis: {
          // min: 0,
          // max: 1000,
          type: 'numeric',
>>>>>>> 2112186da9c918834af115fb11f7011b68369c17
        }
    }
<<<<<<< HEAD

    func_multiRoutes_routeSimilarity_averageSimilarity();
    /// multi routes 
    //  用法2：計算多條路徑的，平均路徑距離：
    // step1：計算相鄰兩條的距離的和；
    // step2：step1的和/點的個數；
    function func_multiRoutes_routeSimilarity_averageSimilarity() {
        //set baseline 
        var baseLine = turf.lineString(normalized_multiroutes[0]);
        //calculate distances 
        var multi_routes_distances = [];
        for (var i = 1; i < normalized_multiroutes.length; i++) {
            var point_distances = [];
            for (var j = 0; j < normalized_multiroutes[i].length; j++) {
                var pt = turf.point(normalized_multiroutes[i][j]);
                var distance = turf.pointToLineDistance(pt, baseLine, { units: 'kilometers' });
                point_distances.push((distance * 1000).toFixed(1));
            }
            multi_routes_distances.push(point_distances);
            //reset baseLine 
            baseLine = turf.lineString(normalized_multiroutes[i]);
        }
        // console.log(baseLine);
        console.log(multi_routes_distances[5]);

        //sort distances
        var multi_routes_distances_sorted = [];
        for (var i = 0; i < multi_routes_distances.length; i++) {
            multi_routes_distances_sorted.push(multi_routes_distances[i].sort(function(a, b) { return a - b }));
        }
        console.log(multi_routes_distances_sorted);
        //draw in plot
        func_draw_boxplot();

        function func_draw_boxplot() {
            //set chart
            var canvas_routeSimilarity_averageSimilaritybarplot = document.createElement('div');
            canvas_routeSimilarity_averageSimilaritybarplot.style.width = '100%';
            canvas_routeSimilarity_averageSimilaritybarplot.style.height = '80%';
            canvas_routeSimilarity_averageSimilaritybarplot.setAttribute("id", "canvas_routeSimilarity_averageSimilaritybarplot");
            canvas_routeSimilarity_averageSimilaritybarplot.style.left = "0%";
            // console.log((250+(i-1)*50).toString(10));
            canvas_routeSimilarity_averageSimilaritybarplot.style.top = "330%";
            canvas_routeSimilarity_averageSimilaritybarplot.style.position = "absolute";
            document.body.appendChild(canvas_routeSimilarity_averageSimilaritybarplot);

            //set options
            var options = {
                series: [{
                    name: 'box',
                    type: 'boxPlot',
                    data: [
                        // {
                        //   x: new Date('2017-01-01').getTime(),
                        //   y: [54, 66, 69, 75, 88]
                        // },
                    ]
                }, ],
                chart: {
                    type: 'boxPlot',
                    height: 800,
                },
                colors: ['#008FFB', '#FEB019'],
                title: {
                    text: '平均路徑距離',
                    align: 'middle'
                },
                tooltip: {
                    shared: false,
                    intersect: true
                },
                yaxis: {
                    // min: 0,
                    // max: 1000,
                    type: 'numeric',
                }
            };
            // console.log(options.series);
            // console.log(options.series[0].data);
            // options.series[0].data = [{'x':0,'y':multi_routes_distances[0]}];
            for (var i = 0; i < multi_routes_distances_sorted.length; i++) {
                var data = multi_routes_distances_sorted[i];
                var min = data[0];
                var q1 = data[Math.floor(data.length / 4)];
                var median = data[Math.floor(data.length / 2)];
                var q3 = data[Math.floor(data.length * 3 / 4)];
                var max = data[data.length - 1];

                options.series[0].data.push({ 'x': i, 'y': [min, q1, median, q3, max] });
            }
            console.log(options.series[0].data);
            var chart = new ApexCharts(canvas_routeSimilarity_averageSimilaritybarplot, options);

            chart.render();
        }

        // //draw three lines in map
        // var three_routes = [normalized_multiroutes[0],normalized_multiroutes[6]];
        // ///draw path in map
        // let div_smallMap_routeSimilarity_threeroutes = document.getElementById('div_smallMap_routeSimilarity_threeroutes');
        // div_smallMap_routeSimilarity_threeroutes.setAttribute('style', 'width:100%;height:100%;');
        // // div_smallMap.setAttribute('style', 'width:800px;height:400px;');
        // // canvas.setAttribute("width", 400);
        // // canvas.setAttribute("height", 100);
        // div_smallMap_routeSimilarity_threeroutes.style.left = "0%";
        // div_smallMap_routeSimilarity_threeroutes.style.top = "520%";
        // div_smallMap_routeSimilarity_threeroutes.style.position = "absolute";
        // div_smallMap_routeSimilarity_threeroutes.style.zIndex = "1";
        // var map_handler = L.map('div_smallMap_routeSimilarity_threeroutes', { preferCanvas: true }).setView([0, 0], 11);

        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //   maxZoom: 20,
        //   // attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        // }).addTo(map_handler);

        // var colors = ['red', 'blue','yellow'];
        // for (var i = 0; i < three_routes.length; i++) {
        //   showInMap(three_routes[i], colors[i]);
        // }

        // function showInMap(path, color) {
        //   var path_normalize = [];
        //   for (var i = 0; i < path.length; i++) {
        //     var cell = [];
        //     cell.push(path[i][0]);
        //     cell.push(path[i][1]);
        //     path_normalize.push(cell);
        //   }
        //   console.log(path_normalize.length);

        //   map_handler.setView(path_normalize[Math.floor(path_normalize.length / 2)], 9)
        //   // map_handler.setView(path_normalize[0], 10)

        //   var baseLine = [path_normalize[0], path_normalize[path_normalize.length - 1]];
        //   console.log(baseLine.length);
        //   L.polyline(baseLine, { color: 'green', weight: '1' }).addTo(map_handler);
        //   var polyline_origin = L.polyline(path_normalize, { color: color, weight: '3' }).addTo(map_handler);
        // } 
    }
=======
  }
>>>>>>> 2112186da9c918834af115fb11f7011b68369c17
}

func_label_multiRoutes_routeEff_process();
//draw a label for route accuracy
function func_label_multiRoutes_routeEff_process() {
<<<<<<< HEAD
    const newLabel = document.createElement("label");
    newLabel.style.width = '100%';
    newLabel.style.height = '5%';
    newLabel.style.left = "0%";
    newLabel.style.top = "425%";
    newLabel.style.backgroundColor = "rgba(106,90,205,0.5)";
    newLabel.style.position = "absolute";
    newLabel.style.zIndex = "1";
    newLabel.innerHTML = "路徑效率process圖";
    newLabel.style.textAlign = "left";
    // newLabel.style.fontSize = '150%';

    document.body.appendChild(newLabel);
=======
  const newLabel = document.createElement("label");
  newLabel.style.width = '100%';
  newLabel.style.height = '48px';
  newLabel.style.left = "0%";
  newLabel.style.top = "550%";
  newLabel.style.backgroundColor = "rgba(106,90,205,0.5)";
  newLabel.style.position = "absolute";
  newLabel.style.zIndex = "1";
  newLabel.innerHTML = "路徑效率process圖";
  newLabel.style.textAlign = "left";
  newLabel.style.fontSize = '36px';

  document.body.appendChild(newLabel);

  var dialog = document.getElementById('dialog_routeEfficiency');
  newLabel.addEventListener('click', () => {
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      alert("Sorry, the <dialog> API is not supported by this browser.");
    }
  });
>>>>>>> 2112186da9c918834af115fb11f7011b68369c17
}

func_multiRoutes_routeEff_process();

function func_multiRoutes_routeEff_process() {
    //normalize routes
    var normalized_multiroutes = [];
    for (var i = 0; i < test_demo_data.length; i++) {
        var normalized_route = [];
        for (var j = 0; j < test_demo_data[i].length; j++) {
            normalized_route.push([test_demo_data[i][j]['latitude'], test_demo_data[i][j]['longitude']]);
        }
        normalized_multiroutes.push(normalized_route);
    }

    //calculate route effs
    var routes_effs = [];
    for (var i = 0; i < normalized_multiroutes.length; i++) {
        var cur_route = normalized_multiroutes[i];
        var start_point = turf.point(cur_route[0]);
        var end_Point = turf.point(cur_route[cur_route.length - 1]);
        var baselineDistance = turf.distance(start_point, end_Point, { units: 'kilometers' }) * 1000;

        var realDistance = 0;
        for (var j = 0; j < cur_route.length; j++) {
            realDistance += test_demo_data[i][j]['distance'];
        }
        var routeEff = baselineDistance / realDistance;
        routes_effs.push(routeEff.toFixed(4));
    }

    var data_x = [];
    for (var i = 0; i < routes_effs.length; i++) {
        data_x.push(i);
    }

    draw_line_routeEffs();

<<<<<<< HEAD
    function draw_line_routeEffs() {
        var options = {
            series: [{
                name: "路徑效率",
                data: routes_effs
            }],
            chart: {
                height: 800,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: '路徑效率process圖',
                align: 'middle'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                numeric: data_x,
            }
        };


        //set chart
        var canvas_routeEffs_process = document.createElement('div');
        canvas_routeEffs_process.style.width = '100%';
        canvas_routeEffs_process.style.height = '80%';
        canvas_routeEffs_process.setAttribute("id", "canvas_routeEffs_process");
        canvas_routeEffs_process.style.left = "0%";
        // console.log((250+(i-1)*50).toString(10));
        canvas_routeEffs_process.style.top = "430%";
        canvas_routeEffs_process.style.position = "absolute";
        document.body.appendChild(canvas_routeEffs_process);
        var chart = new ApexCharts(canvas_routeEffs_process, options);
        chart.render();
    }
=======
  function draw_line_routeEffs() {
    var options = {
      series: [{
        name: "路徑效率",
        data: routes_effs
      }],
      chart: {
        // height: 800,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: '路徑效率process圖',
        align: 'middle'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        numeric: data_x,
      }
    };


    //set chart
    var canvas_routeEffs_process = document.createElement('div');
    canvas_routeEffs_process.style.width = '50%';
    canvas_routeEffs_process.style.height = '50%';
    canvas_routeEffs_process.setAttribute("id", "canvas_routeEffs_process");
    canvas_routeEffs_process.style.left = "30%";
    // console.log((250+(i-1)*50).toString(10));
    canvas_routeEffs_process.style.top = "570%";
    canvas_routeEffs_process.style.position = "absolute";
    document.body.appendChild(canvas_routeEffs_process);
    var chart = new ApexCharts(canvas_routeEffs_process, options);
    chart.render();
  }
>>>>>>> 2112186da9c918834af115fb11f7011b68369c17

}

// 分析：判斷誰的位置更考前，來判斷誰是leader。使用從“出發點”到“當前點”的“投影距離”（投影到起始點和終點的直線），來判斷位置，投影距離越大位置越考前。
// 公式：D投影距離 = 開方（平方（D起點到當前點）-平方（D當前點到直線））

func_label_multiRoutes_leaderOfGroup();
//draw a label for route accuracy
function func_label_multiRoutes_leaderOfGroup() {
  const newLabel = document.createElement("label");
  newLabel.style.width = '100%';
  newLabel.style.height = '48px';
  newLabel.style.left = "0%";
  newLabel.style.top = "650%";
  newLabel.style.backgroundColor = "rgba(106,90,205,0.5)";
  newLabel.style.position = "absolute";
  newLabel.style.zIndex = "1";
  newLabel.innerHTML = "羣體飛行的領航者";
  newLabel.style.textAlign = "left";
  newLabel.style.fontSize = '36px';

  document.body.appendChild(newLabel);

  var dialog = document.getElementById('dialog_leaderOfGroup');
  newLabel.addEventListener('click', () => {
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      alert("Sorry, the <dialog> API is not supported by this browser.");
    }
  });
}

func_multiRoutes_leaderOfGroup();
// 做法：
// step1：找到所有的共同的時間戳；
// step2：計算這些時間戳的時候，每隻鴿子的投影距離；
// step3：繪製出各個鴿子的投影距離的分佈圖；
function func_multiRoutes_leaderOfGroup() {
  //make demo data 
  //normalize routes
  var normalized_multiroutes = [];
  for (var i = 0; i < test_demo_data.length; i++) {
    var normalized_route = [];
    for (var j = 0; j < test_demo_data[i].length; j++) {
      normalized_route.push([test_demo_data[i][j]['latitude'], test_demo_data[i][j]['longitude']]);
    }
    normalized_multiroutes.push(normalized_route);
  }

  var index_sameTime = [];
  func_getTimeStamps();
  //same time < 3 s
  function func_getTimeStamps() {
    for (var i = 0; i < test_demo_data[0].length; i++) {
      var date_first = new Date(test_demo_data[0][i]['time']);
      var date_second = new Date(test_demo_data[1][i]['time']);
      var time_diff = date_first.getTime() - date_second.getTime();
      if (time_diff < 3) {
        index_sameTime.push(i);
      }
      // console.log(test_demo_data[0][i]['time'],test_demo_data[1][i]['time']);
    }
  }

  // var projectionDis_list= [];
  var projectionDis_first = [];
  var projectionDis_second = [];
  func_getProjectionDistance();
  function func_getProjectionDistance() {
    var start_point = turf.point(normalized_multiroutes[0][0])
    var baseLine = turf.lineString([normalized_multiroutes[0][0], normalized_multiroutes[0][normalized_multiroutes[0].length - 1]]);

    for (var i = 0; i < index_sameTime.length; i++) {
      var index = index_sameTime[i];
      var dis_first_toStartPoint = turf.distance(turf.point(normalized_multiroutes[0][index]), start_point, { units: 'kilometers' });
      var dis_first_toBaseLine = turf.pointToLineDistance(turf.point(normalized_multiroutes[0][index]), baseLine, { units: 'kilometers' });
      var dis_first = Math.pow(Math.pow(dis_first_toStartPoint, 2) - Math.pow(dis_first_toBaseLine, 2), 0.5);
      projectionDis_first.push(dis_first.toFixed(3));
      var dis_second_toStartPoint = turf.distance(turf.point(normalized_multiroutes[1][index]), start_point, { units: 'kilometers' });
      var dis_second_toBaseLine = turf.pointToLineDistance(turf.point(normalized_multiroutes[1][index]), baseLine, { units: 'kilometers' });
      var dis_second = Math.pow(Math.pow(dis_second_toStartPoint, 2) - Math.pow(dis_second_toBaseLine, 2), 0.5);
      projectionDis_second.push(dis_second.toFixed(3));
    }
  }

  func_draw_line();
  function func_draw_line() {
    //set chart
    var canvas_routeSimilarity_similaritylineplot = document.createElement('div');
    canvas_routeSimilarity_similaritylineplot.style.width = '50%';
    canvas_routeSimilarity_similaritylineplot.style.height = '50%';
    canvas_routeSimilarity_similaritylineplot.setAttribute("id", "canvas_routeSimilarity_similaritylineplot");
    canvas_routeSimilarity_similaritylineplot.style.left = "30%";
    // console.log((250+(i-1)*50).toString(10));
    canvas_routeSimilarity_similaritylineplot.style.top = "670%";
    canvas_routeSimilarity_similaritylineplot.style.position = "absolute";
    document.body.appendChild(canvas_routeSimilarity_similaritylineplot);

    //set options
    var options = {
      series: [{
        name: "pigeon1",
        data: projectionDis_first
      },
      {
        name: "pigeon2",
        data: projectionDis_second
      }
    ],
      chart: {
        // height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: '投影距離(km)',
        align: 'middle'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      // xaxis: {
      //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      // }
    };

    var chart = new ApexCharts(canvas_routeSimilarity_similaritylineplot, options);
    chart.render();
  }
}