/**
 * Gregory Pellegrin
 * pellegrin.gregory.work@gmail.com
 */

package Servlet;

import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet (name = "WebSite", urlPatterns ={"/WebSite"})

/*
 * Sauvegarder le design
 * Faire le menu de navigation
 * Refresh uniquement le changement de valeur et non le reafichage du tableau
 */

public final class WebSite extends HttpServlet
{
	private String forward;
	
	@Override
	public void init ()
	{
		this.forward = "stockValue";
	}
	
	private void setForward (final HttpServletRequest request)
	{
		this.forward = "stockValue";
		
		if ((request.getParameter("section") != null) && (! request.getParameter("section").isEmpty()))
			this.forward = request.getParameter("section");
	}
	
	@Override
	protected void service (HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		this.setForward(request);
		
		request.setAttribute("forward", this.forward);
		
		RequestDispatcher requestDispatcher = request.getRequestDispatcher("index.jsp");
		requestDispatcher.forward(request, response);
	}
}