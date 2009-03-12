/*
# Copyright (C) Martijn Voncken 2008 <mvoncken@gmail.com>
#
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 3, or (at your option)
# any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, write to:
#     The Free Software Foundation, Inc.,
#     51 Franklin Street, Fifth Floor
#     Boston, MA  02110-1301, USA.
#

quick and dirty auto-refresh timer.
Our users have waited too long for a new auto-refresh.
I need to get things done (even if it's not pretty). ;with the least dependencies for a backport to 1.05
*/
var seconds=0;
var refresh_secs = 10;
var prc = 0;
var timer_active = 0;
function continue_timer(){
    if (!timer_active) {
        return;
    }
    seconds+=0.1;
    if (seconds > refresh_secs){
        timer_active = 0;
        do_refresh();
     }
     prc = ((seconds / refresh_secs) * 100 );
     el("timer_bar").style.width = prc + "%";
     setTimeout("continue_timer()",100)
}

function do_refresh(){
   location.reload(true);
}

function start_timer(){
    timer_active = 1;
    continue_timer();
    el("timer_pause").style.display = "none";
    el("timer_start").style.display = "inline";
    el("timer_outer").title = "Auto refresh:Active; click here to pause";
    setCookie('auto_refresh',"1");
}
function stop_timer(){
    timer_active = 0;
    el("timer_pause").style.display = "inline";
    el("timer_start").style.display = "none";
    el("timer_outer").title = "Auto refresh:Paused; click here to start";
    setCookie('auto_refresh',"0");
}


function toggle_timer() {
    if (timer_active) {
        stop_timer();
    }
    else {
        start_timer();
    }
}