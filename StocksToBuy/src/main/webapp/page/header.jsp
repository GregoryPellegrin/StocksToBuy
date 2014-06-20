<!-- Gregory Pellegrin -->
<!-- pellegrin.gregory.work@gmail.com -->

<!DOCTYPE html>

<header>
	<section>
		<article>
			<h1><a href="WebSite">Stocks To Buy</a></h1>
			
			<h2>Provides U.S stock data and stock filters in real time</h2>
			
	<%
		if (request.getAttribute("forward").equals("stockFilter"))
		{
	%>
			<h3>Use mouse clic and mouse wheel for more precision with filters</h3>
	<%
		}
	%>
			
			<jsp:include page="./navigation.jsp"></jsp:include>
		</article>
		
		<jsp:include page="./advertising.jsp"></jsp:include>
	</section>
</header>