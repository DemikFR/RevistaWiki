var owlAll = $('.revistas');
const link_revista = document.querySelector("#link_revista");
$(document).ready(function(){
	owl = $('.revistas').owlCarousel({
		autoplay: true,
		autoplaySpeed: 300,
		loop:true,
		margin:30,
		navSpeed: 300,
		nav:false,
		responsive:{
			0:{
				items:1
			}
		}
	})
	owl2 = $('.edicoes').owlCarousel({
		autoplay: true,
		autoplaySpeed: 300,
		loop:true,
		margin:30,
		navSpeed: 300,
		nav: false,
		responsive:{
			0:{
				items:2
			},
			350:{
				items:2
			},
			700:{
				items:4
			}
		}
	})
	owlAll.on('changed.owl.carousel', function (e) {
		//console.log("current: ",e.item.index) //same
		if (("current: ",e.item.index == 2)){
			document.getElementById("id-paragrafo-usp").textContent="A revista da renomada Universidade de São Paulo contém temas diversos, desde humanidades à ciências exatas, inclusive os referentes às novas descobertas.";
			link_revista.href = "https://www.revistas.usp.br/wp/";
		} 
		else if (("current: ",e.item.index == 3)){
			document.getElementById("id-paragrafo-usp").textContent="Fundada em 1845, a revista estadunidense trás informações científicas para o público geral, se atentando sempre à clareza e qualidade de seus textos.";
			link_revista.href = "https://sciam.com.br/";
		}   
		else if (("current: ",e.item.index == 4)){
			document.getElementById("id-paragrafo-usp").textContent="Revista britânica com temas de ciencia multidisciplinar, trás pesquisas e informações de grande relevância internacional, porém dando espaço ao público geral de compreender descobertas da ciência.";
			link_revista.href = "https://www.nature.com/";
		} 
		else if (("current: ",e.item.index == 5)){
			document.getElementById("id-paragrafo-usp").textContent="Com uma linguagem direta e objetiva, a revista Newslab traduz-se no mais moderno meio de comunicação do mercado, publicando informações científicas e técnicas sobre os novos produtos e equipamentos para as diversas áreas do diagnóstico.";
			link_revista.href = "https://newslab.com.br/";
		} 	
	})
})

