var AppIndexIncidente = function() {
    var statusAudio = false;
    var limit = 20;
    var form = $('#frmIndex');
    var m_audio = $('#m_audio');
    var m_video = $('#m_video');
    var m_det_incidencia = $('#m_det_incidencia');
    var m_crear_incidencia = $('#m_crear_incidencia');
    var m_cerrar_incidencia = $('#m_cerrar_incidencia');
    var m_adj_incidencia = $('#m_adj_incidencia');
    var m_adj_unidad = $('#m_adj_unidad');
    var m_agr_incidencia = $('#m_agr_incidencia');
    var m_video_incidencia = $('#m_ver_video');
    var clasificacion_inc = $('#txtClasfInc');
    var nro_pagina = $('[name="txtPagina"]');
    var fec_registro = $('[name="txtFecRegistro"]');
    var ciudadano = $('[name="txtCiudadano"]');
    var nro_contacto = $('[name="txtNroContacto"]');
    var direccion = $('[name="txtDireccion"]');
    var sector = $('[name="txtSector"]');
    var incidencia_det = $('[name="txtDetIncidencia"]');
    var rango_fecha = $('input[name="txtFecRegistro"]');
    var btnAgrupar = $('[name="btnAgrupar"] span');
    var chkAll = $('[name="chkAll"]');

    var init = function() {
        //initSocket();
        jQueryEvts();

        rango_fecha.daterangepicker({
            "locale": drp_es,
            "opens": "center"
        });

        // m_audio.dialog({
        //     close: function(event, ui) {
        //         var playerAd = document.getElementById('audioPlayer');
        //         playerAd.pause();
        //         playerAd.currentTime = 0;
        //     }
        // });
        // m_audio.dialog('close');
        // m_video.dialog({
        //     close: function(event, ui) {
        //         var playerVd = document.getElementById('videoPlayer');
        //         playerVd.pause();
        //         playerVd.currentTime = 0;
        //     }
        // });
        // m_video.dialog('close');

        // window.addEventListener('storage', function(e) {
        //     if (e.key === 'asignacion_recursos') {
        //         if (m_det_incidencia.hasClass('in')) {
        //             $('[name="ddlSupervisores"]').multiSelect('select', ['3']);
        //         }
        //     }
        // });

        m_det_incidencia.find('.modal-dialog').width(width_win * .7);
        m_crear_incidencia.find('.modal-dialog').width(width_win * .7);

        //form.trigger('submit');
    }

    var jQueryEvts = function() {

        // $(document).on('change', '[id="ddlClasificInc"]', function(e) {
        //     var item = $(this);
        //     var params = { class: 'MultitablaController', method: 'index', tabla: 'ssc_tipo_inc', padre_id: item.val() };

        //     App.dropDownList('ddlTipoInc', params);
        // });

        // $(document).on('change', '[id="ddlTipoInc"]', function(e) {
        //     var item = $(this);
        //     var params = { class: 'MultitablaController', method: 'index', tabla: 'ssc_subtipo_inc', padre_id: item.val() };

        //     App.dropDownList('ddlSubTipoInc', params);
        // });

        // $(document).on('change', '[name="txtAdjunto[]"]', function(e) {
        //     App.uploadFile('txtAdjunto[]', 'txtAdjTmp');
        // });

        // $(document).on('click', '[name="btnAgrupar"]', function(e) {
        //     modal_agr_incidente();
        // });

        // $(document).on('click', '[name="btnExportar"]', function(e) {
        //     window.open('informe_incidencias.php');
        // });

        $(document).on('click', '[name="btnEditarInc[]"]', function(e) {
            var tr = $(this).closest('tr');
            var incidente_id = Number(tr.attr('data-id'));

            App.tabStorage('detalle_incidente', incidente_id);
            modal_det_incidente(incidente_id);
        });
        $(document).on('click', '[name="btndescarga[]"]', function(e) {

            var incidente_id = "nuevo";

            //App.tabStorage('detalle_incidente', incidente_id);
            modal_create_incidente(incidente_id);
        });

        // $(document).on('click', '[name="btnCerrarInc[]"]', function(e) {
        //     var tr = $(this).closest('tr');
        //     var incidente_id = Number(tr.attr('data-id'));

        //     modal_cerrar_incidente(incidente_id);
        // });

        // $(document).on('click', '[name="btnAdjInc[]"]', function(e) {
        //     var tr = $(this).closest('tr');
        //     var incidente_id = Number(tr.attr('data-id'));

        //     modal_adj_incidente(incidente_id);
        // });

        // $(document).on('click', '[name="btnAdjUnd[]"]', function(e) {
        //     var tr = $(this).closest('tr');
        //     var incidente_id = Number(tr.attr('data-id'));

        //     modal_adj_unidad(incidente_id);
        // });

        // $(document).on('click', '[name="btnVerVideo[]"]', function(e) {
        //     var tr = $(this).closest('tr');
        //     var video = document.getElementById("videoPlayer");

        //     if (tr.attr('data-video').length) {
        //         m_video.dialog('open');
        //         dialog_position('m_video');
        //         video.src = path_media + "/" + tr.attr('data-video');
        //         video.load();
        //     }
        // });

        // $(document).on('click', '[name="btnEscAudio[]"]', function(e) {
        //     var tr = $(this).closest('tr');

        //     var player = document.getElementById('audioPlayer');
        //     var sourceWav = document.getElementById('audioPlayer');

        //     if (tr.attr('data-audio').length) {
        //         m_audio.dialog('open');
        //         dialog_position('m_audio');

        //         sourceWav.src = path_media + "/" + tr.attr('data-audio');
        //         player.load();
        //         player.play();
        //     }
        // });

        // $(document).on('click', '[name="btnEscLlamada[]"]', function(e) {
        //     var tr = $(this).closest('tr');

        //     var player = document.getElementById('audioPlayer');
        //     var sourceWav = document.getElementById('audioPlayer');

        //     if (tr.attr('data-llamada').length) {
        //         m_audio.dialog('open');
        //         dialog_position('m_audio');

        //         sourceWav.src = tr.attr('data-llamada');
        //         player.load();
        //         player.play();
        //     }
        // });

        // $(document).on('click', '[name="chkSel[]"]', function(e) {
        //     var chkSel = $(this);

        //     if (chkSel.is(':checked')) {
        //         btnAgrupar.text(
        //             parseInt(btnAgrupar.text()) + 1
        //         );
        //     } else {
        //         btnAgrupar.text(
        //             parseInt(btnAgrupar.text()) - 1
        //         );
        //     }

        //     chkSelInc(
        //         [chkSel.val()]
        //     );
        // });

        // $(document).on('click', '[name="chkAll"]', function(e) {
        //     var chkSel = $('[name="chkSel[]"]');

        //     chkSel.prop('checked', $(this).is(':checked'));

        //     if (chkSel.is(':checked')) {
        //         btnAgrupar.text(
        //             parseInt(btnAgrupar.text()) + $('[name="chkSel[]"]:checked').length
        //         );
        //     } else {
        //         btnAgrupar.text(
        //             parseInt(btnAgrupar.text()) - $('[name="chkSel[]"]').length
        //         );
        //     }

        //     chkSelInc(
        //         $('input[name="chkSel[]"]:checked').map(function() {
        //             return parseInt($(this).val());
        //         }).get()
        //     );
        // });

        $('#frmIndex').submit(function(e) {
            App.tabStorage('form_incidente', JSON.stringify(App.arrayToForm($("#frmIndex").serializeArray())));
            fs_incidente();
            return false;
        });

        $(document).on('click', '[name="btnLimpiar"]', function(e) {
            location.href = 'index.php';
        });
    }

    // var chkSelInc = function(rbtIncidente) {
    //     $.ajax({
    //         url: path_ws,
    //         type: 'post',
    //         dataType: 'json',
    //         data: {
    //             'class': 'IncidenteController',
    //             'method': 'chkSel',
    //             'rbtIncidente': rbtIncidente
    //         },
    //         success: function(response) {

    //         }
    //     });
    // }

    // var initSocket = function() {
    //     var socket_pbx = io.connect('//95.217.44.43:3000');

    //     socket_pbx.on('connect', function() {
    //         console.log('connected');

    //         socket_pbx.on('contestar_llamada', function(obj) {
    //             $.post("incidentes.php", { txtNroCaso: obj.INCIDENTE_ID, highlight: 'highlight' }, function(data) {
    //                 fs_incidente_sck(obj.INCIDENTE_ID, data, 'highlight');
    //             });
    //         });

    //         socket_pbx.on('app_sos', function(obj) {
    //             $.post("incidentes.php", { txtNroCaso: obj.incidente_id, highlight: 'highlight-sos' }, function(data) {
    //                 fs_incidente_sck(obj.incidente_id, data, 'highlight-sos');
    //             });
    //         });

    //         socket_pbx.on('app_incidente', function(obj) {
    //             $.post("incidentes.php", { txtNroCaso: obj.incidente_id, highlight: 'highlight' }, function(data) {
    //                 fs_incidente_sck(obj.incidente_id, data, 'highlight');
    //             });
    //         });

    //         socket_pbx.on('disconnect', function() {
    //             console.log('disconnected');
    //         });
    //     });

    // function fs_incidente_sck(incidente_id, data, highlight) {
    //     var rows = $('#tblIncidencias > tbody > tr.rows_0').length;

    //     if (rows == 0) {
    //         $(data).insertBefore('#tblIncidencias > tbody > tr:first');
    //     } else {
    //         $('#tblIncidencias > tbody').html(data);
    //     }

    //     setTimeout(function() {
    //         $('#tblIncidencias tr[data-id="' + incidente_id + '"]').removeClass(highlight);
    //     }, 3000);

    //     return false;
    // }
    // }

    var modal_agr_incidente = function() {
        $.get(path_root + "/users/incidentes/agrupar.php", function(data) {
            m_agr_incidencia.find('.modal-content').html(data);
            m_agr_incidencia.modal('show');
        }).done(function() {
            AppAgruparIncidente.init();
        });
    }
    var modal_det_incidente = function(incidente_id) {
        $.get(path_root + "/users/certificados/edit.php", { incidente_id: incidente_id }, function(data) {
            m_det_incidencia.find('.modal-content').html(data);
            m_det_incidencia.modal('show');
        }).done(function() {
            AppEditIncidente.init();
        });
    }
    var modal_create_incidente = function(incidente_id) {
        $.get(path_root + "/users/certificados/create.php", { incidente_id: incidente_id }, function(data) {
            m_crear_incidencia.find('.modal-content').html(data);
            m_crear_incidencia.modal('show');
        }).done(function() {
            AppCreateIncidente.init();
        });
    }

    var modal_cerrar_incidente = function(incidente_id) {
        $.get(path_root + "/users/certificados/cerrar.php", { incidente_id: incidente_id }, function(data) {
            m_cerrar_incidencia.find('.modal-content').html(data);
            m_cerrar_incidencia.modal('show');
        }).done(function() {
            AppCerrarIncidente.init();
        });
    }

    var modal_adj_incidente = function(incidente_id) {
        $.get(path_root + "/users/certificados/adjuntos.php", { incidente_id: incidente_id }, function(data) {
            m_adj_incidencia.find('.modal-content').html(data);
            m_adj_incidencia.modal('show');
        });
    }

    var modal_adj_unidad = function(incidente_id) {
        $.get(path_root + "/users/incidentes/unidad_movil.php", { incidente_id: incidente_id }, function(data) {
            m_adj_unidad.find('.modal-content').html(data);
            m_adj_unidad.modal('show');
        }).done(function() {
            AppEditUndMov.init();
        });
    }

    var fu_incidente = function(data) {
        data['class'] = 'IncidenteController';
        data['method'] = 'update';

        $.ajax({
            url: path_ws,
            type: 'post',
            dataType: 'json',
            data: data,
            success: function(response) {
                $.post("incidentes.php", { txtNroCaso: data.incidente_id }, function(html) {
                    $('#tblIncidencias tr[data-id="' + data.incidente_id + '"]').replaceWith(html);
                }).done(function() {
                    App.toaster('Notificación de actualización', 'Incidente actualizado', 'success');
                    m_cerrar_incidencia.modal('hide');
                });
            }
        });
    }

    var fs_incidente = function(pagina = 0) {
        var data = App.arrayToForm($("#frmIndex").serializeArray());
        data.class = 'IncidenteController';
        data.method = 'index';
        data.txtPagina = pagina;

        $.get(path_root + '/users/certificados/incidentes.php', data, function(response) {
            $('#tblIncidencias tbody').html(response);
            $('#hlDescData').attr('href', path_root + '/users/incidentes/exportar_excel.php?data=' + encodeURIComponent(JSON.stringify(data)));

            chkAll.prop('checked', false);

            if (pagina == 0) {
                fs_incidente_pg();
            }
        });
    }

    var fs_incidente_pg = function() {
        var data = App.arrayToForm($("#frmIndex").serializeArray());
        data.class = 'IncidenteController';
        data.method = 'countBySql';

        $.post(path_ws, data, function(response) {
            var cantidad = parseInt(response.cantidad);
            var paginas = parseInt(response.paginas);

            var pg = App.paginator('paginator', paginas);

            App.paginatorMsg(
                'TblIncMsg',
                (cantidad > 0 ? 1 : 0),
                (cantidad < limit ? cantidad : limit),
                response.cantidad
            );

            pg.on('page', function(event, num) {
                App.paginatorMsg(
                    'TblIncMsg',
                    ((num - 1) * limit) + 1, num * limit, response.cantidad
                );
                App.tabStorage('form_incidente', JSON.stringify(App.arrayToForm($("#frmIndex").serializeArray())));
                fs_incidente(num);
            });
        }, "json");
    }

    var dialog_position = function(id) {
        var m_buscador = $('#m_buscador');
        var dialog = $('[aria-describedby="' + id + '"]');
        var _left = parseInt($(window).width() - (dialog.width() + (dialog.width() * 0.1)));
        var _top = m_buscador.offset().top + parseInt(m_buscador.css('padding-top').replace('px', ''));

        dialog.css({
            "top": _top,
            "left": _left
        });

        $('.ui-dialog-titlebar-close').html("X");
    }

    return {
        init: function() {
            return init();
        }
    }
}();