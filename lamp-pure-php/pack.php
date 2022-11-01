<?php

print <<< EOT

<TITLE>Distribution -- /LineMode</TITLE>
<NEXTID 5>
<H1>Getting the WWW files</H1>Read this if you have not yet got the WWW files you need, and you
cannot NFS mount a directory on which they reside.<P>
 The source and binary of WWW project files are currently available
(see <A NAME=1 HREF=http://info.cern.ch/hypertext/Copyright.html>copyright</A> ) by anonymous FTP from node info.cern.ch.  This node
is currently 128.141.201.74 but THIS MAY CHANGE. The files are compressed
tape archive files (.tar.Z).  To get  a file using anonymous FTP,
use user name "anonymous", and your email address as a password:-
<XMP>			> ftp info.cern.ch
			Enter user name: anonymous
			Password: me@myhost.edu
			ftp> cd /pub/www/src
			ftp> binary
			ftp> get WWWLineMode_vvv.tar.Z
			ftp> quit
			>

</XMP>The file name will depend on the product you want.  Here vvv is the
version number of the software.<P>
Once you have the compressed tar file, you must uncompress it and
unwrap it.
<XMP>			uncompress WWWLineMode_vvv.tar.Z

</XMP>This will make a rather larger file with the name without the ".Z".
To unwrap it,
<XMP>			tar xvf WWWLineMode_vvv.tar

</XMP>Now you should <A NAME=2 HREF=Installation.html>install the line mode browser</A> , <A NAME=3 HREF=../../Daemon/User/Guide.html>install the server</A>
,<A NAME=4 HREF=../../../Viola/Installation.html> install Viola</A> , etc.
<ADDRESS><A NAME=0 HREF=http://info.cern.ch/hypertext/TBL_Disclaimer.html>Tim BL</A>

EOT;
?>
