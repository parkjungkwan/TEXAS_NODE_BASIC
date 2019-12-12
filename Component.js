function Div(){
	this.make = function(id){
		const div = document.createElement('div')
		div.setAttribute('id',id)
		div.setAttribute('style','border : 1px solid black')
		//div.textContent = text
		return div
	}
}

function InputText(){
	this.make = function(id, type){
		const input = document.createElement('input')
		input.setAttribute('id',id)
		input.setAttribute('type',type)
		return input
	}
}
function InputButton(){
	this.make = function(id, type, val){
		const input = document.createElement('input')
		input.setAttribute('id',id)
		input.setAttribute('type',type)
		input.setAttribute('value',val)
		return input
	}
}	
function Br(){
	this.make = function(){
		const br = document.createElement('br')
		return br
	}
}		

function Factory(type){
	switch(type){
		case 'inputText' : return new InputText()
		case 'inputButton' : return new InputButton()
		case 'br' : return new Br()
		case 'div' : return new Div()
	}
}