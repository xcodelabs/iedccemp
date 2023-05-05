'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "529e44b00f6a26c9c763e9ae50272e34",
".git/config": "bdb577c284072dcd05cf03bc0eaea3d2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ace884101f24a9e813d0d760f55f2da3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d431f4946473d873256f4ee17d339293",
".git/logs/refs/heads/main": "eda7fcf69bda40922a4e8bf9c27ff621",
".git/logs/refs/remotes/origin/main": "878ea99024636cdd2673ed7787fc5dc9",
".git/objects/00/1316cc85073ccdd865eb673461281caa871570": "660fc3f09648491774f4fcd1cda74c7e",
".git/objects/00/996ab07181ca97c081433e1ec99451d57f9c32": "81935adbb513fe3f46835634f1a673b4",
".git/objects/01/ce4ec69c7e5edecbc4d356806bfc433c9413fd": "619e458ef6244b665f5b54120176fec7",
".git/objects/04/0b33d7208e5bffee961bac3e552a128fa7254d": "96b877ac9c0207022deda6e7268509a5",
".git/objects/04/c49dfec18e7c2084e3c9f9280f1f2f0586b2c9": "97a58f906f78c00215b945307023d170",
".git/objects/06/e5c46d8742c9afc41f44a22a159f22154aa1a7": "10ea0808303bd14130b088d051f90ae5",
".git/objects/09/1cbc4d05bc8f104f2495fb4cfff419db3cc40c": "991cbcc6ed87cf9ff467113be90a7466",
".git/objects/09/f143165281e931912a479ba8bbef40fdf8b1f8": "bd7b68ff437f06ac2c8f125602e83692",
".git/objects/0b/176aea65eed877a66df7af305ce334785d5881": "7b8aad873039f051740457d03d30e526",
".git/objects/0c/9428f49360260d874f55b0474ccf1a1733b87d": "c480f1af275b3ae35a1b3df8711bcc3f",
".git/objects/0e/27433f3bf5dd344fe32054ff39bc4e987f7515": "b8c69236ebf7818cd9a63f7d50084cd6",
".git/objects/0f/cc5c7e6ccd5d788cf5b67840da8d664cd0f27b": "fdf117349a767d6cd94e239acca2a715",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/d91b648fb598c1cfe621acfc387bc5f205dda5": "413edefc8c0cf8e883d32bc830e935f8",
".git/objects/13/ee2db1fa0ff09557626ff3bb2785c42f94c5c0": "64a6ac1943d444263c903fafaf9181e0",
".git/objects/15/79d69c1f9effddd96446fc01ef8d526bd6fb9c": "d697cd5c45e85e067ef8f9452852df19",
".git/objects/15/e121a2dc8f78977a818de37e6adf9739df4ba7": "0b4e045ba9ecf79901a4855a2abf2337",
".git/objects/16/71195f89ad0c1dd3212478d175ff90faf75f66": "6e4f1cade15e2434c63dc2f4e5ab0ff5",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/47525bba121eaf04946b8be3360c2a7b5e906d": "abfaa37a53b05866fe9c8ced3ae6f425",
".git/objects/1b/e7e00a6fa01a70baa93c1dcf3d2790983f12ea": "cd2c9a803dd0e80c23c3ca9233ade77e",
".git/objects/1c/fde0ffded8db53f43094e5311a309c490a7a0b": "d10152c11f5c0242b8fee14e34878e0f",
".git/objects/1e/228b0809bfda18fed56f66e3cf7eed19b4cf18": "3b43999d0cb53af267c42c0fd35dd04e",
".git/objects/1e/5da347cd390c7eb22043664b4c8b39b62efc3a": "35e98189f30e282bc70ef308a43a7cf6",
".git/objects/1f/8dcbca0a12a68bda589ca426b60d7deda1224b": "17aba7f5751cf49d8913b81d921342f7",
".git/objects/1f/caa2b6167a48837b918d22982ef7bc2bab0d01": "e0c4a724d2f920885fed99838e142502",
".git/objects/20/f43cba1a3a901399b3d7f36e732ee43d655293": "6172037dd6c261447c086d85f9607e76",
".git/objects/25/5204c3912dea9589436766c306fcbafb7af6d8": "b50a1ac2ca942ddc8a1178be67508f10",
".git/objects/27/3029f575f6d22e6711002e08807f1960345b3e": "52503a3e80918d3cbce68e18ffe5f264",
".git/objects/27/b01e48e6c37c1c7f8425d619a59440c6843f5d": "c8a4cf57ad192dc5cba3e8f83c85eccf",
".git/objects/29/29e62af3c36f98cd5970ddd140816275e1a728": "cab16d706f8526dac753610190c7282a",
".git/objects/2a/30b05f14e2ef35f488757ba128880cdaa57f51": "a3135c1ca4a9b307606d5d2db306d396",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/31/1fc7385533a1f15a0c5901cc9d831d866d1be6": "65dcebcd728d7deb6c4c1d1942102627",
".git/objects/31/c7b213b4ac19a0b840d4841661e682199e9e00": "fd9ced19b654999f2fa0b93bb27f5255",
".git/objects/33/3a98ad8db38d57194d013722346819d8b0eb33": "7483f63658bbc1040c1c5217632cbc1a",
".git/objects/35/03b65ac392872dd6b309560e1ccc43e131cf40": "69cfa66b62c891f56112f5c24111ee5b",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/018d4c38c55784b58c9a16729c37e272560b0c": "6d9607049428d9f3a47cd64671f13dfa",
".git/objects/3a/f86cdc4f193d1e5d857d9cfcc2a8b5dc5d6ef0": "5ade01d588c119d0c85a447bfa27c956",
".git/objects/3b/1c82fced7cc823446d278a256a414e33355ba8": "d31897d0e19485de31431dff3648f8f7",
".git/objects/3b/c620e11eb740679a50c9570a800817cbfb7f78": "0069cc9afa7be983947c71e9f8e15d5a",
".git/objects/3c/69da16884ba80c52e44cd902babe34c9231363": "ef837662703e625ddf3feb79a0dd1f04",
".git/objects/3c/b61b9e418bc38ff88ad86016809138805162a2": "b5149a16ad022ef164291bb1b473ffd1",
".git/objects/3e/9cd7dfd27f5f75b36fbbebda66543aedcde919": "a5ca7d888ce43e2acaa12b7397cac477",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/12138c3166d94bbb447207cc046cd074e59f81": "2f769b4d933bacc4c443bce89c51cd42",
".git/objects/41/17ff048b25db082f003e880b3059c5b5af482b": "f308cb47a6c99b938570c1e7cab1e86f",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/03247e0a6b0fe17dff925f73a012e1203025d1": "bc5b235dd746d25b4c1ce2d6b480f254",
".git/objects/45/715e72a87114c6d00417f750f268d3cc66dc75": "5b4a13513d488bd0912c929c7b87f370",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/9695993f7f4b64831324a2e54eb309fb187c98": "74ecf3231689179aa5803d2c6d269d37",
".git/objects/47/717a152156916b892fd276e225388ba35a0a50": "32e134d8a3534bd4b8b7dd193a2af891",
".git/objects/48/86d7359cb2903df79743819d9e6202a0f5f574": "8b8db82b1cfe3f7b7698a6d1dd63f2f8",
".git/objects/48/97288e1b20d5650837feda9f966b1caf221db7": "4d566afec3d31b3fbbf3e824c8e3e382",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/49/e12a8255d5e63d43ed390852f5164b07df44e4": "ccf9a6e4665dd0382094230392c98436",
".git/objects/4a/3df54ddf746b0af1f4696586e6d16a4ba33c46": "b5a0d2b18c2c3ad7cb805006690992b6",
".git/objects/4a/f3441f1d920e82c722ea53aafa85ab31266b41": "ea949d91f157abec579c9e7b2f6ba0f6",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/e44aac781bb0548d670c49551ed37951bc56b5": "c133a3d51c5d992ac4c3bac3bb68df6d",
".git/objects/4d/381147db7f183080365127b771d52f0d964b9c": "7ce95c50dfaeb6cdd94a003d253ed527",
".git/objects/51/9818c0718e14ffa86ffebaf58667f97f47ead1": "98c1a186a43cafd77a0ccdd31f4aa719",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/2579f04580fdbdea7aa0a72ae676a033a28f36": "231cec3889aff87b3c4ee256e9dbe983",
".git/objects/57/4d3a3b0bde8140ba6b31c23a01d8cf46acf93e": "d8899fcfdfb0ba14f4bf0ee58371d8f8",
".git/objects/5b/74a957339af00d726cfe51afba5617e724658d": "ab13e31d9c85decb54b8bc45699b9a5e",
".git/objects/5d/ffcdc352a520082078e3fbf9fa4fb2560add88": "33f3108066315310da076c8db1395788",
".git/objects/5e/b69f01c9eccb2189336fd449f1aed2a0a58fda": "938fc936dc516eab6ab85e56805d9a9d",
".git/objects/60/125f9233092dbc4e63b9104eeb44d5bec5144a": "6a2c552e3eb748fe586d92aa1ed2314b",
".git/objects/63/74d9df284d2cc9e3e4b2d00797e828b850d441": "213bd88fe5c8ba26305a16e2634a0f5a",
".git/objects/65/392c91cc91b1d56c2762198e9078179d7158d3": "1ca737b325eece3ea9bba83cac00aec5",
".git/objects/69/98326a0f5a4ed26655d0346f45f67d152de0e3": "283a2c6f35f900d9dcd63aa080ec6bd8",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6d/4b52311a9d991507ab217558080b5fe1bbc77c": "90abb4a6a0722ae631dbfd2c81687a92",
".git/objects/6e/94e04d8fbb138911b58fed33216d8f62d0484d": "9637846e2a99b4d1e218d8b6b89bece4",
".git/objects/6f/d394dbf63278ffd1f9883f6b13b0d7ecd86959": "8294fae0b1ce2f15a829baf76d2854ee",
".git/objects/6f/ded3aabcd793ae701268244409456e4c18e899": "78eb3e669abea854c48529dcf6adf8c5",
".git/objects/71/4527960a84ed9deb682a5bbace1dafc0ef8b15": "27a0221fb43abd3c1b4b3a7e76107a30",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/9d033f546f34972f93f91b342d4b3378771742": "d0ce784d03b62b982b8c68c57df0c7ac",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/78803f5f51dd718548e1e18b7258894beff9ab": "e886ccfedafb711b421625f4354215c1",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7f/d04bd23c3d4d24da03d7757befb545ff6e10e3": "fe9906c007805848166fc4325d03ce4f",
".git/objects/82/024036bd07ab6a03e9a0dde1ff43120c1ec606": "123c2b8f0e194413bbd9678a132be548",
".git/objects/83/02b47913aa1c82deb3e3f55d1a33da54a4130a": "313a8a45976da2b5c67fa206b764f4dc",
".git/objects/86/160164dd22ea166d3852c9efd2c9cc6e99ceaa": "db6d1a08389030f425b942d5c4591f23",
".git/objects/86/b38a220aef1d84b6f52f9ba0ec558e13ba7b42": "cf1f9b9401e9d5792499699d75918d3d",
".git/objects/88/f0582be8f46bbf77b23f00a06ccd588b19c65d": "a0fd1e80c920fd1b78e20454ffca0475",
".git/objects/8a/fb8e5142ad1a175b5a7491a63db0ee3699eddf": "8c0039461d1ef86bb9fb426b94cb4b5c",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/ebe2f58f8114081616be09bfd59f333cef42a8": "59e8ddb0d22b6da3ff4491fac5a73037",
".git/objects/8d/1853bc4bd67f3cb3040c59e0763a3ccc4ab3b8": "81b6b268b8b71b70737bc94be5717d7e",
".git/objects/8d/8b9c37a494cfc56981d85719ebd985e0756bd2": "4e2b634addcf392f92219a3f16be7fd8",
".git/objects/8d/9cca535d1019448b2b87e3fe8270d3ceb6ed26": "2771e118afd4907530e8c7b064b6c4fd",
".git/objects/91/13da3a98c9e79bb6ff9442558fdfb2f34d0524": "52d9142ae086ec1a7291309671fd4057",
".git/objects/91/dd7a3e6183f0f604abac8af6535ed3c24961fd": "adb9d36ad9ff1b823b07f701f0a1063c",
".git/objects/93/19baa1e82c4b7621f02492efe801a99f4dd2d9": "61fa91b62618102a62187e894a8645f4",
".git/objects/93/76ccb36e94514b874bb9a07c6f71b8b6defc65": "96daeb8cae24a8d0b0fe1fea4eb94ede",
".git/objects/93/9239032d4cae9ae8e7b1590f7b4d2b53ab0e9d": "c7a739d850df6da8024ffc23dc16d372",
".git/objects/93/f8cd77ffb72e90606daaf1502a47ff00c0a3ff": "a785ab751d3a2e345cf8aa9acc3f3010",
".git/objects/96/37adcb7ba081a3a874b1aacba9bd61df2f51d1": "d952018ee0d2af1c4a2b58a6c3e5460f",
".git/objects/96/c3996da40a2ce6003b3b923702746d8f5b3822": "03e913c776d27b3ce421bbe9c269b863",
".git/objects/97/183f2963115c25df21629a268a73713a6090b5": "89189ea32094372d34f88c616ed70db6",
".git/objects/97/57eb0040792c4dc49859e48c2a7e7782984338": "89c6b68d235eda32dd39644624799f45",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9d/52d746413752da50510a875bef39b3ce8fc118": "993840bf247cecf471fedef00fafee5a",
".git/objects/9d/b664f635548fe0108afa94ccacdfbba0a09825": "17dd87b6cc72634fe123bb45590c863a",
".git/objects/9e/636c0376f0b427246f6c73a096f16cc806f2be": "3597e94d5245b27b57ae6b2f10f08c53",
".git/objects/9f/f9145c43125d74576dd0907c6793d2934278b9": "1c2f9eebc0f60a5d9423a9c48d93f8d5",
".git/objects/a0/e0180e39d95a79d422eab74a6e6e41ea4bb40d": "56a01bf9005d978ada9d3f42edacd968",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/4e183e2957cbcc0b55eea0e083c8d05a7ba7ff": "d19c8460b959dc36c5bdaed20432cb0f",
".git/objects/a6/671e8b4d2b44fd4a1d5f3162c22cacbad14253": "1dd0f6aaa233bd869ce103ada658bd2c",
".git/objects/a8/4c83e6dc3d71dce33fc7d26ff8dae3b3b0c890": "72c5896d052f2025cc0f2eb5c8df2a7d",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/7004645e2aa1894d1674b1ecb5bcefdf5668a7": "60c27e9c8b08fe0bc16789010a74c94d",
".git/objects/b1/ad0840e8be6e86b58344525ea0596300133130": "cee0e7cef4e91a754f08e0d239bdc02a",
".git/objects/b4/e4a9f21acf266f3034974d16295dccc52eac2f": "07bb4f4f05ec0890033efb999fef8732",
".git/objects/b5/19d8092be5ea5739e68be9b9d3b70e84f7527a": "b3c0daff1658af318f7b20aae664ae3c",
".git/objects/b6/b935d77d3b8a8f7ab544a251f9f41f453de149": "738ab8f93a1d04f1a1ffc9a34a9d9519",
".git/objects/b7/8e3532568f6a1875619039b899d96ace7f2561": "b61b2f3dfc49bae28ea1ac99c8d038d1",
".git/objects/b9/c34540ce0cbd20a4f3db46c3baaff5e33cf603": "cd207109b063a085d8ea1bbe0a855f7a",
".git/objects/bc/c48501fd5d140e24d68e64ca2479ee3313e436": "8df463221f29a9d7edb1503ce15a7566",
".git/objects/bf/346481014d8a6df2d19b61eb4e39d3e6a10d40": "7c85911c7a38edb1d04e2595c3c30b72",
".git/objects/c0/2780c86e1f122dd05be41c23147a648291f7d9": "0fe66d5ad66000566a1bed7fe0ec4b4b",
".git/objects/c2/98d4dea30ba3fe918f3ce5a422b008563ccbfd": "aab542f18a106852603c0257140264a6",
".git/objects/c3/5435fedc3f16ad90b2de13e0d3034b5967531a": "1f843292181be0595aaae290f26bd536",
".git/objects/c3/c87b73b8725d664e4aabc70e575cb946e81740": "beb1897de4d3055d45c340bff495ce9a",
".git/objects/c5/d939ebd2e2586eaf4d91e62d7ccfb2c200c1a5": "e89b39905a31c78cb93cd612d252823f",
".git/objects/c7/053a9ebcfaa99b728fb01554341fcc875b4e83": "d3ab7e3af4366a066fb69ce98a2ab932",
".git/objects/ca/f5ab5151df926c8023d09c93b71b5e634baff4": "2837bac0b1c3b16ca3b9e2f3ed9abd03",
".git/objects/cb/ac769b72152b48f07a9e6b1fd4d413f102fd0a": "efd526b5887a1e07478430c1ae4f409f",
".git/objects/cc/2315cdac4e12c3b4577debd1f7706a61df0ef9": "6fc2f06be42d750bb07aaf8a1f0a78b1",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/d5e59a2eb7e6e860278705ef87d0eccf5e72eb": "0b9170ae74b8013bbb206cd833176802",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/1d7b6557485818865ae81ce52467795a713ef0": "61781c7a25e37605f85422c42d024f62",
".git/objects/d6/3160ba198929153e0483c12f9456c8bac36651": "426e01e043bb2020e991b342e8980466",
".git/objects/d7/b244e769cdf48137daf2c9bc73eeb9ef938fd3": "fe5a0f015816bcecfa828817e00feec4",
".git/objects/d7/dd2415ecfda7c060b94933416eae115c3d7cca": "ec90d80183902b02194b8a9728d96c3d",
".git/objects/dd/c66e4a172c826d598a43f1e5aef1c1f8782262": "ed9b85b61959f19f9be05565135471f1",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/75f9ccdfdb4bc76e83f799fa94f23ff64b85d1": "067a4b27e20c39a0b571398c399cbac0",
".git/objects/df/33e98bc9f87458dce605a426438e3bc47ab0b5": "7243a0e2f5f130189a1936679a4f603c",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/916ac24bd461fcd7a43ecbfe5e22dad0e718bf": "ccca2923cd7ff37b3f8641b3512ac4a0",
".git/objects/e0/da6a15be1a4782436dd8e96d62b98fa1944bc2": "1ea3f95e08036bf2c4c84acf6028e514",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/cf1892b781bb212291c03b10b55381e6e78ed1": "d685906435ea657d5e215a526f9d68a6",
".git/objects/e6/4ccb8025bedd5c6528a7a54ef605fd29db153d": "9a08a3b44761a17614dd9891660e4d11",
".git/objects/e7/a34ff59f4692d21a0305cc70ddee4743cd9359": "21081ec82b56302bd8e50014c7ce3583",
".git/objects/ea/1f29eab58c21bff6b7dc9f9ad9377e5d5e585a": "0d5c5e66f7e1be2305a37c3169c0b935",
".git/objects/ed/0dd7d7e01f3e748f42a085a3f6b813b64d2f6b": "e24260ac2cdf694078acda1d01a9ccd1",
".git/objects/ee/ae56b210e6b10d101b8eee93a0a5beded0d2ae": "e2ea3d99fd99b5359bf07fa09c828418",
".git/objects/f0/7e19f97660d7e92c844e69dd8ecadfd74c110a": "9f29361727826c1ff3c69453122bae6c",
".git/objects/f4/a6e8115f9f20cb0b3e0f2fcc0ccc6e282df5d0": "730ec45d141cf6b9fc34474e45b1f605",
".git/objects/f5/fe2e24d782151568dc6efab96bff28d3da8fa7": "e41649a406289b42e721685372c6c66e",
".git/objects/f9/be2b01bde013370431ed56d28d495827cb3581": "de2f46d2b788350f0d4c086d3d92842d",
".git/objects/fc/1e3f72752d2d490f72a5465ec1ae97aad4270e": "6d1fb56272bd14d294697fb3ecc2847a",
".git/objects/fe/9cc87580713c0f0238a4c887927ca8ee0df429": "dabdbad06cbcbc26cb39bdaf2e261a8a",
".git/objects/ff/e5db3302023da7939d19bc989547f71be2dfd3": "a6e63ca6720fd493f5ed550b80bb5b12",
".git/refs/heads/main": "98455c69087d159b17e51b88e365e787",
".git/refs/remotes/origin/main": "98455c69087d159b17e51b88e365e787",
"assets/AssetManifest.json": "f5cf19b44d7db4eb6fe4ff5525b51302",
"assets/assets/certifcate_final.png": "f1d80c506ef1360cd1f1786f562293b2",
"assets/assets/certifcate_final.svg": "d0e4023a332079b60676f643ebe510b6",
"assets/assets/certificate.xlsx": "7593591c5e90195e1b368fd2b7c9234c",
"assets/assets/iedclogo.jpeg": "e047374ab0de051e9b6ea6774816e612",
"assets/assets/Technaura)!.svg": "6944fa14395a80b096aef2cc34781982",
"assets/assets/Technaura.svg": "211acc6ba625ff8d1ebcf75880e14777",
"assets/certificate.xlsx": "7593591c5e90195e1b368fd2b7c9234c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "36d4b23861defdb641893620646b993a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "4b2dcd0be9edce868ea0e335a2a37473",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "613815398cfd63a0ed19bc9b5d69fd22",
"icons/Icon-512.png": "f79cf0f54277444022b756c1a1211f72",
"icons/Icon-maskable-192.png": "613815398cfd63a0ed19bc9b5d69fd22",
"icons/Icon-maskable-512.png": "f79cf0f54277444022b756c1a1211f72",
"index.html": "e21fd18f6ca426e8b56650ee8df523e7",
"/": "e21fd18f6ca426e8b56650ee8df523e7",
"main.dart.js": "acd69d79e67aeb4d11f296cfb4535f43",
"manifest.json": "8362bba9cdd1c006c3359a8bf41d1e2b",
"version.json": "27bff994c5cd024de66988fbadb35ff8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
