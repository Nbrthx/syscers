<script>
    var createkey = null
    var jsenc = null

    var secretkey = localStorage.getItem("secretkey") || ""
    var pubkey = ""
    var textkey = ""

    // "NDBUQUltWERZZ0YwUUNoRGdwbGxZS3ZYU1VJZXcwQE1Ha0NBUUFDRXdDSmx3MklCZEVBb1E0S1paV0NyMTBsQ0hzQ0F3RUFBUUlTWW5HMG1jMW5sQ2FtM1pOektNQmEKSThSUkFnb0E1NzZuNHNZUHpndTVBZ29BbC8yZ1JMRVV3ZGZUQWdrRC9EUlk0djBNbHdrQ0NIRmx5UzEyOFFXdgpBZ2toQ2lIa1liSXhMRlk9Ci0tLQ=="
    
    function load(){
	createkey = new JSEncrypt({ default_key_size: 144 })
	jsenc = new JSEncrypt()

	if(secretkey){
	    var getpub = jsenc
	    getpub.setPrivateKey(secretkey)
	    pubkey = compubco(getpub.getPublicKey().substr(27,64))
	}
    }

    const compubco = (pub) => {
        var getbegin = (text) => {
            if(text == "QAwGgI"){
                return "0"
            }
            else return "1"
        }
        var getend = (text) => {
            if(text == "IDAQAB"){
                return "0"
            }
            else return "1"
        }

        var newpub = pub.substring(2,3)
        newpub += getbegin(pub.substring(25,31))
        newpub += pub.substring(31,58)
        newpub += getend(pub.substring(58,64))
        return newpub
    }

    function submit(){
        if(textkey !== "" || textkey !== null){
	    var getpub = jsenc
	    getpub.setPrivateKey(textkey)
	    if(getpub.getPublicKey())
		secretkey = textkey
		pubkey = compubco(getpub.getPublicKey().substr(27,64))
            	localStorage.setItem("secretkey", textkey)
        }
    } 

    function makekey(){
	if(secretkey !== "") return
        secretkey = generatestring()

	var getpub = jsenc
	getpub.setPrivateKey(secretkey)
	pubkey = compubco(getpub.getPublicKey().substr(27,64))

        localStorage.setItem("secretkey", generatestring())
    }

    function generatestring(){
	if(createkey == null) return false
        return createkey.getPrivateKey().substr(32, 150)
    }
</script>
<svelte:head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jsencrypt/3.2.1/jsencrypt.min.js" on:load={load}></script>
</svelte:head>
<main>
	<div class="dropdown">
		<div class="dropbtn">
			<div class="title-name">Profile</div>
		</div>
		<div class="button-down" on:click={() => location.href = "/"}>
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
				<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
			</svg>
		</div>
	</div>
    <h2>Your Address</h2>
    Public key:<br>
    <input type="text" value={pubkey} disabled><br>
    Private key:<br>
    <input type="text" value={secretkey} disabled><br>
    <h2>New in Here?</h2>
    <button on:click={makekey}>Create Key</button><br>
    Or<br>
    <input type="text" bind:value={textkey} placeholder="put private key"><br>
    <button on:click={submit}>Submit</button><br>
    <br>
    And then click triangle button on top right
    <br>
</main>

<style>
	main {
		background: #3C8384;
		width: 600px;
		height: calc(100vh - 3em);
		text-align: left;
		margin: 16px auto 0px auto;
		box-shadow: 0px 0px 12px #aab;
		overflow-y: scroll;
		border-radius: 12px;
        text-align: center;
        color: #fff;
	}

	.dropbtn {
		height: 50px;
		width: calc(100% - 70px);
		color: white;
		font-size: 16px;
		position: relative;
		display: inline-block;
	}

	.title-name{
		font-size: 20px;
		font-weight: bold;
		position: relative;
		left: 30px;
		top: -10px;
	}

	.button-down{
		width: 50px;
		height: 50px;
		position: relative;
		display: inline-block;
        cursor: pointer;
	}

	.button-down svg{
		margin-top: 10px;
		margin-left: 18px;
	}

	.dropdown {
		height: 50px;
		width: 100%;
		background: #3C8384;
		position: relative;
		display: inline-block;
	}

    input{
        background: #fff;
        color: #000;
		width: calc(100% - 120px);
		margin: 7px 16px;
		border: none;
		border-radius: 8px;
	}

    input:disabled{
        background: #ccc;
        color: #444;
    }

	button {
		background: #fff;
		border: none;
		border-radius: 8px;
		color: #1F3051;
		padding: 0.4em 16px;
	}

	button:hover {
		background: #1F3051;
		color: #fff;
	}

	/* h1 {
		color: #3C8384;
		text-transform: uppercase;
		font-weight: bold;
	} */

	@media (max-width: 640px) {
		main {
			width: 100vw;
            height: 100vh;
            margin: 0;
            border-radius: 0;
		}
        input{
            width: calc(100% - 60px);
        }
	}
</style>
