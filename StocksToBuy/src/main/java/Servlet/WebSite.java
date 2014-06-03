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

public final class WebSite extends HttpServlet
{
	private String forward;
	private String design;
	
	@Override
	public void init ()
	{
		this.forward = "stockValue";
		this.design = "light";
	}
	
	private void setForward (final HttpServletRequest request)
	{
		this.forward = "stockValue";
		
		if ((request.getParameter("section") != null) && (! request.getParameter("section").isEmpty()))
			this.forward = request.getParameter("section");
	}
	
	private void setDesign (final HttpServletRequest request)
	{
		this.design = "light";
		
		if ((request.getParameter("design") != null) && (! request.getParameter("design").isEmpty()))
			this.design = request.getParameter("design");
	}
	
	@Override
	protected void service (HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		this.setForward(request);
		this.setDesign(request);
		
		request.setAttribute("forward", this.forward);
		request.setAttribute("design", this.design);
		
		RequestDispatcher requestDispatcher = request.getRequestDispatcher("index.jsp");
		requestDispatcher.forward(request, response);
	}
}