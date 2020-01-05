<template>
    <div id="crypto">
        <h2>Crypto</h2>
        <div>
            <span>DES Encrypt: </span>
            <p v-text="desEncrypt" style="font-weight:bold" onclick="alert(1)"></p>
        </div>
        <div>
            <span>DES Decrypt: </span>
            <p v-text="desDecrypt" style="font-weight:bold"></p>
        </div>
        <div>
            <span>AES Encrypt: </span>
            <p v-text="aesEncrypt" style="font-weight:bold"></p>
        </div>
        <div>
            <span>AES Decrypt: </span>
            <p v-text="aesDecrypt" style="font-weight:bold"></p>
        </div>
        <div>
            <span>md5(123456): </span>
            <p v-text="md5" style="font-weight:bold"></p>
        </div>
        <div>
            <span>sha1(123456): </span>
            <p v-text="sha1" style="font-weight:bold"></p>
        </div>
        <div>
            <span>sha256(123456): </span>
            <p v-text="sha256" style="font-weight:bold"></p>
        </div>
        <div>
            <span>sha512(123456): </span>
            <p v-text="sha512" style="font-weight:bold"></p>
        </div>
        <div>
            <span>RSA Encrypt: </span>
            <p v-text="rsaEncrypt" style="font-weight:bold"></p>
        </div>
        <div>
            <span>RSA Decrypt: </span>
            <p v-text="rsaDecrypt" style="font-weight:bold"></p>
        </div>
        <div>
            <span>uuid: </span>
            <p v-text="uuid" style="font-weight:bold"></p>
        </div>
        <div>
            <span>uuid2: </span>
            <p v-text="uuid2" style="font-weight:bold"></p>
        </div>
        <div>
            <span>guid: </span>
            <p v-text="guid" style="font-weight:bold"></p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    #crypto div{
        padding:5px 10px;
        text-align: left;
        display:flex;
        span{
            display:flex;
            width:150px;
            padding-right:10px;
            text-align: right;
            color:#5786f1;
            font-weight: bold;
            justify-content: flex-end;
        }
        p{
            display:flex;
            margin:0;
            padding:0;
            width: calc( 100% - 170px );
            word-break: break-all;
        }
    }
</style>
<script>
import Utils from '../js/utils.js'
export default {
    name: 'Crypto',
    data(){
        return {
            rsaEncrypt: Utils.encryptRsa('123456'),
            rsaDecrypt: Utils.decryptRsa('K0QvgSMvEWSX8S7EM/MswB9zjnl3h/ORH2uxBM1eLXILT9iVK3c2PxobhEmvPMbkEZK8ZjRO3xgzThMU7vQhx71GJZ48rxZL4MAccCtiL08DJ6AOOVsX8p1big11e5XbGDRl5EwUihDhmKS/0n0D9uwv5nD6UwdpujwrfUUIDSxD1wCfNACgO8F6NfNfjvCCtoL/QazJT7+FwEVZpvgpGGrUHMBIrt34BVtPLoBeMl/f6EtbrJkfsZsjhlLPBwvEa+fyeFStJlqROxMmkTcTNaPzx4di3GBIkMPFKgkoYU7TkW/2H1jb696506sMpIrwIsOw0bcTZZjeTYVej63m1Q=='),
            desEncrypt: Utils.encryptDes('123456', 'hAw6eqnFLKxpsDv3'),
            desDecrypt: Utils.decryptDes('eIZDFf0Fmuk=', 'hAw6eqnFLKxpsDv3'),
            aesEncrypt: Utils.encryptAes('123456', 'hAw6eqnFLKxpsDv3'),
            aesDecrypt: Utils.decryptAes('Xs7UbWQyJVFVFE6ELMMaNA==', 'hAw6eqnFLKxpsDv3'),
            md5: Utils.md5('123456'),
            sha1: Utils.sha1('123456'),
            sha256: Utils.sha256('123456'),
            sha512: Utils.sha512('123456'),
            uuid: Utils.getUuid(),
            uuid2: Utils.getUuid2(),
            guid: Utils.getGuid(),
        }
    }
}
</script>