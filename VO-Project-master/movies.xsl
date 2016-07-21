<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<xsl:template match="/">
		<html>
			<head>
				<style>
				  table {
				    border-collapse: collapse;
				  }
				  td, th {
				    border: 1px solid #999;
				    padding: 0.5rem;
				    text-align: left;
				  }
				  th {
				    font-weight: bold;
				  }
			  </style>
			</head>
			<body>
				<table>
					<tr>
						<th>User code</th>
						<th>Movie Name</th>
						<th>Comments</th>
						<th>Genre</th>
					</tr>
					<xsl:for-each select="movies/movie">
							<tr>
								<td>
									<xsl:value-of select="User_code"/>
								</td>
								<td>
									<xsl:value-of select="Movie_Name"/>
								</td>
								<td>
									<xsl:value-of select="Comments"/>
								</td>
								<td>
									<xsl:value-of select="Genre"/>
								</td>
							</tr>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>