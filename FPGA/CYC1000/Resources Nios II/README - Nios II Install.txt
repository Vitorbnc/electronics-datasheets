QUARTUS ECLIPSE MANUAL INSTALLATION
1. Download CDT 8.8.1 which is Eclipse C/C++ IDE for Mars.2
	a. Windows: https://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/mars/2/eclipse-cpp-mars-2-win32-x86_64.zip
	b. Linux: https://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/mars/2/eclipse-cpp-mars-2-linux-gtk-x86_64.tar.gz
2. Extract the downloaded file into <Quartus installation directory>/nios2eds/bin.  You should see <Quartus installation directory>/nios2eds/bin/eclipse 
   folder after extraction is done.
3. Rename <Quartus installation directory>/nios2eds/bin/eclipse folder to <Quartus installation directory>/nios2eds/bin/eclipse_nios2
4. Extract <Quartus installation directory>/nios2eds/bin/eclipse_nios2_plugins.zip (or tar.gz for Linux) to 
   <Quartus installation directory>/nios2eds/bin. The extraction will override files in <Quartus installation directory>/nios2eds/bin/eclipse_nios2.  
5. Verify the extraction is done correctly by making sure you see <Quartus installation directory>/nios2eds/bin/eclipse_nios2/plugin_customization.ini file
6. You can now launch Nios2 II SBT for Eclipse via eclipse-nios2.exe

